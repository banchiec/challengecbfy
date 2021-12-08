const discounts = [
    {
        discount: '2x1Mug',
        check: (products) => {
            const currentProduct = products.find((product) => product.code === 'MUG')
            if (currentProduct && currentProduct.count > 1) {
                return ({
                    name: '2x1 Mug offer',
                    discountAmount: Math.trunc(currentProduct.count / 2) * currentProduct.price
                })
            }
        }
    },
    {
        discount: 't-shirtMore3',
        check: (products) => {
            const currentProduct = products.find((product) => products.code === 'T-SHIRT')
            if (currentProduct && currentProduct.count >= 3) {
                return ({
                    name: 'x3 shirt offer',
                    discountAmount: (currentProduct.price / 100) * 5 * currentProduct.count
                })
            }
        }
    }
]

export default discounts