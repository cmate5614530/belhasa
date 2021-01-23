const layout = [
    {
        path: '/',
        name:'Admin Dashboard',
        component: resolve => require(['pages/admin/index'], resolve),
        meta: {
            title: "Admin Dashboard",
        }
    },
    {
        path: '/admin/users',
        component: resolve => require(['pages/admin/users'], resolve),
        meta: {
            title: "Users",
        }
    },
    {
        path: '/admin/users/create',
        component: resolve => require(['pages/admin/create-user'], resolve),
        meta: {
            title: "User Registration",
        }
    },
    {
        path: '/admin/users/view/:id',
        props: true,
        component: resolve => require(['pages/admin/view-user'], resolve),
        meta: {
            title: "View User",
        }
    },
    {
        path: '/admin/users/edit/:id',
        props: true,
        component: resolve => require(['pages/admin/edit-user'], resolve),
        meta: {
            title: "Edit User",
        }
    },
    {
        path: '/admin/category',
        component: resolve => require(['pages/admin/category'], resolve),
        meta: {
            title: "Category",
        }
    },
    {
        path: '/admin/category/edit/:category_id',
        component: resolve => require(['pages/admin/edit-category'], resolve),
        meta: {
            title: "Edit Category",
        }
    },
    {
        path: '/admin/category/create',
        component: resolve => require(['pages/admin/create-category'], resolve),
        meta: {
            title: "Create Category",
        }
    },
    {
        path: '/admin/topic-area',
        component: resolve => require(['pages/admin/topic_area'], resolve),
        meta: {
            title: "List of Topic Area",
        }
    },
    {
        path: '/admin/topic-area/edit/:topic_id',
        component: resolve => require(['pages/admin/edit-topic-area'], resolve),
        meta: {
            title: "Updating Existing Topic Area",
        }
    },
    {
        path: '/admin/topic-area/create',
        component: resolve => require(['pages/admin/create-topic-area'], resolve),
        meta: {
            title: "Create a new Topic Area",
        }
    },
    {
        path: '/admin/questionmanagement',
        component: resolve => require(['pages/admin/test'], resolve),
        meta: {
            title: "Questions List",
        }
    },
    {
        path: '/admin/bulk-import/:category_id/:test_type/',
        component: resolve => require(['pages/admin/bulk_import'], resolve),
        meta: {
            title: "Bulk Import",
        }
    },
    {
        path: '/admin/add-question/:category_id/:test_type/',
        component: resolve => require(['pages/admin/add_question'], resolve),
        meta: {
            title: "Add Question",
        }
    },
    {
        path: '/admin/questionmanagement/:category_id/:test_type/',
        component: resolve => require(['pages/admin/question'], resolve),
        meta: {
            title: "Questions List",
        }
    },
    {
        path: '/admin/question-management-edit/:question_id/:category_id/:test_type',
        component: resolve => require(['pages/admin/edit-question'], resolve),
        meta: {
            title: "Update Question",
        }
    },
    {
        path: '/admin/results',
        component: resolve => require(['pages/admin/results'], resolve),
        meta: {
            title: "Test Results",
        }
    },

    {
        path: '/admin/result/:id/:categoryId/:studentId',
        props: true,
        component: resolve => require(['pages/admin/result-detail'], resolve),
        meta: {
            title: "Result Details",
        }
    },


    {
        path: '/admin/reports',
        component: resolve => require(['pages/admin/reports'], resolve),
        meta: {
            title: "Reports",
        }
    },
    {
        path: '/admin/logs',
        component: resolve => require(['pages/admin/logs'], resolve),
        meta: {
            title: "Users Logs",
        }
    },



]

export default layout
