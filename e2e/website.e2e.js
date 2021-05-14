const puppeteer = require("puppeteer");
const { percySnapshot } = require("@percy/puppeteer");

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
      await page.goto(BASE_URL);
    });

    it("should show page", async () => {
      await expect(page.title()).resolves.toMatch("nuxt-percy-sample");
      await percySnapshot(page, "Top page");
    });
  });
});
