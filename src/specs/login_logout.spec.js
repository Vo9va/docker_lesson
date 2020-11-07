const loginPage = require('../pages/dashboardPages/LoginPage');
const homePage = require('../pages/dashboardPages/HomePage');
const config = require('../resources/config');

describe('Login/Logout', function() {
    it('Load home page', function() {
        loginPage.get();
        expect(browser.getTitle()).toEqual("Dashboard 2.0");
    });

    it('1723: Login user', function() {
        loginPage.setEmail();
        loginPage.setPassword();
        loginPage.clickToLoginButton();
        expect(homePage.getEmail()).toEqual(config.userEmail);
    });

    it('1723: Logout', function() {
        homePage.clickToUserMenu();
        homePage.clickToLogoutButton();
        expect(browser.getTitle()).toEqual("Dashboard 2.0");
    });

    afterAll(async function () {
        await browser.manage().deleteAllCookies();
    });
});
