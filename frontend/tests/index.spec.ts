import { test } from "@playwright/test";
import {
  verifyCarouselExists,
  verifyHeaderExists,
  verifyShowcase,
  verifySocialsExists,
  verifyTitle,
} from "./test-utils/index-utils";

test.beforeEach("Go to index page", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
});

test.describe("Index Page Unit Tests", () => {
  test("Title is correct", async ({ page }) => {
    await verifyTitle(page);
  });

  test("Header component renders", async ({ page }) => {
    await verifyHeaderExists(page);
  });

  test.skip("Showcase component renders", async ({ page }) => {
    await verifyShowcase(page);
  });

  test("Socials component renders", async ({ page }) => {
    await verifySocialsExists(page);
  });

  test("Carousel component renders", async ({ page }) => {
    await verifyCarouselExists(page);
  });
});
