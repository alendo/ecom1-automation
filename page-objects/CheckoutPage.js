import { expect } from '@playwright/test';
import { timeStamp } from 'console';
import { customerDetails } from '../data/customerDetails';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.headerTitle = page.locator('.header_secondary_container');
  }

  // pass in the customerDetails object
  fillCustomerInfo = async (customerDetails) => {
    //fill first name input
    await this.firstNameInput.waitFor();
    await this.firstNameInput.fill(customerDetails.firstname);
    // fill last name input
    await this.lastNameInput.waitFor();
    await this.lastNameInput.fill(customerDetails.lastname);
    // fill postal code input
    await this.postalCodeInput.waitFor();
    await this.postalCodeInput.fill(customerDetails.postalcode);
  };

  goToFinalReview = async () => {
    await this.continueBtn.waitFor();
    await this.continueBtn.click();

    await this.headerTitle.waitFor();
    await expect(this.headerTitle).toContainText('Overview');
  };
}
