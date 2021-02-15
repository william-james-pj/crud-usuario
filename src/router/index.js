import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import NotPermission from "../views/NotPermission.vue";

function AdminAuth(to, from, next) {
    let reqHeader = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    };
    if (localStorage.getItem("token") !== undefined) {
        axios
            .post("http://localhost:9000/validate", {}, reqHeader)
            .then(() => {
                // console.log(res);
                next();
            })
            .catch(err => {
                console.log(err.response);
                next("/notpermission");
            });
    } else next("/login");
}

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
        path: "/notpermission",
        name: "NotPermission",
        component: NotPermission
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: (to, from, next) => {
            let reqHeader = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            };
            if (localStorage.getItem("token") !== undefined) {
                axios
                    .post("http://localhost:9000/validatetoken", {}, reqHeader)
                    .then(() => {
                        // console.log(res);
                        next();
                    })
                    .catch(err => {
                        console.log(err.response);
                        next("/login");
                    });
            } else next("/login");
        }
    },
    {
        path: "/users",
        name: "Users",
        component: Users,
        beforeEnter: AdminAuth
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
