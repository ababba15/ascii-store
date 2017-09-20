import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../constants';
import axios from 'axios';
import { baseUrl, serializeData } from '../utils';
import { productsSuccess, productsFailure } from '../actions';

function* _productsSaga(action) {
    const current = {
        limit: action.limit || 20,
        skip: action.skip || 0,
        sort: action.sort || 'id'
    };

    try {
        const rawResponse = yield call(axios.get, `${baseUrl}/api/products?limit=${current.limit}&sort=${current.sort}&skip=${current.skip}`);
        const serializedData = yield call(serializeData, rawResponse.data);
        yield put(productsSuccess(serializedData));
    } catch (error) {
        console.log(error);
        yield put(productsFailure());
    }

}

export const productsSaga = () => takeLatest(types.PRODUCTS_REQUEST, _productsSaga);