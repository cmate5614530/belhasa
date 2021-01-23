
const layout = [
    {
        path: '/',
        component: resolve => require(['pages/home'], resolve),
        meta: {
            title: 'Belhasa',
        }
    },
    {
        path: '/results',
        component: resolve => require(['pages/user/results'], resolve),
        meta: {
            title: "home.labels.results",
        }
    },
    {
        path: '/result/:id/:categoryId',
        props: true,
        component: resolve => require(['pages/user/result-detail'], resolve),
        meta: {
            title: "home.labels.results",
        }
    },
    {
        path: '/print',
        component: resolve => require(['pages/user/print'], resolve),
        meta: {
            title: "home.labels.results",
        }
    },
    {
        path: '/reprint',
        component: resolve => require(['pages/user/reprint'], resolve),
        meta: {
            title: "home.labels.results",
        }
    },

    {
        path: '/practise',
        component: resolve => require(['pages/user/practise'], resolve),
        meta: {
            title: "home.labels.practise",
        }
    },
    {
        path: '/users/edit/:id',
        props: true,
        component: resolve => require(['pages/user/edit-user'], resolve),
        meta: {
            title: "Edit User",
        }
    },

]

export default layout
