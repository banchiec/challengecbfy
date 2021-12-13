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
        switch (op) {
            case 'dec':
                purchase.scan(code, -1);
                break;
            case 'set':
                purchase.scan(code, Number(e.target.value));
                break;
            case 'inc':
                purchase.scan(code, 1);
                break;
            default:
                // unknown operation
                break;
        }
        // set new cart items list for react
        setItems([...purchase.items]);
        const newSums = purchase.preCalc();
        const newTotalCost = purchase.total();
        setSummary({
            ...newSums,
            totalCost: newTotalCost,
        });

    }
    const cost = (code) => purchase.cost(code)

    return (
        <main className="App">
            <ShoppingCart items={items} scan={scan} cost={cost} />
            <OrderSummery summary={summary} />
        </main>
    )
}
