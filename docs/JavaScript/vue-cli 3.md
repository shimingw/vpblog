---
title: "vue-cli3"
date: 2018-7-13
permalink: "2018-7-13-JavaScript-vue-cli3"
---

# vue-cli 3

日期：2018-7-13

## vue serve 快速原型设计

需要额外安装一个插件

```
npm install -g @vue/cli-service-global
```

command：

> vue serve	启动一个热加载项目

默认入口文件是`main.js`, `index.js`, `App.vue` or `app.vue` 

也可以明确指定文件名

```
Usage: serve [options] [entry]

serve a .js or .vue file in development mode with zero config

Options:

  -o, --open  Open browser
  -c, --copy  Copy local url to clipboard
  -h, --help  output usage information
```

> vue build 将`vue serve`编辑的文件进行打包

需要指定打包文件名

```
Usage: build [options] [entry]

build a .js or .vue file in production mode with zero config


Options:

  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)
  -n, --name <name>      name for lib or web-component (default: entry filename)
  -d, --dest <dir>       output directory (default: dist)
  -h, --help             output usage information
```



## 创建一个项目

### 命令行创建

提供两个模式

1. 使用默认的配置选项eslint+babel
2. 手动选择特性

vue-cli也会将你的选择保存在**.vuerc** 中，以便下次可以直接配置

```
vue create hello-world
```

### GUI创建

提供一个图形化用户界面来代替命令行界面的项目创建操作

```
vue ui
```



## vue-cli-service 

> 一个带有默认webpack配置的包
>
> 集成在`vue create <project name>`中，也可以单独使用**npm**安装

有开发和生产两个命令，并提供一些额外的参数

```
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
```

> vue-cli-service serve

```
Usage: vue-cli-service serve [options] [entry]

Options:

  --open    open browser on server start
  --copy    copy url to clipboard on server start
  --mode    specify env mode (default: development)
  --host    specify host (default: 0.0.0.0)
  --port    specify port (default: 8080)
  --https   use https (default: false)
```

> ## vue-cli-service build

```
Usage: vue-cli-service build [options] [entry|pattern]

Options:

  --mode        specify env mode (default: production)
  --dest        specify output directory (default: dist)
  --modern      build app targeting modern browsers with auto fallback
  --target      app | lib | wc | wc-async (default: app)
  --name        name for lib or web-component mode (default: "name" in package.json or entry filename)
  --no-clean    do not remove the dist directory before building the project
  --report      generate report.html to help analyze bundle content
  --report-json generate report.json to help analyze bundle content
  --watch       watch for changes
```



## 帮助

可以查看更多选项

```
vue create --help
```

```
Usage: create [options] <app-name>

create a new project powered by vue-cli-service


Options:

  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies (only for npm)
  -g, --git [message|false]       Force / skip git intialization, optionally specify initial commit message
  -f, --force                     Overwrite target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy                     Use specified proxy when creating project
  -h, --help                      output usage information
```



## 兼容性配置

### browserslist

**package.json**中的 **browserslist**字段用于指定兼容浏览器的返回

使用[@ babel / preset-env](https://new.babeljs.io/docs/en/next/babel-preset-env.html)和[autoprefixer](https://github.com/postcss/autoprefixer) 来编译**js**和**css**

请参阅[此处](https://github.com/ai/browserslist)了解如何指定浏览器范围。



### Polyfills

默认**vue-cli**使用[@ vue / babel-preset-app](https://new.babeljs.io/docs/en/next/babel-preset-env.html)来转码。

```
@ vue / babel-preset-app 所依赖的模块

"@babel/plugin-syntax-jsx": "7.0.0-beta.47",
"@babel/plugin-transform-runtime": "7.0.0-beta.47",
"@babel/preset-env": "7.0.0-beta.47",
"@babel/preset-stage-2": "7.0.0-beta.47",
"@babel/runtime": "7.0.0-beta.47",
"babel-helper-vue-jsx-merge-props": "^2.0.3",
"babel-plugin-dynamic-import-node": "^1.2.0",
"babel-plugin-transform-vue-jsx": "^4.0.1"
```



 [@vue/cli-plugin-babel](https://www.npmjs.com/package/@vue/cli-plugin-babel)

```
@vue/cli-plugin-babel 所依赖的模块

"@babel/core": "7.0.0-beta.47",
"@vue/babel-preset-app": "^3.0.0-rc.3",
"babel-loader": "^8.0.0-0"
```



## serve

启动一个web服务器

```
serve -s dist
```



## vue.config.js

> 修改vue-cli3 的默认webpack配置

### configureWebpack 

> 该对象将使用[webpack-merge](https://github.com/survivejs/webpack-merge)合并到最终的webpack配置中。 

```
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```



## inspect

> `vue-cli-service`公开`inspect`用于检查已解析的webpack配置的命令。全局`vue`二进制文件还提供`inspect`命令，它只是`vue-cli-service inspect`在项目中代理。 

您可以将输出重定向到文件以便于检查： 

```
vue inspect > output.js
```

定位命名规则或插件： 

```
vue inspect --rule vue
vue inspect --plugin html
```

列出所有命名规则和插件： 

```
vue inspect --rules
vue inspect --plugins
```













