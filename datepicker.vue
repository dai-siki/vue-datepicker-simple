<template>
    <div class="vue-datepicker" @mouseout="endChoice" @mouseover="startMouseOver">
        <input type="text" :name="field" :id="field" :value="value" @click="startChoice" @keypress="startChoice">
        <div class="panel" v-show="isShow">
            <div class="month">
                <a class="prev" @click="prevMonth"> &lt; </a>
                <span>{{ year }}年{{ month }}月</span>
                <a class="next" @click="nextMonth"> &gt; </a>
            </div>
            <table class="day">
                <thead>
                <tr>
                    <th v-for="d in conf.days">{{ d }}</th>
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
    </div>
</template>

<script>
    'use strict';

    import strPadStart  from 'string.prototype.padstart';
    strPadStart.shim(); //es7 shim

    export default {
        props: ['field', 'value'],
        data() {
            let { value} = this,
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
            return {
                conf: {
                    days: ['日', '一', '二', '三', '四', '五', '六']
                },
                isShow: false,
                isMouseOver: false,
                year,
                month,
                day,
                date
            };
        },
        computed: {
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
                if(e && e.type=='keypress'){
                    console.log(e);
                    e.returnValue = false;
                }
                this.isShow = true;
            },
            // 鼠标离开日期选择区域时超过一定时间，关闭日期面板
            endChoice() {
                let that = this;
                that.isMouseOver = false;
                setTimeout(function(){
                    if(!that.isMouseOver){
                        that.isShow = false;
                    }
                }, 1000);
            },
            startMouseOver(){
                this.isMouseOver = true;
            },
            // 立即关闭日期面板
            immEndChoice(){
                this.isMouseOver = true;
                this.isShow = false;
            },
            onChoice(d, e) {
                e.preventDefault();
                if (d !== '') {
                    let {year, month} = this;
                    this.date = d;
                    this.value = [year, ('' + month).padStart(2, '0'), ('' + d).padStart(2, '0')].join('-');
                    this.immEndChoice();
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "./scss/datepicker.scss"
</style>
