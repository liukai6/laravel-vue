
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/ExampleComponent.vue'));
Vue.component('my-view', require('./components/view.vue'));
Vue.component('mybutton', require('./components/mybutton.vue'));
Vue.component('message', require('./components/message.vue'))

import ElementUI from 'element-ui' //引入element－ui

import 'element-ui/lib/theme-chalk/index.css' //引入element－ui所需的css样式资源文件

Vue.use(ElementUI) //把引入的ElementUI装入我们的Vue


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';    // 路由配置文件
// 实例化路由
const router = new VueRouter({
    routes
})

var vm = new Vue({
  router
}).$mount('#app');
