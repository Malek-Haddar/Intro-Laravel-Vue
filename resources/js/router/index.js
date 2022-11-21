import { createRouter, createWebHistory } from "vue-router";
import List from "../components/post/List.vue";
import Add from "../components/post/Add.vue";
import Edit from "../components/post/Edit.vue";
import Welcome from "../components/Welcome.vue";
import Login from "../components/auth/login.vue";
import Register from "../components/auth/register.vue";
import store from "../store";
import { add } from "lodash";
const routes = [
    {
        path: "/",
        name: "home",
        component: Welcome,
    },
    {
        path: "/List",
        name: "postList",
        component: List,
        meta: { requiresAuth: true },
    },

    {
        path: "/post",
        name: "postAdd",
        component: Add,
    },
    {
        path: "/post/:id/edit",
        name: "postEdit",
        props: true,

        component: Edit,
    },
    {
        path: "/login",
        name: "login",

        component: Login,
    },
    {
        path: "/register",
        name: "register",

        component: Register,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "login" });
    } else {
        next();
    }
});
export default router;
