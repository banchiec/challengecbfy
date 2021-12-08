import { useState } from "react"
import { ShoppingCart } from "../shoppingCart.js/ShoppingCart"

export default function Main(props) {
    const { purchase } = props
    const [productItem, setProductItem] = useState(purchase.item)
    console.log(purchase)
    return (
        <main>
            <ShoppingCart />
        </main>
    )
}
