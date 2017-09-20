import React, { Component } from 'react';
// import './App.css';
import { baseUrl } from './utils';

import { Provider, connect } from 'react-redux';
import store from './store';
import { productsRequest } from './actions';

import { Product } from './components';


class App extends Component {
    constructor() {
        super();
        this.state = {
            limit: 20,
            productsCount: 0
        };

        this.top = 0;
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(productsRequest({ withLoading: true }));

        this.addScrollListener();

    }

    addScrollListener() {
        window.addEventListener('scroll', this.fetchMoreData, false);
    }

    removeScrollListener() {
        window.removeEventListener('scroll', this.fetchMoreData, false);
    }

    fetchMoreData() {
        console.log('fetchMoreData');

        // const { dispatch } = this.props;
        // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        //     this.removeScrollListener();
        // }

        // this.setState({ limit: this.state.limit + 20 }, () => {
        //     dispatch(productsRequest({ limit: this.state.limit }));
        // });

        // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        //     console.log('hello very bottom!');
        // }
    }

    renderData() {
        console.log('renderData');
    }

    handleSort = (sort) => {
        const { dispatch } = this.props;
        dispatch(productsRequest({ sort }));
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
                <section className="filter-buttons">
                    <button onClick={() => this.handleSort('size')}>Sort by size</button>
                    <button onClick={() => this.handleSort('price')}>Sort by price</button>
                    <button onClick={() => this.handleSort('id')}>Sort by id</button>
                </section>
                <section className="products">
                    {
                        loading ?
                            <h1>Loading...</h1> :
                            products.map(product => <Product key={product.id} {...product} />)
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
