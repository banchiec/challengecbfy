import { UniqueId } from 'lodash'
import { ContainerShoppingCart } from './ShoppingCart.styled'

export const ShoppingCart = (props) => {
    const { items, scan, cost } = props
    return (
        <ContainerShoppingCart>
            <h1>shopping cart</h1>
            <ul></ul>
        </ContainerShoppingCart>
    )
}
