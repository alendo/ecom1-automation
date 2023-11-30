import { expect } from '@playwright/test';
import exp from 'constants';

export class FinalReviewPage {
  constructor(page) {
    this.page = page;

    //locator for cart quantity using class name
    this.cartQuanity = page.locator('.cart_quantity');

    // locator for Finish button
    this.finishBtn = page.locator('[data-test="finish"]');

    //locator for headertitle
    this.headerTitle = page.locator('.title');
  }

  // method to go to finish checkout

  finishCheckout = async () => {
    // asserts that there is 1 item in cart
    await this.cartQuanity.waitFor();
    const cartNumberText = await this.cartQuanity.innerText();
    expect(cartNumberText).toContain('1');

    await this.finishBtn.waitFor();
    await this.finishBtn.click();

    // find and assert that user is in the complete page
    await this.headerTitle.waitFor();
    await expect(this.headerTitle).toContainText('Checkout: Complete!');
  };
}
