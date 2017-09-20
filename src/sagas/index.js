import { all } from 'redux-saga/effects';
import { productsSaga } from './productsSaga';

export default function* () {
    return yield all([
        productsSaga()
    ]);
}