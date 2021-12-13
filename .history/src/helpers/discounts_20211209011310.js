const discounts = [
    {
        name: '2-for-1 Mug',
        check: (products) => {
            const currentProduct = products.find((product) => product.code === 'MUG')
            if (currentProduct && currentProduct.count > 1) {
                return ({
                    name: '2x1 Mug offer',
                    discountAmount: Math.trunc(currentProduct.count / 2) * currentProduct.price
                })
            }
            return null
        }
    },
    {
        name: 'bulk discount-shirt',
        check: (products) => {
            const currentProduct = products.find((product) => products.code === 'TSHIRT')
            console.log(currentProduct.count)
            if (currentProduct && currentProduct.count >= 3) {
                return ({
                    name: 'x3 shirt offer',
                    discountAmount: (currentProduct.price / 100) * 5 * currentProduct.count
                })
            }
            return null
        }
    }
]

export default discounts