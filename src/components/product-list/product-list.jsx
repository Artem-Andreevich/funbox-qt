import React from "react";
import './product-list.css';
import ProductItem from "../product-item";

function ProductList( {data, selectToggle} ) {

    const product = data.map( item => {
        const { id, ...itemsProps} = item
        return (
            <div
                className='product-item'
                key={id}>
                <ProductItem
                    selectToggle={ () => selectToggle(id) }
                    {...itemsProps}
                />
            </div>
        )
    })

    return (
        <div className='product-list'>
            { product }
        </div>
    )
}

export default ProductList;