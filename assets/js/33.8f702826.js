(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{286:function(a,e,t){"use strict";t.r(e);var r=t(2),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"babel模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel模块"}},[a._v("#")]),a._v(" babel模块")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("@babel/core")]),a._v(" babel的核心模块，将代码转换成AST，再将AST转成代码都靠它")]),a._v(" "),t("li",[t("code",[a._v("@babel/types")]),a._v(" 一个用于 AST 节点的 Lodash 式工具库")]),a._v(" "),t("li",[t("code",[a._v("babylon")]),a._v(" Babel 的解析器。最初是 从Acorn项目fork出来的。使用了基于插件的架构，有一个 plugins 选项可以开关内置的插件，现已被"),t("code",[a._v("@babel/parser")]),a._v("代替")]),a._v(" "),t("li",[t("code",[a._v("@babel/parser")]),a._v(" 取代"),t("code",[a._v("babylon")]),a._v("，成为Babel新的解析器")]),a._v(" "),t("li",[t("code",[a._v("@babel/traverse")]),a._v(" Babel Traverse（遍历）模块维护了整棵树的状态，并且负责替换、移除和添加节点。")]),a._v(" "),t("li",[t("code",[a._v("@babel/generator")]),a._v(" 读取AST并将其转换为代码和源码映射")]),a._v(" "),t("li",[t("code",[a._v("@babel/template")])])]),a._v(" "),t("h2",{attrs:{id:"babel-的处理步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-的处理步骤"}},[a._v("#")]),a._v(" Babel 的处理步骤")]),a._v(" "),t("p",[a._v("Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。")]),a._v(" "),t("h3",{attrs:{id:"解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[a._v("#")]),a._v(" 解析")]),a._v(" "),t("p",[a._v("解析步骤接收代码并输出 AST。 这个步骤分为两个阶段：词法分析（Lexical Analysis） 和 语法分析（Syntactic Analysis）。")]),a._v(" "),t("h4",{attrs:{id:"词法分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[a._v("#")]),a._v(" 词法分析")]),a._v(" "),t("p",[a._v("词法分析阶段把字符串形式的代码转换为 令牌（tokens） 流。")]),a._v(" "),t("p",[a._v("会把每一块代码转换成单独的一个类型对象，比如")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('n * n;\n[\n  { type: { ... }, value: "n", start: 0, end: 1, loc: { ... } },\n  { type: { ... }, value: "*", start: 2, end: 3, loc: { ... } },\n  { type: { ... }, value: "n", start: 4, end: 5, loc: { ... } },\n  ...\n]\n')])])]),t("h4",{attrs:{id:"语法分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[a._v("#")]),a._v(" 语法分析")]),a._v(" "),t("p",[a._v("语法分析阶段会把一个令牌流转换成AST的形式。这个阶段会使用令牌中的信息把它们转换成一个 AST的表述结构，这样更易于后续的操作。")]),a._v(" "),t("p",[a._v("会把词法分析的类型对象转换成一个树形结构（AST语法树）")]),a._v(" "),t("h3",{attrs:{id:"转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[a._v("#")]),a._v(" 转换")]),a._v(" "),t("p",[a._v("转换步骤接收 AST 并对其进行"),t("strong",[a._v("遍历")]),a._v("，在此过程中对节点进行"),t("strong",[a._v("添加、更新及移除等操作")]),a._v("。 这是 Babel 或是其他编译器中最复杂的过程同时也"),t("strong",[a._v("是插件将要介入工作的部分")])]),a._v(" "),t("h3",{attrs:{id:"生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成"}},[a._v("#")]),a._v(" 生成")]),a._v(" "),t("p",[a._v("将AST语法树转换成，字符串形式的代码")]),a._v(" "),t("h2",{attrs:{id:"遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[a._v("#")]),a._v(" 遍历")]),a._v(" "),t("p",[a._v("想要转换 AST 你需要进行递归的树形遍历。")]),a._v(" "),t("h3",{attrs:{id:"visitors（访问者）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visitors（访问者）"}},[a._v("#")]),a._v(" Visitors（访问者）")]),a._v(" "),t("p",[a._v("访问者是一个用于 AST 遍历的跨语言的模式。 简单的说它们就是一个对象，定义了用于在一个树状结构中"),t("strong",[a._v("获取具体节点")]),a._v("的方法。")]),a._v(" "),t("h2",{attrs:{id:"babel-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-core"}},[a._v("#")]),a._v(" babel-core")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("Babel")]),a._v("的核心模块，调用，"),t("strong",[a._v("babel-core")]),a._v("的API可以进行转码")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var babel = require('babel-core');\n\n// 字符串转码\nbabel.transform('code();', options);\n")])])]),t("h2",{attrs:{id:"babel-preset-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env"}},[a._v("#")]),a._v(" babel-preset-env")]),a._v(" "),t("blockquote",[t("p",[a._v("转码规则，配合"),t("strong",[a._v("babel-core")]),a._v("和"),t("strong",[a._v("babel-loader")]),a._v(" 使用，可以根据你定义的规则进行转码。")]),a._v(" "),t("p",[a._v("例如"),t("strong",[a._v("babel-preset-env")]),a._v("预设了很多可供选择环境，浏览器的版本等等")])]),a._v(" "),t("h2",{attrs:{id:"babel-plugin-transform-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-transform-runtime"}},[a._v("#")]),a._v(" babel-plugin-transform-runtime")]),a._v(" "),t("blockquote",[t("p",[a._v("该插件是在运行时，起作用，为环境填充不具备的API")]),a._v(" "),t("p",[a._v("外部引用辅助函数和内置函数，自动填充代码而不会污染全局变量")])]),a._v(" "),t("p",[a._v("例如：")]),a._v(" "),t("p",[a._v("实例方法如"),t("code",[a._v('"foobar".includes("foo")')]),a._v("无法工作，因为这需要修改现有的内置插件（"),t("a",{attrs:{href:"http://babeljs.io/docs/usage/polyfill",target:"_blank",rel:"noopener noreferrer"}},[t("code",[a._v("@babel/polyfill")]),t("OutboundLink")],1),a._v("用于此）。")]),a._v(" "),t("h2",{attrs:{id:"babel-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime"}},[a._v("#")]),a._v(" babel-runtime")]),a._v(" "),t("blockquote",[t("p",[a._v("与"),t("strong",[a._v("transform-runtime")]),a._v(" 结合使用")]),a._v(" "),t("p",[t("strong",[a._v("transform-runtime")]),a._v("转码时会使用到一些工具函数。将这些工作函数单独抽离到了"),t("strong",[a._v("babel-runtime")]),a._v("中，减少多余的代码")])])])}),[],!1,null,null,null);e.default=s.exports}}]);