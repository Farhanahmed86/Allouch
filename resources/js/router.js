import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/home/index.vue")
        },
        {
            path: "/login/:user_id?",
            name: "login",
            component: () => import("./views/login/index.vue")
        },
        // {
        //     path: "/register",
        //     name: "register",
        //     component: () => import("./views/register/index.vue")
        // },

        {
            path: "/register",
            name: "register",
            component: () => import("./views/register/formr.vue")
        },
        {
            path: "/singin",
            name: "register",
            component: () => import("./views/register/formrr.vue")
        },
        {
            path: "/profile",
            name: "register",
            component: () => import("./views/register/profile.vue")
        },
        {
            path: "/details",
            name: "register",
            component: () => import("./views/register/branddetail.vue")
        },

        {
            path: "/businesstype",
            name: "register",
            component: () => import("./views/register/businesstype.vue")
        },
        {
            path: "/verify/user/:id",
            name: "verify",
            props: true,
            component: () => import("./views/verify/index.vue")
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("./views/forgot/index.vue")
        },
        {
            path: "/reset/:token",
            name: "reset",
            component: () => import("./views/reset/index.vue")
        },
        /**
         * Admin routes
         */
        {
            path: "/admin",
            name: "admin",
            component: () => import("./views/admin/dashboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/components/buttons",
            name: "buttons",
            component: () => import("./views/admin/buttons.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/sponsorship",
            name: "admin",
            component: () => import("./views/admin/dashborad1.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/pay",
            name: "admin",
            component: () => import("./views/admin/paypal.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/Branddashoboard",
            name: "admin",
            component: () => import("./views/admin/branddashboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/Brandmerchandise",
            name: "admin",
            component: () => import("./views/admin/merchandise.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/entrefrom",
            name: "admin",
            component: () => import("./views/admin/entreform.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/courses",
            name: "admin",
            component: () => import("./views/admin/dashborad2.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/influncer/dashborad",
            name: "admin",
            component: () => import("./views/admin/dashborad3.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/assign_product",
            name: "admin",
            component: () => import("./views/admin/assing_product.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/influncers",
            name: "admin",
            component: () => import("./views/admin/influencer_page.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/chat",
            name: "admin",
            component: () => import("./views/admin/chat.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/chats",
            name: "chats",
            component: () => import("./views/admin/chats.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/allmerchandise",
            name: "chats",
            component: () => import("./views/admin/allmerchandise.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/allmerchandises/:id",
            name: "chats",
            component: () => import("./views/admin/allmerchandise_id.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/admin/dashborad4/:id",
            name: "admin",
            component: () => import("./views/admin/dashborad4.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/components/cards",
            name: "cards",
            component: () => import("./views/admin/cards.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/colors",
            name: "colors",
            component: () => import("./views/admin/colors.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/borders",
            name: "borders",
            component: () => import("./views/admin/borders.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/animations",
            name: "animations",
            component: () => import("./views/admin/animations.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/other",
            name: "other",
            component: () => import("./views/admin/other.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/page-not-found",
            name: "page-not-found",
            component: () => import("./views/admin/page-not-found.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/blank",
            name: "blank",
            component: () => import("./views/admin/blank.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/charts",
            name: "charts",
            component: () => import("./views/admin/charts.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/tables",
            name: "tables",
            component: () => import("./views/admin/tables.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
