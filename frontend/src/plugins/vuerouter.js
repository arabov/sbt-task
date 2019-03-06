import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/auth',
            component: () => import('../layouts/Auth.vue')
        }, {
            path: '/app',
            component: () => import('../layouts/App.vue'),
            children: [
                {
                    path: ':id',
                    props: true,
                    component: () => import('../components/Chat.vue'),
                }
            ]
        }, {
            path: '/',
            redirect: '/auth'
        },
    ]
});
