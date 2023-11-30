import { expect } from '@playwright/test';

//importing Navigation Page Object to use for getCartCount method
import { Navigation } from './Navigation';

export class CartPage {
  constructor(page) {
    this.page = page;

    this.removeBtn = page.locator(
      '[data-test="remove-sauce-labs-bolt-t-shirt"]'
    );

    this.checkoutBtn = page.locator('[data-test="checkout"]');
  }

  removeProduct = async () => {
    // product count before the removal
    // calls on getCartCount method from Navigation Page Object
    // notice when you are instantiating inside another Page Object you use the argument "this.page"
    const navigation = new Navigation(this.page);
    const countBeforeRemoval = await navigation.getCartCount();

    // make sure remove button exist and click it
    await this.removeBtn.waitFor();
    await this.removeBtn.click();

    // assert count after removal -  less 1
    const countAfterRemoval = await navigation.getCartCount();
    expect(countAfterRemoval).toBe(countBeforeRemoval - 1);
  };

  goToCheckout = async () => {
    //click on button
    await this.checkoutBtn.waitFor();
    await this.checkoutBtn.click();
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
  };
}
