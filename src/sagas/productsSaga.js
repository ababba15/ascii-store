import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../constants';
import axios from 'axios';
import { baseUrl, serializeData } from '../utils';
import { productsSuccess, productsFailure, loading } from '../actions';

function* _productsSaga(action) {
    yield put(loading(true));

    console.log(action);

    /* eslint-disable no-mixed-operators */
    const current = {
        limit: action.payload && action.payload.limit || 20,
        skip: action.payload && action.payload.skip || 0,
        sort: action.payload && action.payload.sort || 'id'
    };

    try {
        const rawResponse = yield call(axios.get, `${baseUrl}/api/products?limit=${current.limit}&sort=${current.sort}&skip=${current.skip}`);
        const serializedData = yield call(serializeData, rawResponse.data);
        yield put(productsSuccess(serializedData));
    } catch (error) {
        console.log(error);
        yield put(productsFailure());
    }

    yield put(loading(false));
}

export const productsSaga = () => takeLatest(types.PRODUCTS_REQUEST, _productsSaga);