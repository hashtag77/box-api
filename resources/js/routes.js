import VueRouter from 'vue-router';

let routes = [
    {
        path : '/exhibit',
        component: require('./pages/Exhibit').default,
    },
    {
        path : '/manager',
        component: require('./pages/Manager').default,
    }
];

const router = new VueRouter({ mode: 'history', routes });

router.beforeEach((to, from, next) => {
    next();
});

export default router;

