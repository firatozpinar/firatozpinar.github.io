// Helpers
import lodash from 'lodash';
import config from './settings/config'

// Vue
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'

// 3. party
import ElementUI from 'element-ui';
import ElementUILocale from 'element-ui/lib/locale'
import ElementUILang from 'element-ui/lib/locale/lang/tr-TR'
import Vuelidate from 'vuelidate'
import VuePageTransition from 'vue-page-transition'
import VueTypedJs from 'vue-typed-js'

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

// Misc
import store from './store/'
import {Languages} from './resources/lang';

// Paths
import './settings/directives'
import './components'

Vue.component('font-awesome-icon', FontAwesomeIcon);

// Set
ElementUILocale.use(ElementUILang);

Vue.use(VueResource);
Vue.use(VueI18n);
Vue.use(ElementUI, {ElementUILocale});
Vue.use(Vuelidate);
Vue.use(VuePageTransition);
Vue.use(VueTypedJs);

library.add(fas);
library.add(far);
library.add(fab);

Vue.config.performance = true;
Vue.config.productionTip = false;
Vue.prototype.lodash = lodash;

Vue.http.options.root = config.api.point;
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.access_token;

const numberFormats = {
	'en-Us': {
		currency: {
			style: 'currency', currency: 'TRY', symbol: '₺'
		}
	},
	'tr-TR': {
		currency: {
			style: 'currency', currency: 'TRY', symbol: '₺'
		}
	}
};

const dateTimeFormats = {
	'tr-TR': {
		short: {
			year: 'numeric', month: 'short', day: 'numeric'
		},
		long: {
			year: 'numeric', month: 'short', day: 'numeric',
			weekday: 'short', hour: 'numeric', minute: 'numeric'
		}
	}
};

import Bootstrap from './Bootstrap.vue'

Vue.mixin({
	data: () => {
		return {
			//
		}
	},
	methods: {
		newBlankPage(url) {
			return window.open(url, '_blank');
		},
	}
});

new Vue({
	el: '#App',
	store,
	i18n: new VueI18n({
		locale: 'tr',
		silentTranslationWarn: true,
		messages: Languages,
		dateTimeFormats,
		numberFormats
	}),
	render: h => h(Bootstrap)
});