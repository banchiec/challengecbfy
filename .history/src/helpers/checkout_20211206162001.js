export default class Checkout {
    constructor(price, discounts = []) {
        this.price = price
        this.discounts = discounts
        this.allProducts = []
    }
    init() {
        console.log(this.price)

    }
}