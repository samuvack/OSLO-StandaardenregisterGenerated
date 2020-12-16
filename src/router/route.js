import Vue from "vue";
import Router from 'vue-router'
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";

Vue.use(Router)

/**
 * Router from Vue. Associate pages with paths.
 * @type {VueRouter}
 */
const router = new Router({
    mode: 'history',
    base: '/standaarden/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path:'/statistics',
            name: 'statistics',
            component: Statistics
        }
    ]
});

export default router
