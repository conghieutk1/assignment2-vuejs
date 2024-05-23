import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Auth/LoginPage.vue';
import SignUp from '../components/Auth/SignUpPage.vue';
import ManageUsers from '../components/Users/ManageUsers.vue';
import ManageProducts from '../components/Products/ManageProducts.vue';
import NotFound from '../components/Pages/NotFound';
import LoginUsingVee from '../components/LoginUsingVee.vue';
// import store from '../store/index';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login-using-vee' },
        {
            name: 'login',
            path: '/login',
            components: { default: Login },
            meta: { requiresUnauth: true },
            alias: '/signin',
        },
        {
            name: 'signup',
            path: '/sign-up',
            components: { default: SignUp },
            meta: { requiresUnauth: true },
        },
        {
            path: '/manage-user',
            components: { default: ManageUsers },
            meta: { requiresAuth: true },
        },
        {
            path: '/manage-product',
            components: { default: ManageProducts },
            meta: { requiresAuth: true },
        },
        { path: '/:notFound(.*)', component: NotFound },
        {
            path: '/login-using-vee',
            component: LoginUsingVee,
            meta: { requiresUnauth: true },
        },
    ],
    linkActiveClass: 'active',
});

router.beforeEach(function (to, _, next) {
    const isAuthenticated = localStorage.getItem('token');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login-using-vee');
    } else if (to.meta.requiresUnauth && isAuthenticated) {
        next('/manage-user');
    } else {
        next();
    }
});

export default router;
