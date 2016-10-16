import 'babel-polyfill';
import Vue from 'vue';
import myDatepicker from '../datepicker.vue';

new Vue({
	el: '#app',
	data: {
		date: '',
		format: 'yyyy/mm/dd' // 默认yyyy-mm-dd
	},
	components: {
		'date-picker': myDatepicker
	}
});
