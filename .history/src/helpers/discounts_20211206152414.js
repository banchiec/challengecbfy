const discounts = [
    {
        discount: '2x1Mug',
        check: (products) => {
            const currentProduct = products.find((product) => product.code === 'MUG')
        }
    },
    {
        discount: 'tshirtMore3',
        check: (products) => {
            const currentProduct = products.find((product) => products.code === 'T-SHIRT')
        }
    }
]

export default discounts