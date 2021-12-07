export default class Checkout {
    constructor(price, discounts = []) {
        this.products = price
        this.discounts = discounts

    }
}