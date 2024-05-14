import { createStore } from 'vuex';

import usersModule from './modules/users/index';
import productsModule from './modules/products/index';
import auth from './modules/auth/index';
const store = createStore({
    modules: {
        users: usersModule,
        products: productsModule,
        auth: auth,
    },
});
export default store;
