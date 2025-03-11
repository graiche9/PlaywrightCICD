import { Page, Locator } from '@playwright/test';

class ProductsPage {
    readonly page: Page;
    readonly addToCartButtons: Locator;
    readonly removeFromCartButtons: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButtons = page.locator('.inventory_item button'); // Tous les boutons "Add to cart"
        this.removeFromCartButtons = page.locator('.inventory_item button'); // Tous les boutons "Remove"
        this.cartBadge = page.locator('.shopping_cart_badge'); // Nombre d'articles dans le panier
        this.cartIcon = page.locator('.shopping_cart_link'); // Icône du panier
    }

    async addAllProductsToCart() {
        const count = await this.addToCartButtons.count();
        for (let i = 0; i < count; i++) {
            await this.addToCartButtons.nth(i).click();
        }
    }

    async removeAllProductsFromCart() {
        const count = await this.removeFromCartButtons.count();
        for (let i = 0; i < count; i++) {
            await this.removeFromCartButtons.nth(i).click();
        }
    }

    async getCartItemCount(): Promise<number> {
        if (await this.cartBadge.isVisible()) {
            return parseInt(await this.cartBadge.textContent() || '0', 10);
        }
        return 0;
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

export default ProductsPage;
