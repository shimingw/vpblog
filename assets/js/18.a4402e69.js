(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{252:function(n,a,r){"use strict";r.r(a);var t=r(2),e=Object(t.a)({},(function(){var n=this,a=n.$createElement,r=n._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("p",[n._v("#函数式编程(2018-7-2)")]),n._v(" "),r("h2",{attrs:{id:"柯里函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#柯里函数"}},[n._v("#")]),n._v(" 柯里函数")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("最简单的柯里化函数\nvar curry = function (x, y) {\n            return function (y) {\n                return x+y;\n            }\n        }\nvar curry = (x, y) => (y) => x + y;\nadd2 = curry(2);\nconsole.log(add2(1));\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('//柯里函数实质：传递给函数一部分参数来调用它，让它返回一个函数来处理剩余参数\nfunction curry(fx) {\n    //要进行柯里化的函数的形参数量\n    var arity = fx.length\n    return function f1() {\n        //第一次传入的参数数量\n        var args = [].slice.call(arguments, 0)\n        //若传入的参数数量大于等于形参数量,代表现在万事俱备（参数齐全了），可以直接执行函数了,直接将参数全部传入fx函数中，并执行它\n        if (args.length >= arity) {\n            return fx.apply(null, args)\n        } else {\n            var f2 = function() {\n                //如果只传入了一部分参数\n                var args2 = [].slice.call(arguments, 0)\n                //判断是否所有参数都传完了，如果没有，不断concat新传的参数，然后执行f1函数\n                return f1.apply(null, args.concat(args2))\n            }\n            return f2\n        }\n\n    }\n}\n\n// 返回的f1根据传入参数不同返回的结果也不同\n// 如果传入参数等于该函数所需要的参数，则立即执行curry所接受的函数，并返回结果\n// 如果传入参数少于该函数所需要的参数，则返回一个还能继续接受参数并将参数传给f1的函数。\n// 知道传入参数满足函数所需参数才执行\nvar match = curry(function(what, str) {\n    return str.match(what);\n});\n\nvar filter = curry(function(f, ary) {\n    return ary.filter(f);\n});\nmatch(/\\s+/g, "hello world");\n\n// var hasSpaces = match(/\\s+/g);  //这个一个传入字符串可以正则匹配返回结果的函数\n// hasSpaces("hello world");\n// var findSpaces = filter(hasSpaces);\n// findSpaces(["tori_spelling", "tori amos"]);\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("// 这是一个写死的curry函数\nvar curry = function (x, y) {\n    return function (y) {\n        return x+y;\n    }\n}\nvar curry = (x, y) => (y) => x + y;\nadd2 = curry(2);\nconsole.log(add2(1));\n\nvar curry = function (fn) {\n    // 使返回的函数可以只接收一个函数\n    // curry封装的函数一共所需要的参数个数\n    let needArgLen = fn.length;\n    console.log('needArgLen',needArgLen);\n    \n    return function f1() {\n        let arg = Array.from(arguments)\n        let argLen = arg.length;\n        console.log('arg', arg);\n        // 如果传入参数个数满足fn函数所需个数立即执行fn\n        if (argLen >= needArgLen) {\n            return fn.apply(null, arg);\n        } else {\n            //如果传入参数个数不满足fn函数所需个数则返回一个新的fn函数接收剩余参数\n            let fx = function () {\n                let nextArg = Array.from(arguments);\n                console.log('nextArg', nextArg);\n                console.log('concat', arg.concat(nextArg));\n                // 如果传入参数个数不够则继续调用f1不断concat\n                return f1.apply(null, arg.concat(nextArg));\n            }\n            return fx;\n        }\n    };\n}\n\n// 先限定正则规则，再传入需要匹配的字符串\nvar match = curry(function (what, str) {\n    return str.match(what);\n});\n\n// filter 函数会给f传入三个参数当前的value、key、完整的数组\n// 先限定过滤规则,再传入数组\nvar filter = curry(function (f, ary) {\n    return ary.filter(f);\n});\n// 两个缺少参数的函数\nvar hasH = match(/\\h+/g); //缺少待验证的字符串\nvar findSpaces = filter(hasH);  //缺少待过滤的数组\n// findSpaces(['qweqwe', 'asdasdh'])   //数组和过滤方法\n\n\n\n")])])]),r("h2",{attrs:{id:"functor、monad"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functor、monad"}},[n._v("#")]),n._v(" functor、monad")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("functor 是一个普通的带of和map的容器\nmonad\n\nMaybe = function (x) {\n    this.__value = x;\n};\n\nMaybe.of = function (x) {\n    return new Maybe(x);\n};\n\nMaybe.prototype.isNothing = function (f) {\n    return (this.__value === null || this.__value === undefined);\n};\n\nMaybe.prototype.map = function (f) {\n    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));\n};\n\nMaybe.prototype.chain = function (f) {\n    return this.map(f).join();\n};\n\nMaybe.prototype.ap = function (other) {\n    return this.isNothing() ? Maybe.of(null) : other.map(this.__value);\n};\n\nMaybe.prototype.join = function () {\n    return this.isNothing() ? Maybe.of(null) : this.__value;\n}\n\nMaybe.prototype.inspect = function () {\n    return 'Maybe(' + inspect(this.__value) + ')';\n}\n\n1、使用Maybe.of创建一个容器\nMaybe.of(\"tetris\")\n2、fn中的方法可以接受maybe中this.__value的值，可以做到链式操作\nMaybe.map(fn)\nMaybe.of(\"tetris\").map(_.concat(' master'))\n//Maybe( mastertetris)\n\n\n\n")])])]),r("h2",{attrs:{id:"chain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#chain"}},[n._v("#")]),n._v(" chain")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v("map会使返回值嵌套一层，join会返回当前值得this.__value\n我们总是在紧跟着 map 的后面调用 join。让我们把这个行为抽象到一个叫做 chain 的函数里\nvar chain = curry(function(f, m){\n  return m.map(f).join(); // 或者 compose(join, map(f))(m)\n});\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);