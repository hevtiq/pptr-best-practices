module.exports = {
    launch: {
        // headless: true,  // set to true when run scripts only
        headless: process.env._headLess !== 'false',
        slowMo: process.env._slowMo ? process.env._slowMo : 0,
        ignoreHTTPSErrors: true,
        devtools: true,
        args: [
            '--ignore-certificate-errors',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-web-security',
            // '--proxy-server=your.proxy.domain:port',
        ],
    },
    browserContext: "default",
    server: {
        // command: `npm start`, // アプリケーションサーバー起動
        command: 'yarn start',
        port: 3000, // ポート指定
        launchTimeout: 30000, // タイムアウト時間(ms)
        debug: true, // debug モードで起動
    },
    preset: 'jest-puppeteer',
};