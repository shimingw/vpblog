(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{249:function(e,r,t){"use strict";t.r(r);var a=t(2),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("总结使用css时遇到的一些问题，以及解决方案")]),e._v(" "),t("h2",{attrs:{id:"自适应布局实现文字超长显示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自适应布局实现文字超长显示"}},[e._v("#")]),e._v(" 自适应布局实现文字超长显示")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("width: 100px;\ntext-overflow: ellipsis;\noverflow: hidden;\nwhite-space: nowrap;\ndisplay:block;\n")])])]),t("p",[e._v("超长省略的代码相比大家一定不陌生。以上代码如果元素长度超过"),t("code",[e._v("100px")]),e._v("则超出部分以"),t("code",[e._v("...")]),e._v("显示")]),e._v(" "),t("p",[e._v("但是，如果一下代码能否实现？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div class="flex">\n    <div class="left">\n   \t\t<p>我在左边，自适应布局我在左边，自适应布局我在左边，自适应布局我在左边，自适应布局</p>\n    </div>\n    <div class="right">我在右边，定宽</div>\n</div>\n\n.flex {\n    display: flex;\n}\n\n.left {\n    flex: 1;\n    background: red;\n}\n\n.left p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.right {\n    background: green;\n    width: 200px;\n    min-width: 200px;\n\twhite-space: nowrap;\n}\n\n\n')])])]),t("p",[e._v("答案是不可以的，需要在left的div上设置最小宽度才可以实现，因为元素的默认宽度为"),t("code",[e._v("width：auto")])]),e._v(" "),t("p",[t("code",[e._v("auto")]),e._v("：浏览器将会为指定的元素计算并选择一个宽度.")]),e._v(" "),t("p",[e._v("浏览器会根据元素内的宽度进行计算，自始至终显示元素内所有内容。所以不会触发隐藏效果。")]),e._v(" "),t("h2",{attrs:{id:"flex属性解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex属性解析"}},[e._v("#")]),e._v(" flex属性解析")]),e._v(" "),t("p",[e._v("flex是一个"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("简写属性"),t("OutboundLink")],1),e._v("，用来设置 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow",target:"_blank",rel:"noopener noreferrer"}},[e._v("flex-grow"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink",target:"_blank",rel:"noopener noreferrer"}},[e._v("flex-shrink"),t("OutboundLink")],1),e._v(" 与 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis",target:"_blank",rel:"noopener noreferrer"}},[e._v("flex-basis"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"flex-grow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[e._v("#")]),e._v(" flex-grow")]),e._v(" "),t("blockquote",[t("p",[e._v("定义弹性盒子项（flex item）的拉伸因子")])]),e._v(" "),t("p",[e._v("用来定义元素大小比例，例如")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//box1的宽度，为box的2倍\n.box {\n    flex-grow: 1;\n    border: 3px solid rgba(0, 0, 0, .2);\n}\n\n.box1 {\n    flex-grow: 2;\n    border: 3px solid rgba(0, 0, 0, .2);\n}\n\n")])])]),t("h3",{attrs:{id:"flex-shrink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[e._v("#")]),e._v(" "),t("strong",[e._v("flex-shrink")])]),e._v(" "),t("blockquote",[t("p",[e._v("指定了 flex 元素的收缩规则，元素仅在默认宽度之和大于容器的时候才会发生收缩")])]),e._v(" "),t("p",[t("code",[e._v("flex-shrink")]),e._v("属性需要结合"),t("code",[e._v("flex-basis")]),e._v("属性一起使用，当"),t("code",[e._v("flex-basis")]),e._v("设置的宽度总和，大于父元素的宽度时，就会触发元素的等比例缩小，比例参照"),t("code",[e._v("flex-shrink")]),e._v("的数值")]),e._v(" "),t("h3",{attrs:{id:"flex-basis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[e._v("#")]),e._v(" flex-basis")]),e._v(" "),t("blockquote",[t("p",[e._v("指定了 flex 元素在主轴方向上的初始大小。如果不使用  "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("box-sizing")]),t("OutboundLink")],1),e._v(" 改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。")])]),e._v(" "),t("p",[t("code",[e._v("flex-basis")]),e._v("比"),t("code",[e._v("width")]),e._v("和"),t("code",[e._v("height")]),e._v("拥有更高的优先级")])])}),[],!1,null,null,null);r.default=n.exports}}]);