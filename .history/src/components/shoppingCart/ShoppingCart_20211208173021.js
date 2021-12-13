import { uniqueId } from 'lodash'
import { ContainerShoppingCart } from './ShoppingCart.styled'
import { CartString } from '../CartString/CartString'

export const ShoppingCart = (props) => {
    console.log(props)
    const { items, scan, cost } = props
    return (
        <ContainerShoppingCart >
            <h1 className="">Shopping cart</h1>
            <ul className="mt-4">
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
                    />
                ))}
            </ul>
        </ContainerShoppingCart>
    )
}
