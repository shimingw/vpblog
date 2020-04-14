(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{319:function(t,s,e){"use strict";e.r(s);var n=e(10),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"项目架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目架构"}},[t._v("#")]),t._v(" 项目架构")]),t._v(" "),e("p",[t._v("日期：2018-8-13")]),t._v(" "),e("h2",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#安装所有依赖\ncd www\nnpm install\n\n#单独打包第三方依赖\ncd common\nnpm run build\n\n#运行项目\ncd asset_manage\nnpm run serve\n")])])]),e("h2",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),e("ul",[e("li",[t._v("数据管理平台包含了多个后台项目，后台项目均使用 vue 作为开发框架。")]),t._v(" "),e("li",[t._v("各个 vue 项目存在公共头部，需要统一管理维护。")]),t._v(" "),e("li",[t._v("各个 vue 项目存在公共的依赖（如"),e("code",[t._v("vue")]),t._v("、"),e("code",[t._v("vuex")]),t._v("、"),e("code",[t._v("vue-router")]),t._v("等），公共依赖包可以统一维护。")])]),t._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用"),e("code",[t._v("thinkjs")]),t._v("统一维护每个项目的"),e("code",[t._v("template.html")]),t._v("，模板路径"),e("strong",[t._v("thinkjs/view/index")]),t._v("，解决头部公用问题")])]),t._v(" "),e("li",[e("p",[t._v("单独构建一个"),e("strong",[t._v("common")]),t._v("项目，统一维护第三方依赖。路径"),e("strong",[t._v("thinkjs/www/common")])]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('单独打包的第三方依赖包括(包括element-ui的样式文件)\n  "dependencies": {\n    "axios": "^0.18.0",\n    "element-ui": "^2.4.6",\n    "vue": "^2.5.17",\n    "vue-router": "^3.0.1",\n    "vuex": "^3.0.1",\n    "echarts": "^4.0.2"\n  },\n')])])])]),t._v(" "),e("li",[e("p",[e("s",[t._v("由于上述第三方依赖已单独打包，各个子项目不需要将以上依赖写入"),e("strong",[t._v("dependencies")]),t._v("进行打包。只需写入"),e("strong",[t._v("devDependencies")]),t._v("进行引用")])])]),t._v(" "),e("li",[e("p",[t._v("由于每个子项目都需要将相同的依赖安装一遍，会导致部署打包的时间大大加长。所以将"),e("strong",[t._v("common")]),t._v("和"),e("strong",[t._v("vue 子项目")]),t._v("的依赖在他们的父目录统一管理安装。")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("nodejs")]),t._v("查找依赖的顺序（如果不是相对或绝对路径的话）")]),t._v(" "),e("ul",[e("li",[t._v("查看是不是核心模块")]),t._v(" "),e("li",[t._v("在当前目录下一层一层的查找"),e("strong",[t._v("node_modules")]),t._v("，查看是否存在同名模块")]),t._v(" "),e("li",[t._v("查到顶层还是没找到，还会搜索一遍全局环境的"),e("strong",[t._v("node_modules")]),t._v("是否存在")]),t._v(" "),e("li",[e("code",[t._v("module.paths")]),t._v("中保存着 node 将会查找模块的目录，如果模块所在目录不在"),e("code",[t._v("module.paths")]),t._v("中，可以使用"),e("code",[t._v("module.paths.push(path)")]),t._v("添加查找路径")])])])])])])])]),t._v(" "),e("h2",{attrs:{id:"项目介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[t._v("#")]),t._v(" 项目介绍")]),t._v(" "),e("h3",{attrs:{id:"项目目录结构介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构介绍"}},[t._v("#")]),t._v(" 项目目录结构介绍")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("├─app\n│  ├─bootstrap\n│  ├─config\n│  ├─controller\n│  ├─logic\n│  └─model\n├─runtime\n│  └─config\n├─src\n│  ├─bootstrap\n│  ├─config\n│  ├─controller\n│  ├─logic\n│  └─model\n├─test\n├─view\n│  └─index\t\t\t\t\t\t\t//模板文件目录\n└─vue_project\n\t|—package.json\t\t\t\t\t//统一维护所有依赖\n    ├─asset_manage\t\t\t\t\t//子项目\n    │  ├─dist\n    │  │  ├─css\n    │  │  ├─img\n    │  │  ├─js\n    │  │  └─public\n    │  ├─public\t\t\t\t\t\t//静态文件，类似vue-cli2中的static\n    │  ├─server\t\t\t\t\t\t//请求接口文件目录\n    │  └─src\n    │      ├─assets\t\t\t\t\t//动态文件目录\n    │      ├─components\n    │      │  └─common\n    │      ├─css\n    │      ├─route\t\t\t\t\t//路由目录\n    │      └─views\n    │          └─demo-view\n    ├─common\t\t\t\t\t\t//打包公共组件项目\n    │  ├─build\n    │  ├─config\n    │  ├─css\n    │  │  └─element-css\n    │  │      └─fonts\n    │  └─vendor\t\t\t\t\t\t//打包后的公共组件目录\n    └─static\n        ├─css\n        ├─image\n        └─js\n")])])]),e("h3",{attrs:{id:"common-配置介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-配置介绍"}},[t._v("#")]),t._v(" common 配置介绍")]),t._v(" "),e("blockquote",[e("p",[t._v("build 中是依赖包的打包配置")])]),t._v(" "),e("p",[t._v("打包主要插件介绍：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("插件")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("webpack.DllPlugin")]),t._v(" "),e("td",[t._v("将"),e("code",[t._v("vendor")]),t._v("依赖中的库、文件打包（依赖的库取的是"),e("code",[t._v("package.dependencies")]),t._v("的值）")])]),t._v(" "),e("tr",[e("td",[t._v("extract-text-webpack-plugin")]),t._v(" "),e("td",[t._v("将"),e("strong",[t._v("css")]),t._v("单独提取出来，打包成一个**.css**文件")])]),t._v(" "),e("tr",[e("td",[t._v("assets-webpack-plugin")]),t._v(" "),e("td",[t._v("将"),e("code",[t._v("webpack.DllPlugin")]),t._v("打包生成的文件的文件名保存为一个**.json**文件。方便子项目引用。")])]),t._v(" "),e("tr",[e("td",[t._v("optimize-css-assets-webpack-plugin")]),t._v(" "),e("td",[t._v("压缩打包后的**.css**文件")])])])]),t._v(" "),e("h3",{attrs:{id:"vue-cli3-配置介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3-配置介绍"}},[t._v("#")]),t._v(" vue-cli3 配置介绍")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("vue-cli3")]),t._v("的配置文件被封装在了 npm 模块**@vue/cli-service** 中可使用"),e("code",[t._v("vue inspect > output.js")]),t._v("进行查看")]),t._v(" "),e("p",[t._v("具体配置介绍可查看"),e("a",{attrs:{href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1)])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("插件")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("webpack.DllReferencePlugin")]),t._v(" "),e("td",[t._v("将第三方依赖的索引"),e("strong",[t._v("id")]),t._v("与对应的第三方依赖具体位置告知"),e("strong",[t._v("webpack")])])]),t._v(" "),e("tr",[e("td",[t._v("add-asset-html-webpack-plugin")]),t._v(" "),e("td",[t._v("将"),e("strong",[t._v("common")]),t._v("中生成的"),e("strong",[t._v("bundle-config.json")]),t._v("文件中的依赖文件注入"),e("code",[t._v("html-webpack-plugin")]),t._v("的模板中")])])])]),t._v(" "),e("p",[t._v("项目中的配置：")]),t._v(" "),e("p",[t._v("依赖的插件是"),e("code",[t._v("html-webpack-plugin")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("这是配置index.html模板的输出文件，开发环境默认是输出到当前目录的index.html\n传入的值为配置生产环境的输出目录\nchainWebpack: config => {\n\thtmlPath(config, 'index.html');\n}\n")])])]),e("h3",{attrs:{id:"请求模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求模块"}},[t._v("#")]),t._v(" 请求模块")]),t._v(" "),e("blockquote",[e("p",[t._v("根据 axios 封装了一个请求模板，"),e("strong",[t._v("/server/ajax.js")])]),t._v(" "),e("p",[t._v("使用方法参照**/server/api.js**")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" /**\n * @param {string} [url='']\t      请求地址\n * @param {*} [data={}]\t\t\t 请求参数\n * @param {string} [type=\"GET\"]\t  请求类型\n * @param {*} [config={}]\t      修改axios.create实例化参数配置，例如传入{timeout:2000}可修改超时时间\n */\n")])])]),e("h3",{attrs:{id:"css-工程化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-工程化"}},[t._v("#")]),t._v(" css 工程化")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("css")]),t._v(" 使用"),e("strong",[t._v("postcss")]),t._v("提供的插件来实现工程化")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\"postcss-import\": {}\t\t可使用@import url() 引入postcss文件\n\"postcss-url\": {},\t\t\t可在postcss文件中引入url\n'postcss-preset-env': {\n    features: {\n        'nesting-rules': true,\n        'custom-properties': {\n            preserve: false,\n        },\n    }\n},\t 可使用css4语法，目前支持：1、root变量 2、嵌套语法\n")])])]),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("h3",{attrs:{id:"tips"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" tips")]),t._v(" "),e("blockquote",[e("p",[t._v("一定要上传"),e("strong",[t._v("package-lock.json")]),t._v("文件锁定 npm 包版本")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('因为vue-cli3目前在快速迭代中，考虑到项目的稳定性。最好锁住npm包版本\n"@vue/cli-plugin-babel": "^3.0.0-rc.7",\n"@vue/cli-plugin-eslint": "^3.0.0-rc.7",\n"@vue/cli-service": "^3.0.0-rc.7",\n')])])]),e("h2",{attrs:{id:"项目优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[t._v("#")]),t._v(" 项目优化")]),t._v(" "),e("h3",{attrs:{id:"_1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-0"}},[t._v("#")]),t._v(" 1.0")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("将"),e("strong",[t._v("common 目录")]),t._v("（公共依赖打包目录）与"),e("strong",[t._v("asset_manage")]),t._v("（子项目目录）中的依赖的"),e("strong",[t._v("node_modules")]),t._v("抽离到根目录集中安装")])]),t._v(" "),e("li",[e("p",[t._v("在"),e("strong",[t._v("www")]),t._v("根目录下创建一个"),e("strong",[t._v("package.json")]),t._v("文件统一控制所有项目的依赖。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("dependencies")]),t._v(" 中的依赖会被单独打包成一个"),e("strong",[t._v("vendor.js")]),t._v("文件")]),t._v(" "),e("li",[e("strong",[t._v("devDependencies")]),t._v(" 中的依赖为所有子项目，编译时的依赖包")])])]),t._v(" "),e("li",[e("p",[t._v("使用"),e("strong",[t._v("css4")]),t._v("语法替换掉原来的类"),e("strong",[t._v("sass")]),t._v("语法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用"),e("strong",[t._v("postcss")]),t._v("的"),e("strong",[t._v("postcss-preset-env")]),t._v(" 插件")])]),t._v(" "),e("li",[e("p",[t._v("示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("语法介绍：目前支持变量语法、嵌套语法、引入外部样式语法\ncommon.postcss文件\n:root {\n    --mainColor: red;\n    --h1: #112233;\n}\n")])])]),e("p",[t._v("main.postcss文件\n@import url('./common.postcss');")]),t._v(" "),e("p",[t._v("body {\ncolor: var(--mainColor);\nfont-family: system-ui;\noverflow-wrap: break-word;\n& h1 {\ncolor: var(--h1);\n}\n}")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n编译后\n\n")])])]),e("p",[t._v(":root {\n--mainColor: red;\n--h1: #112233;\n}")]),t._v(" "),e("p",[t._v("body {\ncolor: red;\ncolor: var(--mainColor);\nfont-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue;\nword-wrap: break-word\n}")]),t._v(" "),e("p",[t._v("body h1 {\ncolor: #112233;\ncolor: var(--h1);\n}")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n更多特性参考[官方文档](https://preset-env.cssdb.org/)\n\n")])])])])])])]),t._v(" "),e("h3",{attrs:{id:"_2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0"}},[t._v("#")]),t._v(" 2.0")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("为公共打包模块添加"),e("strong",[t._v("postcss-loader")]),t._v("，可以将**.postcss**作为公共模块样式文件")])]),t._v(" "),e("li",[e("p",[t._v("将"),e("strong",[t._v("postcss-loader")]),t._v("的"),e("strong",[t._v("plugins")]),t._v("提取到"),e("strong",[t._v("www 目录")]),t._v("下的"),e("strong",[t._v("postcss.config.js")]),t._v("统一管理")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("loader: 'postcss-loader',\noptions: {\n    config:{\n        path: path.join(__dirname,'../../')\n    }\n}\n")])])])]),t._v(" "),e("li",[e("p",[t._v("将"),e("strong",[t._v("vue")]),t._v("项目中的类"),e("strong",[t._v("sass")]),t._v("语法重构为"),e("strong",[t._v("css4")]),t._v("语法")])]),t._v(" "),e("li",[e("p",[t._v("将"),e("strong",[t._v("vue")]),t._v("项目中"),e("strong",[t._v("tamplate.html")]),t._v("模板和导航栏的样式提取到"),e("strong",[t._v("common")]),t._v("目录下，单独打包引入")])])]),t._v(" "),e("h3",{attrs:{id:"_3-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-0"}},[t._v("#")]),t._v(" 3.0")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("解决 bug")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("postcss")]),t._v("无法编译**@import**加载进来的 css 文件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("postcss插件加载顺序导致，postcss-import必须第一个加载\n\n'postcss-import': {},\n'postcss-preset-env': {\n    features: {\n        'nesting-rules': true,\n        'custom-properties': {\n            preserve: false,\n        },\n    }\n},\n'postcss-url': {}\n")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("vue-cli3")]),t._v("项目无法正常加载"),e("strong",[t._v("postcss.config.js")]),t._v("文件。将"),e("strong",[t._v("postcss")]),t._v("配置写到"),e("strong",[t._v("package.json")]),t._v("后解决")])])])]),t._v(" "),e("li",[e("p",[t._v("新增依赖分析功能，打包时增加"),e("code",[t._v("--report")]),t._v("可开启依赖分析，"),e("code",[t._v("npm run build --report")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin\n\nif (process.env.npm_config_report) {\n    webpackConfig.configureWebpack.plugins.push(new BundleAnalyzerPlugin())\n}\n")])])])]),t._v(" "),e("li",[e("p",[t._v("增加"),e("strong",[t._v("env")]),t._v("环境变量")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//配置项\nconfig.plugin(\'define\').tap(args => {\n    args[0][\'process.env\'][\'BUILD_ENV\'] = "\'" + process.env.BUILD_ENV + "\'";\n    return args;\n});\n\n//package.json\n"local-serve-sit": "set BUILD_ENV=sit&&node ../node_modules/@vue/cli-service/bin/vue-cli-service.js serve",\n"serve-sit": "export BUILD_ENV=sit&&node ../node_modules/@vue/cli-service/bin/vue-cli-service.js serve"\n')])])])]),t._v(" "),e("li",[e("p",[t._v("重写"),e("strong",[t._v("element-ui")]),t._v("的组件样式，并将它们提取到"),e("strong",[t._v("common")]),t._v("中独立打包")])]),t._v(" "),e("li",[e("p",[t._v("为"),e("strong",[t._v("common")]),t._v("增加"),e("strong",[t._v("css")]),t._v("压缩功能")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("插件")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/cssnano",target:"_blank",rel:"noopener noreferrer"}},[t._v("cssnano"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("css 压缩规则插件")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/optimize-css-assets-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("optimize-css-assets-webpack-plugin"),e("OutboundLink")],1)]),t._v(" "),e("td",[t._v("css 压缩插件，webpack4 需要使用 4.0 以上版本")])])])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);