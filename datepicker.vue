<template>
	<div class="vue-datepicker" @mouseout="endChoice" @mouseover="startMouseOver">
		<input type="text" autocomplete="off" disableautocomplete :name="field" :id="field" :value="value" :placeholder="placeholder" @focus="startChoice" @keypress="startChoice" @blur="endChoice" v-el:input>
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
					<tr v-for="(mIndex, m) in monthDays" track-by="$index">
						<td v-for="(dIndex, d) in m" track-by="$index" @click="choiceDay(d, $event)"
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
	// 比较两个日期大小，如果date1大于date2返回true，否则false
	function dateCompare(date1, date2) {
		if (date1.day && date2.day) {
			return date1.year > date2.year
					|| (date1.year == date2.year && date1.month > date2.month)
					|| (date1.year == date2.year && date1.month == date2.month && date1.day > date2.day);
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
				default: '',
				twoWay: true
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
				let {value} = this,
						dateObj, year, month, day;
				if (value) {
					dateObj = new Date(value);
				} else {
					dateObj = new Date();
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
				this.year++;
			},
			choiceMonth(m){
				let {year ,today, forward} = this;
				if (forward && (today.year > year || (today.year == year && today.month > m))) {
					return false;
				}
				this.month = m;
				this.dayPanelIsShow = true;
				this.monthPanelIsShow = false;
			},
			// 样式
			classMonth(m){
				let {month, year, curr ,today, forward} = this;
				return {
					'z-on': m == month && curr.year == year,
					'z-existed': true,
					'z-invalid': forward && (today.year > year || (today.year == year && today.month > m) )
				};
			},
			classDay(d){
				let {month, year, curr ,today, forward} =this,
						isValid = forward && dateCompare(today, {year, month, day: d});
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
			},
			prevMonth() {
				let {year ,month,today, forward} = this;
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
				let {month} = this;
				if (month < 11) {
					this.month++;
				} else {
					this.year++;
					this.month = 0;
				}
			},
			choiceDay(d) {
				let {year, month, format, today, forward} = this;
				if (d !== '' && !(forward && dateCompare(today, {year, month, day: d}))) {
					this.day = d;
					this.value = dateFormat(year, month, d, format);
					this.immEndChoice();
				}
			},
			// 鼠标离开日期选择区域时超过一定时间，关闭日期面板
			endChoice(e) {
				let that = this,
					inputEle = that.$els.input;
				if(e.type == 'mouseout') {
					that.isMouseOver = false;
				}
				setTimeout(function() {
					if (!that.isMouseOver && inputEle != document.activeElement) {
						that.dayPanelIsShow = false;
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
			}
		}
	}
</script>

<style scoped>
@-webkit-keyframes vueDatePicker {
  0% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0); }
  100% {
    opacity: 1;
    -webkit-transform: translate(0) scale(1);
            transform: translate(0) scale(1); } }

@keyframes vueDatePicker {
  0% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0); }
  100% {
    opacity: 1;
    -webkit-transform: translate(0) scale(1);
            transform: translate(0) scale(1); } }

.vue-datepicker {
  position: relative;
  margin: 0;
  padding: 0;
  font-family: verdana;
  font-size: 14px;
  color: #666; }
  .vue-datepicker * {
    margin: 0;
    padding: 0; }
  .vue-datepicker input {
    display: block;
    width: 245px;
    height: 28px;
    padding-left: 6px;
    border: 1px solid #DDD;
    outline: none; }
  .vue-datepicker .vue-datepicker-panels {
    position: absolute;
    z-index: 99999;
    left: 0;
    background-color: #FFF;
    width: 245px;
    border: 1px solid #DDD;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
    padding: 10px 6px;
    -webkit-animation: vueDatePicker 0.1s ease-out;
            animation: vueDatePicker 0.1s ease-out; }
  .vue-datepicker .vue-datepicker-panel .vue-datepicker-month {
    padding-bottom: 4px;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    text-align: center; }
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-month a {
      float: left;
      display: block;
      width: 35px;
      cursor: pointer;
      color: #999;
      font-size: 12px; }
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-month a:hover {
        background-color: #F5F6F7; }
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-month span {
      float: left;
      display: block;
      width: 175px; }
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-month span.vue-datepicker-btn:hover {
        background-color: #F5F6F7;
        cursor: pointer; }
  .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb,
  .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 {
    width: 245px;
    border-collapse: collapse;
    text-align: center; }
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead,
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead {
      background-color: #F5F6F7;
      height: 35px;
      line-height: 35px;
      border-top: 1px solid #DDD;
      border-bottom: 1px solid #DDD; }
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead tr,
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead tr {
        border: none; }
        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead tr th,
        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead tr th {
          width: 35px;
          font-size: 12px;
          border: none;
          font-weight: normal; }
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr,
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr {
      border-top: 1px solid #EEE; }
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td,
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td {
        height: 31.5px; }
        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed,
        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed {
          cursor: pointer; }
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed span,
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed span {
            display: block;
            height: 21.7px;
            line-height: 21.7px; }
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed:hover,
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed:hover {
            background-color: #F5F6F7;
            color: #d0000e; }
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-on span,
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-on span {
            color: #FFF;
            background-color: #d0000e; }
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid,
          .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid {
            cursor: default; }
            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid span,
            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid span {
              color: #ccc; }
            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid:hover,
            .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid:hover {
              background-color: transparent; }
  .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr {
    border-top: 1px solid #EEE; }
    .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td {
      height: 31.5px;
      padding: 4px 10px;
      font-size: 13px; }
      .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed {
        cursor: pointer; }
        .vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed span {
          display: block;
          height: 22.75px;
          line-height: 22.75px; }
</style>
