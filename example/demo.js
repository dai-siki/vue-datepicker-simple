import 'babel-polyfill';
import Vue from 'vue';
import myDatepicker from '../datepicker.vue';

new Vue({
    el: '#app',
    data:{
        date: '2016/02/28',
		format: 'yyyy/mm/dd' // 默认yyyy-mm-dd
    },
    components:{
        'date-picker': myDatepicker
    }
});
