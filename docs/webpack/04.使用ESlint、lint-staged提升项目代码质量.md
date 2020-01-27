---
title: "使用 ESlint、lint-staged 提升项目代码质量"
date: 2019-10-24
permalink: "2019-10-24-webpack-使用 ESlint、lint-staged 提升项目代码质量"
---

## lint-staged

根据`package.json`中配置的`husky`工具（例如 [Prettier](https://prettier.io/), [ESlint](https://eslint.org/)） 对暂存区的代码进行检查

### 安装

```
npm install --save-dev lint-staged@next
```

### 配置

#### lint-staged配置

- 可以直接在`package.json`中配置

```
  "lint-staged": {
    "**/src/**/*.{js,vue}": [	//配置过滤规则
      "prettier --write --single-quote --no-semi",	//配置检查规则
      "eslint --fix",
      "git add"
    ]
  }
```

- 还可以通过`.lintstagedrc`、`.lintstagedrc.js`、`lint-staged.config.js`默认配置文件进行配置

```
//通过配置文件可以编写更个性的过滤规则
module.exports = {
  '**/*.js?(x)': filenames => filenames.map(filename => `prettier --write '${filename}'`)
}
```

#### husky配置

最后需要在恰当的时候调用`lint-staged`，一般是在`commit`之前

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
 }
```

### 内部流程

1. git commit时，触发husky钩子，用过钩子去执行lint-staged插件
2. lint-staged根据eslint、prettier配置规则对文件进行修复和检查
3. 如果文件通过检查则成功commit
4. 如果检查未通过会在控制台提示错误



## prettier

一个代码格式化程序[官网](https://prettier.io/)

### 安装

```
npm install --save-dev --save-exact prettier
```

### 使用

`prettier`可以将文件以你定义的规则去格式化文件，如果你没有配置任何规则，则以`prettier`的默认规则进行文件格式化

```
npx prettier --write xx.js
```

### 参数

- --wirte：就地格式化文件
- [more](https://prettier.io/docs/en/options.html)





## ESLint

### 安装

一个代码检查工具，它使用`AST`去分析代码中的模式

如果你的代码有不符合规则的地方，他都会提示出来

```
npm install --save-dev eslint
```

### 初始化

可以帮助开发者快速生成一个`eslint`的配置文件，并且自动安装相关依赖

开发者可以根据个人项目的特点，去生`eslint`规则

```
node_modules/.bin/eslint --init
// 如果全局安装了 可以直接 eslint --init
```

### 配置文件

```
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
```

- `env`: Environments，指定代码的运行环境。不同的运行环境，全局变量不一样，指明运行环境这样ESLint就能识别特定的全局变量。同时也会开启对应环境的语法支持，例如：es6。

- `parser`：ESLint 默认使用Espree作为其解析器，但它并不能很好的适应 React 环境，所以刚才安装了 babel-eslint 用来代替默认的解析器，在配置里这么写`"parser": "babel-eslint"`。

- `plugins`：顾名思义就是插件，插件是单独的npm包，命名一般以`eslint-plugin`开头，写的时候用字符串数组的形式，可以省略`eslint-plugin`开头。plugins一般包含一个或多个规则配置，可以在extends中引入。

- `extends`：ESLint 不需要自行定义大量的规则，因为很多规则已被分组作为一个规则配置。

- `rules`：这里可以对规则进行细致的定义了，覆盖之前前面说的extends中定义的规则。例如 - `indent`就是对缩进的修改。`"indent": ["error",4]` 前面一项代表错误等级，第二项是具体配置，有些规则有第三项选项，例如 indent 就有 `{ "SwitchCase": 1 }`，代表对switch语句采取什么样的缩进策略，如果不设默认是0。具体可以定义什么 rules，可以[参考这里](https://link.jianshu.com/?t=https://eslint.org/docs/rules/)

错误等级有三级 `0`，`1`，`2`，分别代表`off`，`warning`，`error`。error错误会终止 lint-staged 执行。

- `globals`：全局变量，当访问未定义的变量时，no-undef 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。
- `parserOptions`：EsLint通过parserOptions，允许指定校验的ecma的版本，及ecma的一些特性

```
{
    "parserOptions": {
        "ecmaVersion": 6, //指定ECMAScript支持的版本，6为ES6
        "sourceType": "module", //指定来源的类型，有两种”script”或”module”
        "ecmaFeatures": {
            "jsx": true//启动JSX
        },
    }
}
```

