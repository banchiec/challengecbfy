export default class Checkout {
    constructor(products, discounts = []) {
        this.price = products.reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), {})
        this.discounts = discounts
        this.cartItems = []
        // console.log(products)
        // console.log(this.price)
    }
    init() {
        this.scan('T-SHIRT')
        this.scan('MUG')
        this.scan('CAP')
    }
    get items() {
        return this.cartItems
    }
    scan(code) {
        const currentCartItem = this.cartItems.find((product) => product.code === code)
        if (currentCartItem) {
            // console.log(currentCartItem)
        }
    }
}