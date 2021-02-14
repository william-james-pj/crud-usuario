import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/users",
        name: "Users",
        component: Users
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
