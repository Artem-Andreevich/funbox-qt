import React from "react";
import './product-list.css';
import ProductItem from "../product-item";

function ProductList( {data} ) {

    const product = data.map( item => {
        const { id, ...itemsProps} = item
        return (
            <>
                <ProductItem
                    key={id}
                    {...itemsProps}
                />
            </>
        )
    })

    return (
        <div className='product-list'>
            { product }
        </div>
    )
}

export default ProductList;