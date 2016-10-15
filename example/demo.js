import 'babel-polyfill';
import Vue from 'vue';
import myDatepicker from '../datepicker.vue';

new Vue({
    el: '#app',
    data:{
        date: ''
    },
    components:{
        'date-picker': myDatepicker
    }
});
