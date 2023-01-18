import React from "react";
import './product-item.css';

function ProductItem( {title, subTitle, weight} ) {

    return (
        <div className='product-item'>
            <span>{title}</span>
            <span>{subTitle}</span>
            <span>{weight}</span>
            <img src="/src/assets/img/cat.png" alt=""/>
        </div>
    )
}
export default ProductItem;