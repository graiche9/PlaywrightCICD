import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/products.page';
import CartPage from '../pages/cart.page';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Se connecter avant chaque test
    await page.goto('https://www.saucedemo.com/');
    await loginPage.saisirUsername('standard_user');
    await loginPage.saisirPassword('secret_sauce');
    await loginPage.clicksurlogin();
});

test('Ajouter tous les produits au panier', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Ajouter tous les produits
    await inventoryPage.addAllProductsToCart();
    expect(await inventoryPage.getCartItemCount()).toBeGreaterThan(0);

    // Aller au panier et vérifier
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemCount()).toBeGreaterThan(0);
});

/*test('Supprimer tous les produits du panier', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Ajouter d'abord les produits
    await inventoryPage.addAllProductsToCart();
    await inventoryPage.goToCart();
    expect(await cartPage.getCartItemCount()).toBeGreaterThan(0);

    // Supprimer tous les produits
    await cartPage.removeAllItems();
    expect(await cartPage.getCartItemCount()).toBe(0);
});*/
