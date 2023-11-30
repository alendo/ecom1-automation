import { test } from '@playwright/test';
import { loginDetails } from '../data/loginDetails.js';
import { LoginPage } from '../page-objects/LoginPage.js';
import { ProductPage } from '../page-objects/ProductPage.js';
import { Navigation } from '../page-objects/Navigation.js';
import { CartPage } from '../page-objects/CartPage.js';
import { CheckoutPage } from '../page-objects/CheckoutPage.js';
import { customerDetails } from '../data/customerDetails.js';
import { FinalReviewPage } from '../page-objects/FinalReviewPage.js';

test('Registered user end-to-end journey', async ({ page }) => {
  // create new instance of login page
  const loginPage = new LoginPage(page);

  // call method for visiting the login page
  await loginPage.visit();

  // call method that a registered user can log in, passing loginDetails as arguments
  await loginPage.logInWithCredentials(loginDetails);

  //create new instance of Product Page
  const productsPage = new ProductPage(page);

  // method to sort items in product page
  await productsPage.sortPriceLowToHigh();

  // adds item to cart
  await productsPage.addProductToCart();

  // add another item to cart (to be created)
  await productsPage.addSecondProductToCart();

  // method to go to Cart
  const navigation = new Navigation(page);
  await navigation.goToCart();

  // method to remove a product
  // later on remove the most expensive product
  const cartPage = new CartPage(page);
  await cartPage.removeProduct();

  // go to checkout page
  await cartPage.goToCheckout();

  // instantiate CheckoutPage
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillCustomerInfo(customerDetails); // call method to fill customer info, passing in the customerDetails object as argument

  // go to checkout final review
  await checkoutPage.goToFinalReview();

  // Finish the final review
  const finalReviewPage = new FinalReviewPage(page);
  await finalReviewPage.finishCheckout();
});
