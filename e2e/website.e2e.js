const puppeteer = require("puppeteer");
const percySnapshot = require("@percy/puppeteer");

describe("Web site", () => {
  const BASE_URL = "http://localhost:3000";
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  describe("top page", () => {
    beforeAll(async () => {
      await page.goto(BASE_URL, { waitUntil: "networkidle2" });
      // wait for 3s delay time
      await page.waitForTimeout(3000);
    });

    it("should show page", async () => {
      await expect(page.title()).resolves.toMatch("shinteam");
      await percySnapshot(page, "Top page");
    });
  });
});
