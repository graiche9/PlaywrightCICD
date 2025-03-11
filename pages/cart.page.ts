import { Page, Locator } from '@playwright/test';

class CartPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly removeButtons: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item'); // Produits dans le panier
        this.removeButtons = page.locator('.cart_item button'); // Boutons "Remove"
        this.checkoutButton = page.locator('[data-test="checkout"]'); // Bouton "Checkout"
    }

    async removeAllItems() {
        const count = await this.removeButtons.count();
        for (let i = 0; i < count; i++) {
            await this.removeButtons.nth(i).click();
        }
    }

    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count();
    }
}

export default CartPage;
