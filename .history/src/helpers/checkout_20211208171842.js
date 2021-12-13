export default class Checkout {
    constructor(products, discounts = []) {
        this.price = products.reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), {})
        this.discounts = discounts
        this.cartItems = []
    }
    init() {
        this.scan('T-SHIRT')
        this.scan('MUG')
        this.scan('CAP')
    }
    get items() {
        return this.cartItems
    }
    scan(code, argument = 1) {

        const currentCartItem = this.cartItems.find((product) => product.code === code)
        if (currentCartItem) {
            console.log(currentCartItem)
        }
    }
}