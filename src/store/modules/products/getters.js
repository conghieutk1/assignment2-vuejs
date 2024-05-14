export default {
    products(state) {
        return state.products;
    },
    paginatedProducts(state) {
        // console.log('state.paginatedProducts ', state.paginatedProducts);
        return state.paginatedProducts;
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    },
};
