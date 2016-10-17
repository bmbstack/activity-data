import './static/reset.css';

import Vue from 'vue';
import App from './components/app.vue';

// 引入element ui
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);

new Vue({ // eslint-disable-line
  	el: '#app',
  	render: h => h(App)
});
