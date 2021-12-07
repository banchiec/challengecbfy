const discounts = [
    {
        discount: '2x1Mug',
        check: (products) => {
            const currentProduct = products.find((product) => product.code === 'MUG')
        }
    },
    {
        discount: 't-shirt-more3'
    }
]
export default discounts