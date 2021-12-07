export default class Checkout {
    constructor(products, discounts = []) {
        this.products = products.reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), {})
        this.discounts = discounts
        this.allProducts = []
    }
    init() {
        console.log(this.products)
    }
}