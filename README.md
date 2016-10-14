# vue-datepicker-simple
一款非常简单的基于vue的日期选择器

## 截图
![screenshot](screenshot.png)

## 版本依赖
基于 vue.js@1 版本

## 安装
### npm
```shell
$ npm install vue-datepicker-simple
```

## 使用

使用方法非常简单，当然用处也非常局限。因为只实现了日期选择，源码非常简单，你大可以自己深入源码修改样式和方法。

```html
<div id="app">
    <date-picker :value.sync="date"></date-picker>
<div>

<script>
import Vue from 'vue'
import myDatepicker from 'vue-datepicker-simple'

new Vue({
    el: '#app',
    data:{
        date
    },
    components:{
        'date-picker': myDatepicker
    }    
})
</script>
```
