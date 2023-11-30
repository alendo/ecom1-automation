import { expect } from '@playwright/test';
import exp from 'constants';
import { loginDetails } from '../data/loginDetails';

export class LoginPage {
  constructor(page) {
    this.page = page;

    //locator for the username
    this.usernameInput = page.locator('[data-test="username"]');

    //locator for the password
    this.passwordInput = page.locator('[data-test="password"]');

    //locator of the login button
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  //method to visit the login page
  visit = async () => {
    await this.page.goto('https://www.saucedemo.com/');
  };

  // method to log in with Credentials
  logInWithCredentials = async (loginDetails) => {
    await this.usernameInput.waitFor(); //wait for element to show up
    await this.usernameInput.fill(loginDetails.username); //fills input field username property of the loginDetails object

    await this.passwordInput.waitFor();
    await this.passwordInput.fill(loginDetails.password);

    await this.loginButton.waitFor();
    await this.loginButton.click();

    // assert that the url is correct
    await expect(this.page).toHaveURL(/inventory.html/);
  };
}
