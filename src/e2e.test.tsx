// puppeteer for End to End test.
import puppeteer from "puppeteer";

test("Total Fee shold be passed to Check out page.", async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/calculator");

  await page.waitForSelector("input[name='Cart Value']");
  await page.click("input[name='Cart Value']");
  await page.type("input[name='Cart Value']", "10");

  await page.waitForSelector("input[name='Delivery Distance']");
  await page.click("input[name='Delivery Distance']");
  await page.type("input[name='Delivery Distance']", "1000");

  await page.waitForSelector("input[name='Number of Items']");
  await page.click("input[name='Number of Items']");
  await page.type("input[name='Number of Items']", "6");

  await page.waitForSelector("div[data-testid='totalFee']");
  const totalFee = await page.$eval(
    "div[data-testid='totalFee']",
    (e) => e.textContent
  );

  await page.waitForSelector(".cyan-btn");
  await page.click(".cyan-btn");

  await page.waitForSelector("p:nth-child(2)");
  const text = await page.$eval("p:nth-child(2)", (e) => e.textContent);
  expect(text).toContain(`${totalFee}`);

  await browser.close();
}, 10000);
