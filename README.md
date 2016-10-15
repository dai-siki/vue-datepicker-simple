# vue-datepicker-simple
一款非常简单的基于vue的日期选择器

## 更新日志
### @1.2.0
- 添加了"向前看"功能（只能选今天及以后）
### @1.1.0
- 添加了年份选择功能
- 可以自定义日期格式

## demo
简单的示例 [点我](http://dai-siki.github.io/vue-datepicker-simple/example/demo.html).

## 截图
![screenshot](screenshot/01.png)
![screenshot](screenshot/02.png)

## 版本依赖
基于 vue.js@1 版本。模块使用es6编写，样式使用scss编译。（不会babel和scss的同学可参考gulpfile.js和package.json文件）

## 安装
### npm
```shell
$ npm install vue-datepicker-simple
```

## 使用

使用方法非常简单，源码也不复杂，如果你想支持其他语言或调整样式，大可以自行修改相关的vue和scss文件。

```html

<div id="app">
	<label for="myDate">选择日期</label>
	<date-picker field="myDate"
				 :value.sync="date"
				 :format="format"
				 :forward="forward"></date-picker>
</div>

<script>
import 'babel-polyfill'; //因为使用了es6的一些方法，需要babel垫片，如果你项目中已有相关兼容性方案，可忽略
import Vue from 'vue';
import myDatepicker from '../datepicker.vue';

new Vue({
    el: '#app',
    data:{
        date: '2016/02/28',
		format: 'yyyy/mm/dd', // 默认yyyy-mm-dd
		forward: true //向前看，只能选今天及以后，默认false
    },
    components:{
        'date-picker': myDatepicker
    }
});

</script>
```
