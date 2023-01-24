import React, {useState} from "react";
import './product-item.css';
import cat from '../../assets/img/cat.png'

function ProductItem( {title, subTitle, weight, select, disable, bottomText, description, selectToggle} ) {

    const cardClass = disable ? 'card--disable' : select ? 'card--select' : 'card--default'

    const headerText = <span>Сказочное заморское яство</span>

    const [ header, setHeader ] = useState(headerText)
    const mouseLeave = () => {
        setHeader(headerText)
    }
    const defaultHeader = () => {
        setHeader(headerText)
    }
    const mouseEnter = () => {
        setHeader(<span className='card__header--active'>Котэ не одобряет?</span>)
    }

    const footer = () => {
        const [ selectText, disableText ] = bottomText
        if(disable){
            return ( <span className='footer__text footer__text--disable'>{ disableText }</span> )
        } else if (select) {
            return ( <span className='footer__text'>{ selectText }</span> )
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

    const onSelectToggle = () => {
        if(disable) { return }
        if(select) { setHeader(headerText) }
        selectToggle()
    }

    const descriptionItem = description.map( item => {
        let num = item.match(/\d+/g)
        let str = item.match(/\D+/g)
        return (
            <li
                key={ item }>
                <span className='bold'>{ num }</span>{ str }
            </li>
        )
    })

    return (
        <>
            <div className={`card ${cardClass}`}
                 onClick={ onSelectToggle }
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