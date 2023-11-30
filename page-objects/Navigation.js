import { expect } from '@playwright/test';

export class Navigation {
  constructor(page) {
    this.page = page;

    //using class as a locator
    this.shoppingCart = page.locator('.shopping_cart_container');

    // using class name as locator w/ . (.className)
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  // method to count how many items in the cart
  getCartCount = async () => {
    await this.cartBadge.waitFor();

    const cartCount = await this.cartBadge.innerText();
    const asNumber = parseInt(cartCount, 10);
    return asNumber;
  };

  goToCart = async () => {
    // await element/locator
    await this.shoppingCart.waitFor();
    await this.shoppingCart.click();

    // assert that the url is correct
    await expect(this.page).toHaveURL(/cart.html/);
  };
}
