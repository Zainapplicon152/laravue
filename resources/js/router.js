import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from './components/LoginComponent';
import AdminComponent from './components/AdminComponent';
/*const foo = {template: "<v-alert type = 'error'> I'm foo component</v-alert>"}
const bar = {template: "<v-alert type = 'error'> I'm bar component</v-alert>"}
const user = {template: "<v-alert type = 'warning'> I'm {{$route.params.name}}</v-alert>"}*/

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: LoginComponent,
        name:'Login'
    },
    {
        path: '/admin',
        component: AdminComponent,
        name:'Admin'
    },
    /*{
        path: '/foo',
        component: foo,
    },
    {
        path: '/bar',
        component: bar,
    },
    {
        path: '/user/:name',
        component: user,
    }*/
]


export default new VueRouter({routes})
