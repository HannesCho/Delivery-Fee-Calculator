import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import puppeteer from "puppeteer";

test("Home should be rendered.", () => {
  render(<Home />, { wrapper: BrowserRouter });
  const homeEl = screen.getByText(/calculate/i);
  expect(homeEl).toBeInTheDocument();
});

test("The link should be generated for calculator page.", () => {
  render(<Home />, { wrapper: BrowserRouter });
  const linkEls = screen.getByRole("link");
  expect(linkEls).toHaveAttribute("href", "/calculator");
});

test("Puppeteer.", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  await browser.close();
});
