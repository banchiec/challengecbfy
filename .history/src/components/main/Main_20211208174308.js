import { useState } from "react"
import { ShoppingCart } from "../shoppingCart/ShoppingCart"

export default function Main(props) {
    const { purchase } = props
    const [items, setItems] = useState(purchase.items)

    const scan = (code) => (op) => (e) => {

    }
    const cost = (code) => purchase.cost(code)

    // console.log(purchase)
    // console.log(items)
    return (
        <main className="App">
            <ShoppingCart items={items} scan={scan} cost={cost} />
        </main>
    )
}
