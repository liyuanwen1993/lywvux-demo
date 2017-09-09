// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import router from './router/index'
import './common/common.js'
Vue.use(VueRouter)
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})


router.beforeEach(function(to, from, next) {
	next()
})

router.afterEach(function() {

})

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box')