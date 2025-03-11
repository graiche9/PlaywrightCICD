import { Page } from '@playwright/test';

class LoginPage{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    elements = {
        username: ()=> this.page.locator('input[data-test="username"]'),
        password:()=> this.page.locator('input[data-test="password"]'),
        submit: ()=> this.page.locator('input[data-test="login-button"]'),
        errorMessage: () => this.page.locator('[data-test="error"]')
    }

    async saisirUsername(username: string){
        await this.elements.username().fill(username);
    }

    async saisirPassword(password: string){
        await this.elements.password().fill(password);
    }

    async clicksurlogin(){
        await this.elements.submit().click();
    }

    async getErrorMessage() {
        return await this.elements.errorMessage().textContent();
    }
}

export default LoginPage;