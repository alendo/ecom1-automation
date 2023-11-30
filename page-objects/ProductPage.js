import { expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { Navigation } from './Navigation';

export class ProductPage {
  constructor(page) {
    this.page = page;

    this.dropdownSort = page.locator('[data-test="product_sort_container"]');

    this.addToCartBtn1 = page.locator(
      '[data-test="add-to-cart-sauce-labs-onesie"]'
    );

    this.addToCartBtn2 = page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    );
  }

  sortPriceLowToHigh = async () => {
    // make sure dropdown element exists
    await this.dropdownSort.waitFor();

    // selects the low to high option in dropdown
    await this.dropdownSort.selectOption('lohi');
  };

  addProductToCart = async () => {
    await this.addToCartBtn1.waitFor();

    // clicks on the add to Card button
    await this.addToCartBtn1.click();
  };

  addSecondProductToCart = async () => {
    await this.addToCartBtn2.waitFor();
    await this.addToCartBtn2.click();
  };
}
