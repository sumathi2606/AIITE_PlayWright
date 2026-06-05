class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.loginButton = page.locator('#button-login');
    }
    async goto() {
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }
    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }
    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.clickLogin();
    }
}
module.exports = { LoginPage };