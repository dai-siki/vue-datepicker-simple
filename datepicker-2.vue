<template>
	<div class="vue-datepicker" @mouseout="endChoice" @mouseover="startMouseOver">
		<input type="text" autocomplete="off" disableautocomplete :name="field" :id="field" :value="value" :placeholder="placeholder" @focus="startChoice" @keypress="startChoice" @blur="endChoice" ref="input">
		<div class="vue-datepicker-panels" v-show="dayPanelIsShow || monthPanelIsShow">
			<!--日期选择-->
			<div class="vue-datepicker-panel" v-show="dayPanelIsShow">
				<div class="vue-datepicker-month">
					<a class="vue-datepicker-prev" @click="prevMonth"> &lt; </a>
					<span class="vue-datepicker-btn" @click="startChoiceMonth">{{ year }}年 {{ month+1 }}月</span>
					<a class="vue-datepicker-next" @click="nextMonth"> &gt; </a>
				</div>
				<table class="vue-datepicker-tb">
					<thead>
					<tr>
						<th v-for="d in langConf.week">{{ d }}</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="(m, mIndex) in monthDays" track-by="$index">
						<td v-for="(d, dIndex) in m" track-by="$index" @click="choiceDay(d, $event)"
							:class="classDay(d)">
							<span>{{ d }}</span>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
			<!--年月选择-->
			<div class="vue-datepicker-panel" v-show="monthPanelIsShow">
				<div class="vue-datepicker-month">
					<a class="vue-datepicker-prev" @click="prevYear"> &lt; </a>
					<span>{{ year }}年</span>
					<a class="vue-datepicker-next" @click="nextYear"> &gt; </a>
				</div>
				<table class="vue-datepicker-tb2">
					<col width="33%"/>
					<col width="33%"/>
					<col width="33%"/>
					<tbody>
					<tr v-for="season in monthArr" track-by="$index">
						<td v-for="m in season" track-by="$index" @click="choiceMonth(m.id)"
							:class="classMonth(m.id)">
							<span>{{ m.name }}</span>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	'use strict';

	//	日期格式化输出
	function dateFormat(y, m, d, fm) {
		if (!fm) {
			fm = 'yyyy-mm-dd';
		}
		m = ('0' + (parseInt(m) + 1)).slice(-2);
		d = ('0' + d).slice(-2);
		return fm.replace('yyyy', y)
				.replace('YYYY', y)
				.replace('mm', m)
				.replace('MM', m)
				.replace('DD', d)
				.replace('dd', d);
	}
	// 比较两个日期大小，返回 -1 0 1
	function dateCompare(date1, date2) {
		if(date1.year == date2.year){
			if(date1.day && date2.day) {
				if(date1.month == date2.month){
					return date1.day > date2.day ? 1 : (date1.day == date2.day ? 0 : -1);
				}else {
					return date1.month > date2.month ? 1 : -1;
				}
			}else {
				return date1.month > date2.month ? 1 : (date1.month == date2.month ? 0 : -1);
			}
		}else {
			return date1.year > date2.year ? 1: -1;
		}
	}

	export default {
		props: {
			field: {
				type: String,
				default: ''
			},
			value: {
				type: String,
				default: '',
				twoWay: true
			},
			format: {
				type: String,
				default: 'yyyy-mm-dd'
			},
			// 不能选今天
			noToday: {
				default: false
			},
			// 向前看，只能选今天及以后
			forward: {
				default: false
			},
			// 向后看
			backward: {
				default: false
			},
			placeholder: {
				type: String,
				default: ''
			},
			conf: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
		data() {
			let { value, conf} = this,
					dateObj, year, month, day,
					langConf = {
						week: ['日', '一', '二', '三', '四', '五', '六'],
						month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
					};
			if (value) {
				dateObj = new Date(value);
			} else {
				dateObj = new Date();
			}
			if (conf) {
				langConf = Object.assign(langConf, conf);
			}
			year = dateObj.getFullYear();
			month = dateObj.getMonth();
			day = dateObj.getDate();
			return {
				langConf,
				dayPanelIsShow: false,
				monthPanelIsShow: false,
				isMouseOver: false,
				year,
				month,
				day
			};
		},
		computed: {
			//	日期二维数组（3*4），渲染用
			monthArr(){
				let {month} = this.langConf,
						res = [];
				for (let i = 0; i <= 3; i++) {
					let temp = [];
					for (let j = 1; j <= 3; j++) {
						let id = i * 3 + j - 1;
						temp.push({id, name: month[id]});
					}
					res.push(temp);
				}
				return res;
			},
			// 当前日期
			curr(){
				let {value, noToday} = this,
					dateObj,
					year="0000",
					month="00",
					day="00";
				if (value) {
					dateObj = new Date(value);
				} else if(!noToday) {
					dateObj = new Date();
				}else{
					return {year, month, day};
				}
				year = dateObj.getFullYear();
				month = dateObj.getMonth();
				day = dateObj.getDate();
				return {year, month, day};
			},
			// 返回当前月的天数数组
			monthDays() {
				let {year, month} = this,
						dayNum;
				month++;
				// 判断一个月有几天
				if (month == 2) {
					if (year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0)) {
						dayNum = 29;
					} else {
						dayNum = 28;
					}
				} else {
					if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
						dayNum = 31;
					} else {
						dayNum = 30;
					}
				}
				// 生成对应星期的日期数组
				let firstDay = new Date(year, month - 1, 1).getDay(),
						dayArr = new Array(6).fill(0).map(function () {
							return new Array(7).fill('');
						}),
						row = 0,
						col = firstDay;
				for (let d = 1; d <= dayNum; d++) {
					dayArr[row][col] = d;
					if (col < 6) {
						col++;
					} else {
						col = 0;
						row++;
					}
				}

				return dayArr;
			},
			today(){
				let dateObj = new Date(),
					year = dateObj.getFullYear(),
					month = dateObj.getMonth(),
					day = dateObj.getDate();
				return {year, month, day};
			}
		},
		methods: {
			// 判断日期是否合法 dateObj格式{year,month,day}
			dateIsValid(dateObj){
				let {today, forward, backward, noToday} = this;
				if(forward && dateCompare(today, dateObj) > 0){
					return false;
				}
				if(backward && dateCompare(today, dateObj) < 0){
					return false;
				}
				if(noToday && dateObj.day && dateCompare(today, dateObj) == 0){
					return false;
				}
				return true;
			},
			// 年份+月份选择
			startChoiceMonth(){
				this.dayPanelIsShow = false;
				this.monthPanelIsShow = true;
			},
			prevYear() {
				let {year, forward, today} = this;
				if (forward && today.year >= year) {
					return false;
				}
				this.year--;
			},
			nextYear() {
				let {year, backward, today} = this;
				if (backward && today.year <= year) {
					return false;
				}
				this.year++;
			},
			choiceMonth(m){
				let {year} = this;
				if (this.dateIsValid({year, month: m})) {
					this.month = m;
					this.dayPanelIsShow = true;
					this.monthPanelIsShow = false;
				}
			},
			// 样式
			classMonth(m){
				let that = this,
					{month, year, curr} = that;
				return {
					'z-on': m == month && curr.year == year,
					'z-existed': true,
					'z-invalid': !that.dateIsValid({year, month:m})
				};
			},
			classDay(d){
				let that = this,
					{month, year, curr} = that;
				return {
					'z-on': curr.day == d && curr.month == month && curr.year == year,
					'z-existed': d != '',
					'z-invalid': !that.dateIsValid({year, month, day:d})
				};
			},

			// 月份+日期选择
			startChoice(e) {
				if (e && e.type == 'keypress') {
					e.returnValue = false;
				}
				if(!this.dayPanelIsShow && !this.monthPanelIsShow){
					this.dayPanelIsShow = true;
				}
			},
			prevMonth() {
				let {year ,month} = this;
				if (this.dateIsValid({year, month: month-1})) {
					if (month > 1) {
						this.month--;
					} else {
						this.year--;
						this.month = 11;
					}
				}
			},
			nextMonth() {
				let {year ,month} = this;
				if (this.dateIsValid({year, month: month+1})) {
					if (month < 11) {
						this.month++;
					} else {
						this.year++;
						this.month = 0;
					}
				}
			},
			choiceDay(d) {
				let {year, month, format} = this;
				if (d && this.dateIsValid({year, month, day:d})) {
					this.day = d;
					this.$emit('input', dateFormat(year, month, d, format));
					this.immEndChoice();
				}
			},
			// 鼠标离开日期选择区域时超过一定时间，关闭日期面板
			endChoice(e) {
				let that = this,
					inputEle = that.$refs.input;
				if(e.type == 'mouseout') {
					that.isMouseOver = false;
				}
				setTimeout(function() {
					if (!that.isMouseOver && inputEle != document.activeElement) {
						that.immEndChoice();
					}
				}, 300);
			},
			startMouseOver(){
				this.isMouseOver = true;
			},
			// 立即关闭日期面板
			immEndChoice(){
				this.isMouseOver = true;
				this.dayPanelIsShow = false;
				this.monthPanelIsShow = false;
			}
		}
	}
</script>

<style scoped> @import './datepicker.css'; </style>
