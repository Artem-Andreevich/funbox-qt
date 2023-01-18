import React from "react";
import './app.css';
import Header from "../header";
import ProductList from "../product-list";

export default class App extends React.Component {

    id = 1;
    state = {
        productData : [
            this.createItem('Нямушка', 'с фуагра', '0.5', '10 порций', 'мышь в подарок'),
            this.createItem('Нямушка', 'с фуагра', '0.5', '10 порций', 'мышь в подарок')
        ]
    }

    createItem(title, subTitle, weight, ...args) {
        return {
            title,
            subTitle,
            weight,
            id: this.id++,
            description: [...args]
        }
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <ProductList data={this.state.productData}/>
            </div>
        )
    }
}


