export default {
    addNewProduct(state, payload) {
        state.products.push(payload);
    },
    editProduct(state, payload) {
        const index = state.products.findIndex(
            (product) => product.id === payload.id
        );
        console.log('index', index);
        if (index !== -1) {
            state.products.splice(index, 1, payload);
        } else {
            console.error('Product not found for editing');
        }
    },
    deleteProduct(state, payload) {
        const index = state.products.findIndex(
            (product) => product.id === payload.id
        );
        if (index !== -1) {
            state.products.splice(index, 1);
        } else {
            console.error('Product not found for delete');
        }
    },
    setProducts(state, payload) {
        state.products = payload;
    },
    addPaginatedProducts(state, payload) {
        state.paginatedProducts.push(payload);
    },
    setPaginatedProducts(state, payload) {
        state.paginatedProducts = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    },
};
