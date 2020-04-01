(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{341:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"three-js-学习笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-js-学习笔记"}},[t._v("#")]),t._v(" three.js 学习笔记")]),t._v(" "),s("p",[t._v("日期：2018-6-5")]),t._v(" "),s("h3",{attrs:{id:"三大组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三大组件"}},[t._v("#")]),t._v(" 三大组件")]),t._v(" "),s("p",[t._v("场景（scene）、相机（camera）和渲染器（renderer）。有了这三样东西，才能将物体渲染到网页中去。")]),t._v(" "),s("p",[t._v("场景和相机代表了 3D 观察空间和数据模型，渲染器则包含了 WebGL 绘图上下文和着色器。")]),t._v(" "),s("h3",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),s("p",[t._v("场景就只有一种")]),t._v(" "),s("p",[s("code",[t._v("js")]),t._v("\nvar scene = new THREE.Scene();")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\n\n\n### 相机\n\n```js\n透视相机，也就是类似于人眼观察的方式\n\nPerspectiveCamera("field of view", "aspect ratio", "near clipping plane", "far clipping plane")\n\n')])])]),s("h3",{attrs:{id:"渲染器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染器"}},[t._v("#")]),t._v(" 渲染器")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" renderer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGLRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n染器renderer的domElement元素，表示渲染器中的画布，所有的渲染都是画在domElement上的，所以这里的appendChild表示将这个domElement挂接在body下面，这样渲染的结果就能够在页面中显示了。\n")])])]),s("h3",{attrs:{id:"添加物体到场景中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加物体到场景中"}},[t._v("#")]),t._v(" 添加物体到场景中")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" geometry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CubeGeometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//盒子模型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00ff00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//材料着色")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("geometry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" material"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CubeGeometry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segmentsWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segmentsHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segmentsDepth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" materials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sides"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwidth：立方体x轴的长度\nheight：立方体y轴的长度\ndepth：立方体z轴的深度，也就是长度\n")])])]),s("h3",{attrs:{id:"渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" 渲染")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("renderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n渲染函数的原型如下：\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" scene"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" renderTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" forceClear "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nscene：前面定义的场景\ncamera：前面定义的相机\nrenderTarget：渲染的目标，默认是渲染到前面定义的render变量中\nforceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("，也会清除。\n")])])]),s("h3",{attrs:{id:"渲染循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染循环"}},[t._v("#")]),t._v(" 渲染循环")])])}),[],!1,null,null,null);a.default=e.exports}}]);