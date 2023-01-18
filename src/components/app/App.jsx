import React, { Component } from "react";
import './app.css';
import Header from "../header";
import ProductList from "../product-list";

export default class App extends Component {

    id = 1;
    state = {
        productData : [
            this.createItem('Нямушка', 'с фуа-гра', '0,5', false, false, ['Печень утки разварная с артишоками.', 'Печалька, с фуа-гра закончился.' ],  '10 порций', 'мышь в подарок'),
            this.createItem('Нямушка', 'с рыбой', '2', true, false, ['Головы щучьи с чесноком да свежайшая сёмгушка.', 'Печалька, с рыбой закончился.'],  '40 порций', '2 мыши в подарок'),
            this.createItem('Нямушка', 'с курой', '5', false, true, ['Филе из цыплят с трюфелями в бульоне.', 'Печалька, с курой закончился.'],  '100 порций', '5 мыши в подарок', 'заказчик доволен')
        ]
    }

    createItem(title, subTitle, weight, select, disable, bottomText, ...args) {
        return {
            title,
            subTitle,
            weight,
            select,
            disable,
            bottomText,
            id: this.id++,
            description: [...args]
        }
    }

    onToggle = (arr, id, toggle) => {
        const index = arr.findIndex((el) => el.id === id)
        const oldItem = arr[index]
        const newItem = {...oldItem, [toggle]: !oldItem[toggle]}
        return [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ]
    }
    selectToggle = (id) => {
        this.setState( ({productData}) => {
            return {
                productData: this.onToggle(productData, id, 'select')
            }
        })
    }


    render() {
        return (
            <div className='app'>
                <Header />
                <ProductList
                    data={this.state.productData}
                    selectToggle={ (id) => this.selectToggle(id)}
                />
            </div>
        )
    }
}


