import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test('Login réussi avec un utilisateur valide', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.page.goto('https://www.saucedemo.com/');

    await loginPage.saisirUsername('standard_user');
    await loginPage.saisirPassword('secret_sauce');
    await loginPage.clicksurlogin();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Échec de connexion avec un mot de passe incorrect', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.page.goto('https://www.saucedemo.com/');

    await loginPage.saisirUsername('standard_user');
    await loginPage.saisirPassword('wrong_password');
    await loginPage.clicksurlogin();

    // Vérifier que le message d'erreur apparaît
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});