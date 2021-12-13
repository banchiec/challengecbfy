import { useState } from "react"
import OrderSummery from "../OrderSummery/OrderSummery"
import { ShoppingCart } from "../shoppingCart/ShoppingCart"

export default function Main(props) {
    const { purchase } = props
    const [items, setItems] = useState(purchase.items)

    const initStateSum = purchase.preCalc()
    const initTotalCost = purchase.total()

    const [summary, setSummary] = useState({
        ...initStateSum,
        totalCost: initTotalCost
    })

    const scan = (code) => (op) => (e) => {

    }
    const cost = (code) => purchase.cost(code)


    // console.log(purchase)
    // console.log(items)
    return (
        <main className="App">
            <ShoppingCart items={items} scan={scan} cost={cost} />
            <OrderSummery summary={summary} />
        </main>
    )
}
