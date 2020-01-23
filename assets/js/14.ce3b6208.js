(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{255:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" redux")]),t._v(" "),a("p",[t._v("日期：2018-8-11")]),t._v(" "),a("h2",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" Provider")]),t._v(" "),a("ul",[a("li",[t._v("在原应用组件上包裹一层，使原来整个应用成为Provider的子组件")]),t._v(" "),a("li",[t._v("接收Redux的store作为props，通过context对象传递给子孙组件上的connect")]),t._v(" "),a("li",[t._v("使子孙组件上的connect可以直接访问到context对象中的store")])]),t._v(" "),a("blockquote",[a("p",[t._v("context可以使子孙组件直接获取父级组件中的数据或方法，而无需一层一层通过props向下传递。")]),t._v(" "),a("p",[t._v("context对象相当于一个独立的空间，父组件通过getChildContext()向该空间内写值")]),t._v(" "),a("p",[t._v("定义了contextTypes验证的子孙组件可以通过this.context.xxx，从context对象中读取xxx字段的值。")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChildContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("componentWillReceiveProps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nextProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nextStore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextProps\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" nextStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warnAboutReceivingStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" storeShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childContextTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" storeShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("["),a("code",[t._v("mapStateToProps(state, [ownProps]): stateProps")]),t._v("] ("),a("em",[t._v("Function")]),t._v("): 如果定义该参数，组件将会监听 Redux store 的变化。")]),t._v(" "),a("p",[t._v("任何时候，只要 Redux store 发生改变，"),a("code",[t._v("mapStateToProps")]),t._v(" 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。如果你省略了这个参数，你的组件将不会监听 Redux store。")]),t._v(" "),a("p",[t._v("如果指定了该回调函数中的第二个参数 "),a("code",[t._v("ownProps")]),t._v("，则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，"),a("code",[t._v("mapStateToProps")]),t._v(" 也会被调用（例如，当 props 接收到来自父组件一个小小的改动，那么你所使用的 ownProps 参数，mapStateToProps 都会被重新计算）。")]),t._v(" "),a("h2",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" Action")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://www.redux.org.cn/docs/basics/Actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("action"),a("OutboundLink")],1),t._v(" 来描述“发生了什么”")]),t._v(" "),a("p",[a("strong",[t._v("Action")]),t._v(" 是把数据从应用传到 store 的有效载荷。它是 store 数据的"),a("strong",[t._v("唯一")]),t._v("来源。")]),t._v(" "),a("p",[t._v("一般来说你会通过 "),a("a",{attrs:{href:"http://www.redux.org.cn/docs/api/Store.html#dispatch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("store.dispatch()")]),a("OutboundLink")],1),t._v(" 将 action 传到 store。")]),t._v(" "),a("p",[t._v("vuex中省去了action这层，将action和reducer合并成了mutation")])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD_TODO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD_TODO'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD_TODO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Build my first Redux app'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"reducer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reducer"}},[t._v("#")]),t._v(" Reducer")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://www.redux.org.cn/docs/basics/Reducers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reducers"),a("OutboundLink")],1),t._v(" 来根据 action 更新 state 的用法。")]),t._v(" "),a("p",[t._v("根据传入的action，执行预设好reducer，修改store值，类似vuex的mutation")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("定义了一个todoApp的reducer\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todoApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initialState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visibilityFilter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("visibilityFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibilityFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    todos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncombineReducers利用柯里化函数的方法，预设了一些参数\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * combineReducers 工具类来做上面 todoApp 做的事情\n * 这样就能消灭一些样板代码了。有了它，可以这样重构 todoApp\n * combineReducers 函数的作用可以参照下面两个方法\n * const reducer = combineReducers({\n    a: doSomethingWithA,\n    b: processB,\n    c: c\n  })\n  function reducer(state = {}, action) {\n  return {\n    a: doSomethingWithA(state.a, action),\n    b: processB(state.b, action),\n    c: c(state.c, action)\n  }\n}\n*/")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" todoApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combineReducers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  visibilityFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  todos\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" Store")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Store")]),t._v(" 就是把action和reducer联系到一起的对象")]),t._v(" "),a("p",[a("strong",[t._v("Redux 应用只有一个单一的 store")]),t._v("，当需要拆分数据处理逻辑时，你应该使用 "),a("a",{attrs:{href:"http://www.redux.org.cn/docs/basics/Reducers.html#splitting-reducers",target:"_blank",rel:"noopener noreferrer"}},[t._v("reducer 组合"),a("OutboundLink")],1),t._v("而不是创建多个 store。")])]),t._v(" "),a("ul",[a("li",[t._v("维持应用的 state；")]),t._v(" "),a("li",[t._v("提供 "),a("a",{attrs:{href:"http://www.redux.org.cn/docs/api/Store.html#getState",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("getState()")]),a("OutboundLink")],1),t._v(" 方法获取 state；")]),t._v(" "),a("li",[t._v("提供 "),a("a",{attrs:{href:"http://www.redux.org.cn/docs/api/Store.html#dispatch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("dispatch(action)")]),a("OutboundLink")],1),t._v(" 方法更新 state；")]),t._v(" "),a("li",[t._v("通过 "),a("a",{attrs:{href:"http://www.redux.org.cn/docs/api/Store.html#subscribe",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("subscribe(listener)")]),a("OutboundLink")],1),t._v(" 注册监听器;")]),t._v(" "),a("li",[t._v("通过 "),a("a",{attrs:{href:"http://www.redux.org.cn/docs/api/Store.html#subscribe",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("subscribe(listener)")]),a("OutboundLink")],1),t._v(" 返回的函数注销监听器。")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("action和reducer创建好后\n使用createStore方法生成store通过provider组件传给整个应用\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" todoApp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./reducers'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("todoApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"mapstatetoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapstatetoprops"}},[t._v("#")]),t._v(" mapStateToProps")]),t._v(" "),a("blockquote",[a("p",[t._v("在组件中注册获取store中的值得方法")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mapStateToProps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    articleList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("articleList\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"mapdispatchtoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapdispatchtoprops"}},[t._v("#")]),t._v(" mapDispatchToProps")]),t._v(" "),a("blockquote",[a("p",[t._v("在组件中注册触发reducer的方法")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mapDispatchToProps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dispatch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addArticleList")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addArticleList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[t._v("#")]),t._v(" connect")]),t._v(" "),a("blockquote",[a("p",[t._v("将组件与redux结合的方法")]),t._v(" "),a("p",[t._v("使组件可以访问和修改store中的值")])]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  mapStateToProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mapDispatchToProps\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ArticleList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);