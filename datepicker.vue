<template>
	<div class="vue-datepicker" @mouseout="endChoice" @mouseover="startMouseOver">
		<input type="text" :name="field" :id="field" :value="value" @click="startChoice" @keypress="startChoice">
		<div class="vue-datepicker-panel" v-show="dayPanelIsShow">
			<div class="vue-datepicker-month">
				<a class="vue-datepicker-prev" @click="prevMonth"> &lt; </a>
				<span class="vue-datepicker-btn" @click="startChoiceMonth">{{ year }}年 {{ month }}月</span>
				<a class="vue-datepicker-next" @click="nextMonth"> &gt; </a>
			</div>
			<table class="vue-datepicker-tb">
				<thead>
				<tr>
					<th v-for="d in langConf.week">{{ d }}</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(mIndex, m) in monthDays" track-by="$index">
					<td v-for="(dIndex, d) in m" track-by="$index" @click="onChoice(d, $event)"
						:class="{'z-on' : curr.date==d && curr.month==month && curr.year==year, 'z-existed': d!=''}">
						<span>{{ d }}</span>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
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
						:class="{'z-on' : m.id==month-1 && curr.year==year, 'z-existed': d!=''}">
						<span>{{ m.name }}</span>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	'use strict';

	import strPadStart  from 'string.prototype.padstart';
	strPadStart.shim(); //es7 shim

	//	日期格式化输出
	function dateFormat(y, m, d, fm) {
		if (!fm) {
			fm = 'yyyy-mm-dd';
		}
		m = ('' + m).padStart(2, '0');
		d = ('' + d).padStart(2, '0');
		return fm.replace('yyyy', y)
				.replace('YYYY', y)
				.replace('mm', m)
				.replace('MM', m)
				.replace('DD', d)
				.replace('dd', d);
	}

	export default {
		props: ['field', 'value', 'conf', 'format'],
		data() {
			let { value, conf} = this,
					dateObj, year, month, day, date,
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
			month = dateObj.getMonth() + 1;
			day = dateObj.getDay();
			date = dateObj.getDate();
			return {
				langConf,
				dayPanelIsShow: false,
				monthPanelIsShow: false,
				isMouseOver: false,
				year,
				month,
				day,
				date
			};
		},
		computed: {
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
			curr(){
				let {value} = this,
						dateObj, year, month, day, date;
				if (value) {
					dateObj = new Date(value);
				} else {
					dateObj = new Date();
				}
				year = dateObj.getFullYear();
				month = dateObj.getMonth() + 1;
				day = dateObj.getDay();
				date = dateObj.getDate();
				return {year, month, day, date};
			},
			// 返回当前月的天数数组
			monthDays() {
				let {year, month} = this,
						dayNum;
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
			}
		},
		methods: {
			prevYear() {
				this.year--;
			},
			nextYear() {
				this.year++;
			},
			choiceMonth(n){
				this.month = n + 1;
				this.dayPanelIsShow = true;
				this.monthPanelIsShow = false;
			},
			startChoiceMonth(){
				this.dayPanelIsShow = false;
				this.monthPanelIsShow = true;
			},
			prevMonth() {
				let {month} = this;
				if (month > 1) {
					this.month -= 1;
				} else {
					this.year -= 1;
					this.month = 12;
				}
			},
			nextMonth() {
				let {month} = this;
				if (month < 12) {
					this.month += 1;
				} else {
					this.year += 1;
					this.month = 1;
				}
			},
			startChoice(e) {
				if (e && e.type == 'keypress') {
					console.log(e);
					e.returnValue = false;
				}
				this.dayPanelIsShow = true;
			},
			// 鼠标离开日期选择区域时超过一定时间，关闭日期面板
			endChoice() {
				let that = this;
				that.isMouseOver = false;
				setTimeout(function () {
					if (!that.isMouseOver) {
						that.dayPanelIsShow = false;
					}
				}, 1000);
			},
			startMouseOver(){
				this.isMouseOver = true;
			},
			// 立即关闭日期面板
			immEndChoice(){
				this.isMouseOver = true;
				this.dayPanelIsShow = false;
			},
			onChoice(d, e) {
				e.preventDefault();
				if (d !== '') {
					let {year, month, format} = this;
					this.date = d;
					this.value = dateFormat(year, month, d, format);
					this.immEndChoice();
				}
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import "./scss/datepicker.scss"
</style>
