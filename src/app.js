import './static/reset.css';

// 引入vue路由
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入element ui
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);

import App from './components/app.vue';

import total from './components/total/total';
import first from './components/first/first';
import second from './components/second/second';
import third from './components/third/third';

// 定义路由
const routes = [
	{ path: '/total', component: total, name: 'total' },
	{ path: '/first', component: first, name: 'first' },
	{ path: '/second', component: second, name: 'second' },
	{ path: '/third', component: third, name: 'third' }
];

const router = new VueRouter({
	routes
});

// 开启路由
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
