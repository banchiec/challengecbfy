export default class Checkout {
    constructor(products, discounts = []) {
        this.products = products.reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), {})
        this.discounts = discounts
        this.cartItems = []
        console.log(products)
    }
    init() {
        this.scan('T-SHIRT')
        this.scan('MUG')
        this.scan('CAP')
    }
    scan(code) {
        const currentCartItem = this.cartItems.find((product) => product.code === code)
        console.log(currentCartItem)
    }
}