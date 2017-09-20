export default (state = [], action) => {
    switch (action.type) {
        case 'PRODUCTS_SUCCESS':
            return action.payload;
        case 'PRODUCTS_FAILURE':
            throw new Error('Products request failed');
        default:
            return state;
    }
};