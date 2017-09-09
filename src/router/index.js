import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PageTransition from '@/components/PageTransition'
Vue.use(Router)

Router.prototype.goBack = function() {
	this.isBack = true;
	this.go(-1);
}

export default new Router({
	routes: [{
		path: '',
		component: PageTransition, // 引入页面切换组件
		children: [{
			path: '/',
			name: 'Hello',
			component: Hello
		}, {
			path: '/test1',
			name: 'test1',
			component: (resolve) => require(['@/views/test1'], resolve)
		}, {
			path: '/test2',
			name: 'test2',
			component: (resolve) => require(['@/views/test2'], resolve)
		}]
	}],
	scrollBehavior(to, from, savedPosition) {
		console.log(to)
		return {
			x: 0,
			y: 0
		}
	}
})