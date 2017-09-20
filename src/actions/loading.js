import types from '../constants';

const loading = (payload) => ({
    type: types.LOADING,
    payload
});

export { loading };