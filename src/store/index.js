import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	strict: debug,
	state: {
		preloader: {
			visible: true,
			percentage: 0
		},
		responseData: null
	},
	mutations: {
		setPreloaderVisible(state, payload) {
			state.preloader.visible = payload;
		},
		setPreloaderPercentage(state, payload) {
			state.preloader.percentage = payload
		},
		setResponseData(state, payload) {
			state.responseData = payload;
		}
	},
	actions: {
		//
	},
	getters: {
		preloader(state) {
			return state.preloader
		}
	},
	plugins: [
		//
	]
})
