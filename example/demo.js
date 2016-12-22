import 'babel-polyfill';
import Vue from 'vue';
import myDatepicker from '../datepicker.vue';

new Vue({
	el: '#app',
	data: {
		date1: '',
		date2: '',
		date3: '',
		format: 'yyyy/mm/dd' // 默认yyyy-mm-dd
	},
	components: {
		'date-picker': myDatepicker
	}
});
