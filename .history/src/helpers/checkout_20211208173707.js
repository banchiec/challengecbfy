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
            switch (argument) {
                case 1:
                    currentCartItem.count += 1
                    break
                case -1:
                    currentCartItem.count -= 1
                    if (currentCartItem.count === 0) {
                        this.cartItems = this.cartItems.filter((item) => item.code !== code)
                    }
                    break
                default:
                    currentCartItem.count = argument;
                    break
            }
            return this
        }
        const currentPriceItem = this.price[code]
        if (currentPriceItem) {
            switch (argument) {
                case 1:
                    this.cartItems.push({ ...currentPriceItem, count: 1 })
                    break
                default:
                    this.cartItems.push({ ...currentPriceItem, count: argument })
            }
            return this
        }
    }
}










