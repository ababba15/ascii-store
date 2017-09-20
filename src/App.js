import React, { Component } from 'react';
// import './App.css';
import { baseUrl } from './utils';

import { Provider, connect } from 'react-redux';
import store from './store';
import { productsRequest } from './actions';


class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(productsRequest());
    }

    render() {
        const { products, loading } = this.props;
        return (
            <div className="App">
                <header>
                    <h1>Discount Ascii Warehouse</h1>

                    <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

                    <p>But first, a word from our sponsors:</p>
                    <img className="ad" alt="" src={`${baseUrl}/ad/?r='${Math.floor(Math.random()*1000)}`}/>
                </header>
                <section className="products">
                    {
                        loading ?
                            <h1>Loading...</h1> :
                            products.map(product => (
                                <h1 key={product.id}>{product.face}</h1>
                            ))
                    }
                </section>
            </div>
        );
    }
}

const select = (state) => ({
    products: state.products,
    loading: state.loading
});
const Connected = connect(select)(App);

const Root = () => (
    <Provider store={store}>
        <Connected />
    </Provider>
);

export default Root;
