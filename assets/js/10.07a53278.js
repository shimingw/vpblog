(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{267:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[t._v("#")]),t._v(" 表单")]),t._v(" "),a("h3",{attrs:{id:"受控组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#受控组件"}},[t._v("#")]),t._v(" 受控组件")]),t._v(" "),a("p",[t._v("表单中的组件显示绑定value属性，组件中状态的变化，由react组件触发change方法，最终触发本组件的setState方法，进行状态的更新\n说白了，表单中用户每个一个输入的值，都会经过程序员写的方法，所以是受控组件")]),t._v(" "),a("h3",{attrs:{id:"非受控组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非受控组件"}},[t._v("#")]),t._v(" 非受控组件")]),t._v(" "),a("p",[t._v("表单中输入的数据都由dom处理。\n用户输入的值是不可控的，用户可以随意输入任何值。")]),t._v(" "),a("h2",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),a("p",[t._v("两种使用方式")]),t._v(" "),a("blockquote",[a("p",[t._v("函数式组件无法使用"),a("code",[t._v("ref")]),t._v("属性，只有实例化组件和"),a("strong",[t._v("html")]),t._v("组件可以使用"),a("code",[t._v("ref")])])]),t._v(" "),a("ol",[a("li",[t._v("类似"),a("strong",[t._v("vue")]),t._v("的用法")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("为组件定义ref名称\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Card")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" \n调用组件实例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在组件实例化时定义")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Card")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n调用组件实例\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current\n")])])]),a("h2",{attrs:{id:"组合vs继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合vs继承"}},[t._v("#")]),t._v(" 组合vs继承")]),t._v(" "),a("ol",[a("li",[t._v("react组件间的复用都采用组合的形式")]),t._v(" "),a("li",[t._v("如果组件间有函数（UI无关的功能）存在复用，建议单独提取成一个function进行复用")])]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("h3",{attrs:{id:"purecomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent"}},[t._v("#")]),t._v(" PureComponent")]),t._v(" "),a("p",[a("code",[t._v("PureComponent")]),t._v("会为"),a("code",[t._v("shouldComponentUpdate")]),t._v("方法提供一个浅比较方法。如果数据没有发生变化，则不会触发render方法重新渲染。\n但是如果传入的是一个对象，则每次都不会渲染，因为对象的比较是指针。")]),t._v(" "),a("p",[t._v("所以不使用突变改变对象，使用concat，Object.assign，展开运算符等能返回一个新对象的方法进行赋值修改，或者可以使用"),a("code",[t._v("immutable")]),t._v("与"),a("code",[t._v("PureComponent")]),t._v("结合使用。")]),t._v(" "),a("h2",{attrs:{id:"diff-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff-keys"}},[t._v("#")]),t._v(" diff-keys")]),t._v(" "),a("p",[t._v("当react渲染列表时，需要为每一个相同的子组件添加一个key属性。\n如果没有key属性的话，在列表的头部插入一个节点，那么react会认为整个列表都需要重新渲染，其实只需要在头部渲染那个新增的节点")]),t._v(" "),a("p",[t._v("增加了key属性以后，react会使用key来匹配原始树的节点，如果原始的key还存在react并不会销毁该组件，只会移动或者修改")]),t._v(" "),a("p",[t._v("key必须是唯一的")]),t._v(" "),a("p",[t._v("必须要保证每一条数据的key都是唯一的，因为如果不唯一，可能会导致子组件数据更新了，然后触发componentWillReceiveProps方法去更新其子组件\n"),a("strong",[t._v("但是如果其子组件的状态是通过子组件自身的state维护，而非通过props进行维护，例如为非受控组件，就会导致该组件无法更新的情况")])]),t._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" context")]),t._v(" "),a("p",[t._v("原来嵌套组件传值通过props一层一层传进去")]),t._v(" "),a("p",[t._v("现在通过context可以解决这种高度耦合的问题")]),t._v(" "),a("p",[a("code",[t._v("const {Provider, Consumer} = React.createContext(defaultValue);")]),t._v("\n父组件设为"),a("code",[t._v("<Provider value={/* some value */}>")]),t._v("可以用来传递参数，子组件设为"),a("code",[t._v("<Consumer> {value => /* render something based on the context value */} </Consumer>")]),t._v("可以用来接收参数")]),t._v(" "),a("h2",{attrs:{id:"portals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portals"}},[t._v("#")]),t._v(" Portals")]),t._v(" "),a("p",[a("code",[t._v("ReactDOM.createPortal(child, container)")]),t._v("\n可以将子元素，渲染到指定dom节点，而不是默认的父节点中。")]),t._v(" "),a("p",[t._v("虽然不在父节点中，但是父节点可以监听到改元素的冒泡时间")]),t._v(" "),a("h2",{attrs:{id:"hoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hoc"}},[t._v("#")]),t._v(" HOC")]),t._v(" "),a("p",[t._v("高阶组件，用来将一些组件中相同的功能抽象出来，封装成一个函数，不同的部分作为组件")]),t._v(" "),a("p",[t._v("当使用高阶组件时，如果直接在高阶组件上使用ref，获取到的值，为高阶组件的ref而不是我们想获取到的，被封装的组件的ref。")]),t._v(" "),a("h2",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),a("p",[t._v("什么是hook？")]),t._v(" "),a("p",[t._v("Hook是一种特殊功能，可让您“挂钩”React功能。例如，useState是一个Hook，它允许您将React状态添加到功能组件。我们稍后会学习其他的Hook。")]),t._v(" "),a("p",[t._v("我什么时候使用hook？")]),t._v(" "),a("p",[t._v("如果你编写一个函数组件并意识到你需要为它添加一些状态，那么之前你必须将它转换为一个类。**现在，您可以在现有功能组件中使用Hook。**我们现在要做到这一点！")]),t._v(" "),a("h3",{attrs:{id:"usestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[t._v("#")]),t._v(" useState")]),t._v(" "),a("p",[t._v("使无状态组件可以使用类的功能\n"),a("code",[t._v("const [count, setCount] = useState(0);")]),t._v("返回当前状态和更新它的函数")]),t._v(" "),a("h3",{attrs:{id:"useeffect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useeffect"}},[t._v("#")]),t._v(" useEffect")]),t._v(" "),a("p",[t._v("使无状态组件可以使用声明周期功能")]),t._v(" "),a("p",[t._v("可以取代下面这三个生命周期的功能\ncomponentDidMount, componentDidUpdate, and componentWillUnmount")]),t._v(" "),a("h4",{attrs:{id:"组件更新时触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件更新时触发"}},[t._v("#")]),t._v(" 组件更新时触发")]),t._v(" "),a("p",[t._v("正常情况下，初始化会触发一次"),a("code",[t._v("useEffect")]),t._v("，只要组件更新就会触发"),a("code",[t._v("useEffect")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("  React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update the document title using the browser API")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("You clicked ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" times")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"特定值发生变化时触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特定值发生变化时触发"}},[t._v("#")]),t._v(" 特定值发生变化时触发")]),t._v(" "),a("p",[t._v("当不需要每次组件状态更新都触发时，在尾部传入数组可以设置需要监听的值")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("You clicked ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" times")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"仅初始化时触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅初始化时触发"}},[t._v("#")]),t._v(" 仅初始化时触发")]),t._v(" "),a("p",[t._v("如果数组中什么值都不传入，那就只会在初始化时触发一次")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("You clicked ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" times")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"仅在组件销毁时触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅在组件销毁时触发"}},[t._v("#")]),t._v(" 仅在组件销毁时触发")]),t._v(" "),a("p",[t._v("数组中不传入任何值，并且在钩子中return一个函数")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"自定义hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义hook"}},[t._v("#")]),t._v(" 自定义hook")]),t._v(" "),a("blockquote",[a("p",[t._v("自定义挂钩是一种自然遵循Hooks设计的约定，而不是React功能")])]),t._v(" "),a("p",[t._v("将hook封装在一个函数中，使其具有复用性")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useEffect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useFriendStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("friendID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isOnline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setIsOnline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleStatusChange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setIsOnline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isOnline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    ChatAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeToFriendStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("friendID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleStatusChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ChatAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribeFromFriendStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("friendID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleStatusChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isOnline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"钩子使用注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#钩子使用注意事项"}},[t._v("#")]),t._v(" 钩子使用注意事项")]),t._v(" "),a("p",[t._v("在组件顶层使用useState声明钩子，不要在if语句中声明")]),t._v(" "),a("h2",{attrs:{id:"prop-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop-types"}},[t._v("#")]),t._v(" prop-types")]),t._v(" "),a("p",[t._v("用来设置组件的接受的props，以及一些限制")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  completed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" redux")]),t._v(" "),a("h3",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),a("blockquote",[a("p",[t._v("定义了动作的类型，以及每个动作所需要的参数")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTodo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD_TODO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"reducers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reducers"}},[t._v("#")]),t._v(" reducers")]),t._v(" "),a("blockquote",[a("p",[t._v("使用switch...case匹配action类型的动作，修改相对应的state")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visibilityFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initialState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET_VISIBILITY_FILTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回的值即为更新的后的state")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用"),a("code",[t._v("combineReducers")]),t._v("封装多个"),a("code",[t._v("reducer")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" todoApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combineReducers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  visibilityFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  articleList\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" store")]),t._v(" "),a("p",[t._v("在前面的章节中，我们学会了使用 "),a("code",[t._v("action")]),t._v(" 来描述“发生了什么”，和使用 "),a("code",[t._v("reducers")]),t._v(" 来根据 "),a("code",[t._v("action")]),t._v(" 更新 "),a("code",[t._v("state")]),t._v(" 的用法。")]),t._v(" "),a("p",[t._v("Store 就是把它们联系到一起的对象。Store 有以下职责：")]),t._v(" "),a("ul",[a("li",[t._v("维持应用的 "),a("code",[t._v("state")]),t._v("；")]),t._v(" "),a("li",[t._v("提供 "),a("code",[t._v("getState()")]),t._v(" 方法获取 "),a("code",[t._v("state")]),t._v("；")]),t._v(" "),a("li",[t._v("提供 "),a("code",[t._v("dispatch(action)")]),t._v(" 方法更新 "),a("code",[t._v("state")]),t._v("；")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("subscribe(listener)")]),t._v(" 注册监听器;")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("subscribe(listener)")]),t._v(" 返回的函数注销监听器。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);