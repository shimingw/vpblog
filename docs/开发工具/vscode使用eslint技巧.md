---
title: "vscode使用eslint技巧"
date: 2019-11-11
permalink: "2019-11-11-开发工具-vscode使用eslint技巧"
---




**vscode**中可以使用`eslint`对代码规范进行校验，并自动修复一些简单的错误（代码格式、`let`定义的常量修改为`const`）

## 安装eslint

在`vscode`商店中搜索`eslint`进行安装

## 配置eslint规则

**.eslintrc.js**

```js
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "no-var": 2,
    "eqeqeq":"off"
  }
}
```

## vscode中关于eslint的配置

在根目录创建**.vscode/settings.json**文件进行配置

```json
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,		//是否在保存时自动修复错误，如果不开启自动修复也可以使用ctrl+shift+p，使用fix all auto-fixable problems进行手动修复
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.options": { "configFile": "./.eslintrc.js" }	//关联eslint配置文件，vscode中的eslint将会根据配置文件中的规则进行校验
```


## 使用效果

![vscode-eslint-demo](vscode使用eslint技巧/vscode-eslint-demo.gif)