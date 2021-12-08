import { UniqueId } from 'lodash'
import { ContainerShoppingCart } from './ShoppingCart.styled'

export const ShoppingCart = (props) => {
    const { items, scan, cost } = props
    return (
        <ContainerShoppingCart>
            <h1 className="">Shopping cart</h1>
            <ul className="relative w-100 p-32-0">
                ,<li className="products-list-title row">
                    <div className="col-product">Product details</div>
                    <div className="col-quantity">Quantity</div>
                    <div className="col-price">Price</div>
                    <div className="col-total">Total</div>
                </li>
            </ul>
        </ContainerShoppingCart>
    )
}
