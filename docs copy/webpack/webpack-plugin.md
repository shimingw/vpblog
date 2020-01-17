---
title: webpack-plugin
date: 2019-10-26 00:00:10
categories: 'webpack'
tags:
    - 'webpack'
---



- loader-utils：用来取loader的参数
- schema-utils：用来校验loader的传参
- 异步loader：`var callback = this.async()`，将`next`的控制权交给调用函数本身
- raw：module.exports.raw = true;返回的结束时buffer