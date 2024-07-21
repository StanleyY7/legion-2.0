import { test, expect } from "@playwright/test";

test.beforeEach("Go to index page", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173/");
});

test("Socials Link displays and works", async ({ page }) => {
  // Click the get socials link.
  await expect(
    page.getByRole("link", { name: "Join the Legion." })
  ).toBeVisible();
});
