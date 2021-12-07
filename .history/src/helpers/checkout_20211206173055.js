export default class Checkout {
    constructor(price, discounts = []) {
        this.price = price.reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), {})
        this.discounts = discounts
        this.cartItems = []
        console.log(price)
        console.log(this.priceForCode)
    }
    init() {
        this.scan('T-SHIRT')
        this.scan('MUG')
        this.scan('CAP')
    }
    scan(code) {
        const currentCartItem = this.cartItems.find((product) => product.code === code)
        if (currentCartItem) {
            console.log(currentCartItem)
        }
    }
}