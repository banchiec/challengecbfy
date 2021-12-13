import { useState } from 'react'
import { uniqueId } from 'lodash'
import DetailsModal from "../DetailsModal/DetailsModal"

export const CartString = (props) => {
    const [state, setstate] = useState(false)
    const {
        content: {
            productCode,
            name,
            count,
            image,
            price
        },
        scan,
        cost
    } = props


    const details = (image, productCode, name) => {
        console.log(name)
        return (
            <DetailsModal
                key={uniqueId}
                image={image}
                productCode={productCode}
                name={name}
            />
        )
    }

    return (
        <>
            <DetailsModal open={false} />
            <li className="product row">
                <div className="col-product">
                    <figure className="product-image">
                        <img src={image} alt={image} />
                        <div className="product-description">
                            <h1 className="product-description-details"
                                onClick={details}
                            >{name}</h1>
                            <p className="product-code">{productCode}</p>
                        </div>
                    </figure>
                </div>
                <div className="col-quantity">
                    <button type="button" className="count" onClick={scan('dec')}>
                        -
                    </button>
                    <input type="text" className="product-quantity" value={count} onChange={scan('set')} />
                    <button type="button" className="count" onClick={scan('inc')}>
                        +
                    </button>
                </div>
                <div className="col-price">
                    <span className="product-price">
                        {price}
                    </span>
                    <span className="product-currency currency">€</span>
                </div>
                <div className="col-total">
                    <span className="product-price">{cost}</span>
                    <span className="product-currency currency">€</span>
                </div>
            </li>
        </>
    )
}
