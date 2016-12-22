import 'babel-polyfill';
import myDatepicker from '../datepicker-2.vue';

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
