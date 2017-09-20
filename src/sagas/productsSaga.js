import { takeLatest, call, put } from 'redux-saga/effects';
import types from '../constants';
import axios from 'axios';
import { baseUrl, serializeData } from '../utils';
import { productsSuccess, productsFailure, loading } from '../actions';

function* _productsSaga(action) {
    const defaultPayload = { limit: 20, skip: 0, sort: 'id', withLoading: false  };
    const payload = { ...defaultPayload, ...action.payload };

    yield put(loading(payload.withLoading));

    try {
        // const rawResponse = yield call(axios.get, `${baseUrl}/api/products?limit=${payload.limit}&sort=${payload.sort}&skip=${payload.skip}`);
        const rawResponse = yield call(axios.get, `${baseUrl}/api/products`, { params: payload });
        const serializedData = yield call(serializeData, rawResponse.data);
        yield put(productsSuccess(serializedData));
    } catch (error) {
        console.log(error);
        yield put(productsFailure());
    }

    yield put(loading(false));
}

export const productsSaga = () => takeLatest(types.PRODUCTS_REQUEST, _productsSaga);