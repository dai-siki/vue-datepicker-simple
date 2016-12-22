<template>
<div class="vue-datepicker" @mouseout="endChoice" @mouseover="startMouseOver">
	<input type="text" autocomplete="off" disableautocomplete :name="field" :id="field" :value="value" :placeholder="placeholder" @focus="startChoice" @keypress="startChoice" @blur="endChoice"  ref="input">
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
					<tr v-for="(m, mIndex) in monthDays" :key="mIndex">
						<td v-for="(d, dIndex) in m" :key="dIndex" @click="choiceDay(d, $event)" :class="classDay(d)">
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
				<col width="33%" />
				<col width="33%" />
				<col width="33%" />
				<tbody>
					<tr v-for="(season, sIndex) in monthArr" :key="sIndex">
						<td v-for="(m, mIndex) in season" :key="mIndex" @click="choiceMonth(m.id)" :class="classMonth(m.id)">
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
// 比较两个日期大小，如果date1大于date2返回true，否则false
function dateCompare(date1, date2) {
	if (date1.day && date2.day) {
		return date1.year > date2.year ||
			(date1.year == date2.year && date1.month > date2.month) ||
			(date1.year == date2.year && date1.month == date2.month && date1.day > date2.day);
	} else {
		return date1.year > date2.year || (date1.year == date2.year && date1.month > date2.month);
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
			default: ''
		},
		format: {
			type: String,
			default: 'yyyy-mm-dd'
		},
		// 向前看，只能选今天及以后
		forward: {
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		conf: {
			type: Object,
			default: function() {
				return {};
			}
		}
	},
	data() {
		let {
			value,
			conf
		} = this,
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
		monthArr() {
			let {
				month
			} = this.langConf,
				res = [];
			for (let i = 0; i <= 3; i++) {
				let temp = [];
				for (let j = 1; j <= 3; j++) {
					let id = i * 3 + j - 1;
					temp.push({
						id,
						name: month[id]
					});
				}
				res.push(temp);
			}
			return res;
		},
		// 当前日期
		curr() {
			let {
				value
			} = this,
			dateObj, year, month, day;
			if (value) {
				dateObj = new Date(value);
			} else {
				dateObj = new Date();
			}
			year = dateObj.getFullYear();
			month = dateObj.getMonth();
			day = dateObj.getDate();
			return {
				year,
				month,
				day
			};
		},
		// 返回当前月的天数数组
		monthDays() {
			let {
				year,
				month
			} = this,
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
				dayArr = new Array(6).fill(0).map(function() {
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
		today() {
			let dateObj = new Date(),
				year = dateObj.getFullYear(),
				month = dateObj.getMonth(),
				day = dateObj.getDate();
			return {
				year,
				month,
				day
			};
		}
	},
	methods: {
		// 年份+月份选择
		startChoiceMonth() {
			this.dayPanelIsShow = false;
			this.monthPanelIsShow = true;
		},
		prevYear() {
			let {
				year,
				forward,
				today
			} = this;
			if (forward && today.year >= year) {
				return false;
			}
			this.year--;
		},
		nextYear() {
			this.year++;
		},
		choiceMonth(m) {
			let {
				year,
				today,
				forward
			} = this;
			if (forward && (today.year > year || (today.year == year && today.month > m))) {
				return false;
			}
			this.month = m;
			this.startChoice();
		},
		// 样式
		classMonth(m) {
			let {
				month,
				year,
				curr,
				today,
				forward
			} = this;
			return {
				'z-on': m == month && curr.year == year,
				'z-existed': true,
				'z-invalid': forward && (today.year > year || (today.year == year && today.month > m))
			};
		},
		classDay(d) {
			let {
				month,
				year,
				curr,
				today,
				forward
			} = this,
			isValid = forward && dateCompare(today, {
				year,
				month,
				day: d
			});
			return {
				'z-on': curr.day == d && curr.month == month && curr.year == year,
				'z-existed': d != '',
				'z-invalid': isValid
			};
		},

		// 月份+日期选择
		startChoice(e) {
			if (e && e.type == 'keypress') {
				e.returnValue = false;
			}
			this.dayPanelIsShow = true;
			this.monthPanelIsShow = false;
		},
		prevMonth() {
			let {
				year,
				month,
				today,
				forward
			} = this;
			if (forward && (today.year > year || (today.year == year && today.month >= month))) {
				return false;
			}
			if (month > 1) {
				this.month--;
			} else {
				this.year--;
				this.month = 11;
			}
		},
		nextMonth() {
			let {
				month
			} = this;
			if (month < 11) {
				this.month++;
			} else {
				this.year++;
				this.month = 0;
			}
		},
		choiceDay(d) {
			let {
				year,
				month,
				format,
				today,
				forward
			} = this;
			if (d !== '' && !(forward && dateCompare(today, {
					year,
					month,
					day: d
				}))) {
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
					that.dayPanelIsShow = false;
				}
			}, 300);
		},
		startMouseOver() {
			this.isMouseOver = true;
		},
		// 立即关闭日期面板
		immEndChoice() {
			this.isMouseOver = false;
			this.dayPanelIsShow = false;
		}
	}
}

</script>

<style scoped> @import './datepicker.css'; </style>
