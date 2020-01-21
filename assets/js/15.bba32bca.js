(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{254:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue-cli-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3"}},[e._v("#")]),e._v(" vue-cli 3")]),e._v(" "),a("p",[e._v("日期：2018-7-13")]),e._v(" "),a("h2",{attrs:{id:"vue-serve-快速原型设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-serve-快速原型设计"}},[e._v("#")]),e._v(" vue serve 快速原型设计")]),e._v(" "),a("p",[e._v("需要额外安装一个插件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g @vue/cli-service-global\n")])])]),a("p",[e._v("command：")]),e._v(" "),a("blockquote",[a("p",[e._v("vue serve\t启动一个热加载项目")])]),e._v(" "),a("p",[e._v("默认入口文件是"),a("code",[e._v("main.js")]),e._v(", "),a("code",[e._v("index.js")]),e._v(", "),a("code",[e._v("App.vue")]),e._v(" or "),a("code",[e._v("app.vue")])]),e._v(" "),a("p",[e._v("也可以明确指定文件名")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: serve [options] [entry]\n\nserve a .js or .vue file in development mode with zero config\n\nOptions:\n\n  -o, --open  Open browser\n  -c, --copy  Copy local url to clipboard\n  -h, --help  output usage information\n")])])]),a("blockquote",[a("p",[e._v("vue build 将"),a("code",[e._v("vue serve")]),e._v("编辑的文件进行打包")])]),e._v(" "),a("p",[e._v("需要指定打包文件名")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: build [options] [entry]\n\nbuild a .js or .vue file in production mode with zero config\n\n\nOptions:\n\n  -t, --target <target>  Build target (app | lib | wc | wc-async, default: app)\n  -n, --name <name>      name for lib or web-component (default: entry filename)\n  -d, --dest <dir>       output directory (default: dist)\n  -h, --help             output usage information\n")])])]),a("h2",{attrs:{id:"创建一个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个项目"}},[e._v("#")]),e._v(" 创建一个项目")]),e._v(" "),a("h3",{attrs:{id:"命令行创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行创建"}},[e._v("#")]),e._v(" 命令行创建")]),e._v(" "),a("p",[e._v("提供两个模式")]),e._v(" "),a("ol",[a("li",[e._v("使用默认的配置选项eslint+babel")]),e._v(" "),a("li",[e._v("手动选择特性")])]),e._v(" "),a("p",[e._v("vue-cli也会将你的选择保存在**.vuerc** 中，以便下次可以直接配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue create hello-world\n")])])]),a("h3",{attrs:{id:"gui创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui创建"}},[e._v("#")]),e._v(" GUI创建")]),e._v(" "),a("p",[e._v("提供一个图形化用户界面来代替命令行界面的项目创建操作")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue ui\n")])])]),a("h2",{attrs:{id:"vue-cli-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service"}},[e._v("#")]),e._v(" vue-cli-service")]),e._v(" "),a("blockquote",[a("p",[e._v("一个带有默认webpack配置的包")]),e._v(" "),a("p",[e._v("集成在"),a("code",[e._v("vue create <project name>")]),e._v("中，也可以单独使用"),a("strong",[e._v("npm")]),e._v("安装")])]),e._v(" "),a("p",[e._v("有开发和生产两个命令，并提供一些额外的参数")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "scripts": {\n    "serve": "vue-cli-service serve",\n    "build": "vue-cli-service build"\n  }\n}\n')])])]),a("blockquote",[a("p",[e._v("vue-cli-service serve")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: vue-cli-service serve [options] [entry]\n\nOptions:\n\n  --open    open browser on server start\n  --copy    copy url to clipboard on server start\n  --mode    specify env mode (default: development)\n  --host    specify host (default: 0.0.0.0)\n  --port    specify port (default: 8080)\n  --https   use https (default: false)\n")])])]),a("blockquote",[a("h2",{attrs:{id:"vue-cli-service-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service-build"}},[e._v("#")]),e._v(" vue-cli-service build")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Usage: vue-cli-service build [options] [entry|pattern]\n\nOptions:\n\n  --mode        specify env mode (default: production)\n  --dest        specify output directory (default: dist)\n  --modern      build app targeting modern browsers with auto fallback\n  --target      app | lib | wc | wc-async (default: app)\n  --name        name for lib or web-component mode (default: "name" in package.json or entry filename)\n  --no-clean    do not remove the dist directory before building the project\n  --report      generate report.html to help analyze bundle content\n  --report-json generate report.json to help analyze bundle content\n  --watch       watch for changes\n')])])]),a("h2",{attrs:{id:"帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助"}},[e._v("#")]),e._v(" 帮助")]),e._v(" "),a("p",[e._v("可以查看更多选项")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue create --help\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: create [options] <app-name>\n\ncreate a new project powered by vue-cli-service\n\n\nOptions:\n\n  -p, --preset <presetName>       Skip prompts and use saved or remote preset\n  -d, --default                   Skip prompts and use default preset\n  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset\n  -m, --packageManager <command>  Use specified npm client when installing dependencies\n  -r, --registry <url>            Use specified npm registry when installing dependencies (only for npm)\n  -g, --git [message|false]       Force / skip git intialization, optionally specify initial commit message\n  -f, --force                     Overwrite target directory if it exists\n  -c, --clone                     Use git clone when fetching remote preset\n  -x, --proxy                     Use specified proxy when creating project\n  -h, --help                      output usage information\n")])])]),a("h2",{attrs:{id:"兼容性配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性配置"}},[e._v("#")]),e._v(" 兼容性配置")]),e._v(" "),a("h3",{attrs:{id:"browserslist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[e._v("#")]),e._v(" browserslist")]),e._v(" "),a("p",[a("strong",[e._v("package.json")]),e._v("中的 "),a("strong",[e._v("browserslist")]),e._v("字段用于指定兼容浏览器的返回")]),e._v(" "),a("p",[e._v("使用"),a("a",{attrs:{href:"https://new.babeljs.io/docs/en/next/babel-preset-env.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ babel / preset-env"),a("OutboundLink")],1),e._v("和"),a("a",{attrs:{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("autoprefixer"),a("OutboundLink")],1),e._v(" 来编译"),a("strong",[e._v("js")]),e._v("和"),a("strong",[e._v("css")])]),e._v(" "),a("p",[e._v("请参阅"),a("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[e._v("此处"),a("OutboundLink")],1),e._v("了解如何指定浏览器范围。")]),e._v(" "),a("h3",{attrs:{id:"polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfills"}},[e._v("#")]),e._v(" Polyfills")]),e._v(" "),a("p",[e._v("默认"),a("strong",[e._v("vue-cli")]),e._v("使用"),a("a",{attrs:{href:"https://new.babeljs.io/docs/en/next/babel-preset-env.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@ vue / babel-preset-app"),a("OutboundLink")],1),e._v("来转码。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@ vue / babel-preset-app 所依赖的模块\n\n"@babel/plugin-syntax-jsx": "7.0.0-beta.47",\n"@babel/plugin-transform-runtime": "7.0.0-beta.47",\n"@babel/preset-env": "7.0.0-beta.47",\n"@babel/preset-stage-2": "7.0.0-beta.47",\n"@babel/runtime": "7.0.0-beta.47",\n"babel-helper-vue-jsx-merge-props": "^2.0.3",\n"babel-plugin-dynamic-import-node": "^1.2.0",\n"babel-plugin-transform-vue-jsx": "^4.0.1"\n')])])]),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/@vue/cli-plugin-babel",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vue/cli-plugin-babel"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@vue/cli-plugin-babel 所依赖的模块\n\n"@babel/core": "7.0.0-beta.47",\n"@vue/babel-preset-app": "^3.0.0-rc.3",\n"babel-loader": "^8.0.0-0"\n')])])]),a("h2",{attrs:{id:"serve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serve"}},[e._v("#")]),e._v(" serve")]),e._v(" "),a("p",[e._v("启动一个web服务器")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("serve -s dist\n")])])]),a("h2",{attrs:{id:"vue-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-config-js"}},[e._v("#")]),e._v(" vue.config.js")]),e._v(" "),a("blockquote",[a("p",[e._v("修改vue-cli3 的默认webpack配置")])]),e._v(" "),a("h3",{attrs:{id:"configurewebpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurewebpack"}},[e._v("#")]),e._v(" configureWebpack")]),e._v(" "),a("blockquote",[a("p",[e._v("该对象将使用"),a("a",{attrs:{href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-merge"),a("OutboundLink")],1),e._v("合并到最终的webpack配置中。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// vue.config.js\nmodule.exports = {\n  configureWebpack: {\n    plugins: [\n      new MyAwesomeWebpackPlugin()\n    ]\n  }\n}\n")])])]),a("h2",{attrs:{id:"inspect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inspect"}},[e._v("#")]),e._v(" inspect")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("vue-cli-service")]),e._v("公开"),a("code",[e._v("inspect")]),e._v("用于检查已解析的webpack配置的命令。全局"),a("code",[e._v("vue")]),e._v("二进制文件还提供"),a("code",[e._v("inspect")]),e._v("命令，它只是"),a("code",[e._v("vue-cli-service inspect")]),e._v("在项目中代理。")])]),e._v(" "),a("p",[e._v("您可以将输出重定向到文件以便于检查：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue inspect > output.js\n")])])]),a("p",[e._v("定位命名规则或插件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue inspect --rule vue\nvue inspect --plugin html\n")])])]),a("p",[e._v("列出所有命名规则和插件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue inspect --rules\nvue inspect --plugins\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);