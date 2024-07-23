import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export const verifyCarouselExists = async (page: Page) => {
  await expect(page.getByText("Trending")).toBeVisible();
  await expect(page.getByText(">")).toBeVisible();
  await expect(page.getByText("<")).toBeVisible();
};

export const verifyHeaderExists = async (page: Page) => {
  await expect(page.getByText("Free Delivery on orders $50+")).toBeVisible();
  await expect(page.getByText("Legion", { exact: true })).toBeVisible();
  await expect(page.getByText("Kit", { exact: true })).toBeVisible();
  await expect(page.getByText("About", { exact: true })).toBeVisible();
  await expect(page.getByText("Contact", { exact: true })).toBeVisible();
  await expect(page.getByText("Login", { exact: true })).toBeVisible();
};

export const verifyShowcase = async (page: Page) => {
  await expect(page.getByLabel("showcase")).toBeVisible();
};

export const verifySocialsExists = async (page: Page) => {
  await expect(
    page.getByRole("link", { name: "Join the Legion." })
  ).toBeVisible();
  await expect(page.getByText("Join the Legion.")).toBeVisible();
};

export const verifyTitle = async (page: Page) => {
  await expect(page).toHaveTitle(/Legion/);
};
