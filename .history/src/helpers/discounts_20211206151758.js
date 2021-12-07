const discounts = [
    {
        discount: '2x1Mug',
        check: (products) => {
            const currentProduct = products.find((product) => product.code === 'MUG')
            if (currentProduct && currentProduct.count > 1) {
                return
            }
        }
    },
    {
        discount: 't-shirt-more3'
    }
]
export default discounts