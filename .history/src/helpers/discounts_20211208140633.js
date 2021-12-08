const discounts = [
    {
        discount: '2x1Mug',
        check: (products) => {
            const currentProduct = products.find((product) => product.code === 'MUG')
            if (currentProduct && currentProduct.count > 1) {
                return ({
                    name: '2x1 Mug', discountAmount: Math.trunc(currentProduct.count / 2) * currentProduct.price
                })
                return null

            }
        }
    },
    {
        discount: 't-shirtMore3',
        check: (products) => {
            const currentProduct = products.find((product) => products.code === 'T-SHIRT')
        }
    }
]

export default discounts