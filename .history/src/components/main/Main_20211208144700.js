import { ShoppingCart } from "../shoppingCart.js/ShoppingCart"

export default function Main(props) {
    const { purchase } = props
    console.log(props)
    return (
        <main>
            <ShoppingCart />
        </main>
    )
}
