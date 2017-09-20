import types from '../constants';

const productsRequest = (payload) => ({
    type: types.PRODUCTS_REQUEST,
    payload
});

const productsSuccess = (payload) => ({
    type: types.PRODUCTS_SUCCESS,
    payload
});

const productsFailure = () => ({
    type: types.PRODUCTS_FAILURE
});

export { productsRequest, productsSuccess, productsFailure };