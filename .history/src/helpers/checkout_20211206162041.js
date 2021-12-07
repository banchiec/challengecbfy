export default class Checkout {
    constructor(products, discounts = []) {
        this.products = products
        this.discounts = discounts
        this.allProducts = []
    }
    init() {
        console.log(this.products)

    }
}