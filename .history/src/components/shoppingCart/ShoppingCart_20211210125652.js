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

            <div className="modal">
                <div className="content"></div>
            </div>


            <section className="products">
                <h1 className="main">Shopping cart</h1>
                <ul className="product-list tableHead">
                    <li className="products-list-title row">
                        <div className="col-product">Product details</div>
                        <div className="col-quantity">Quantity</div>
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
