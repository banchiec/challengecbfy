import { uniqueId } from 'lodash'
import { CartString } from '../CartString/CartString'

export const ShoppingCart = (props) => {
    // console.log(props)
    const { items, scan, cost } = props

    const setDetails = (e) => {
        console.log(e)
    }

    return (
        <>
            <section className="products">
                <h1 className="main">Shopping cart</h1>
                <ul className="product-list tableHead">
                    <li className="products-list-title row">
                        <div className="col-product">
                            <h2>
                                Product details
                            </h2>
                        </div>
                        <div className="col-quantity">
                            <h2>
                                Quantity
                            </h2>
                        </div>
                        <div className="col-price">Price</div>
                        <div className="col-total">Total</div>
                    </li>
                </ul>
                <ul className="products-list">
                    {items.map((item) => (
                        <CartString
                            content={item}
                            scan={scan(item.code)}
                            cost={cost(item.code)}
                            key={uniqueId()}
                            onClick={setDetails}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}
