import React, {useState} from "react";
import './product-item.css';
import cat from '../../assets/img/cat.png'

function ProductItem( {title, subTitle, weight, select, disable, bottomText, description, selectToggle} ) {

    const [ selectText, disableText ] = bottomText
    const footer = () => {
        if(disable){
            return (
                <span className='footer__text footer__text--disable'>{disableText}</span>
            )
        } else if (select) {
            return (
                <span className='footer__text'>{selectText}</span>
            )
        } else {
            return (
                <span className='footer__text'>Чего сидишь? Порадуй котэ,
                    <button
                        className='footer__btn'
                        onClick={selectToggle}
                    >купи.</button>
                </span>
            )
        }
    }

    const descriptionItem = description.map( item => {
        let a = item.match(/\d+/g)
        let b = item.match(/\D+/g)
        return (
            <li
                key={ item }>
                <span className='bold'>{ a }</span>{ b }
            </li>
        )
    })

    const [ header, setHeader ] = useState(<span>Сказочное заморское яство</span>)
    const mouseLeave = () => {
        setHeader(<span>Сказочное заморское яство</span>)
    }
    const mouseEnter = () => {
        setHeader(<span className='card__header--active'>Котэ не одобряет?</span>)
    }
    const defaultHeader = () => {
        setHeader(<span>Сказочное заморское яство</span>)
    }

    const cardClass = disable ? 'card--disable' : select ? 'card--select' : 'card--default'

    return (
        <>
            <div className={`card ${cardClass}`}
                 onClick={ disable ?  null : selectToggle }
                 onMouseLeave={ select ? mouseLeave : defaultHeader}
                 onMouseEnter={ select ? mouseEnter : defaultHeader}
                >
                <div className='card__header'>{ header }</div>
                <span className='card__title'>{title}</span>
                <span className='card__sub-title'>{subTitle}</span>
                <ul className='card__list'>
                    { descriptionItem }
                </ul>
                <img className='card__img' src={cat} alt="cat"/>
                <div className='label card__label'>
                    <span className='label__text'>{weight}</span>
                    <span className='label__sub-text'>кг</span>
                </div>
            </div>
            <div className='footer'>{ footer() }</div>
        </>
    )
}
export default ProductItem;