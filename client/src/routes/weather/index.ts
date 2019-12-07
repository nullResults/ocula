import Index from './index.vue';

export default [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'outlook' */ './outlook.vue')
            }
        ]
    },
    {
        path: '/weather',
        component: Index,
        children: [
            {
                path: 'outlook',
                component: () => import(/* webpackChunkName: 'outlook' */ './outlook.vue')
            }
        ]
    }
];