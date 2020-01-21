(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{278:function(e,n,t){"use strict";t.r(n);var r=t(2),s=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"打包工具运行原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包工具运行原理"}},[e._v("#")]),e._v(" 打包工具运行原理")]),e._v(" "),t("p",[e._v("日期：2018-7-12")]),e._v(" "),t("h3",{attrs:{id:"核心原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心原理"}},[e._v("#")]),e._v(" 核心原理")]),e._v(" "),t("blockquote",[t("p",[e._v("打包工具会从一个入口文件开始，分析它里面的依赖，并且再进一步地分析依赖中的依赖，不断重复这个过程，直到把这些依赖关系理清挑明为止。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* name.js */\n\nexport const name = 'World'\n/* message.js */\n\nimport { name } from './name.js'\n\nexport default `Hello ${name}!`\n/* entry.js */\n\nimport hello from './hello.js'\n\nconsole.log(hello)\n")])])]),t("p",[e._v("它们的依赖关系非常简单：  "),t("strong",[e._v("entry.js")]),e._v(" "),t("strong",[e._v("→")]),e._v(" "),t("strong",[e._v("hello.js")]),e._v(" "),t("strong",[e._v("→")]),e._v(" "),t("strong",[e._v("name.js")]),e._v("，其中"),t("strong",[e._v("entry.js")]),e._v(" 将会成为打包工具的入口文件。")]),e._v(" "),t("h3",{attrs:{id:"依赖关系解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系解析"}},[e._v("#")]),e._v(" 依赖关系解析")]),e._v(" "),t("p",[e._v("新建一个js文件，命名为"),t("strong",[e._v("minipack.js")]),e._v("，首先引入必要的工具。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* minipack.js */\n\nconst fs = require('fs')\nconst path = require('path')\n\n//将js文件内容转化AST语法树\nconst babylon = require('@babel/parser')\n\n//可以遍历AST语法树，获取其中的依赖关系\nconst traverse = require('@babel/traverse').default\n\n//将es6语法转化成es5语法\n//还需要配置.babelrc文件，设置转化规则\nconst { transformFromAst } = require('babel-core')\n")])])]),t("h4",{attrs:{id:"文件解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件解析"}},[e._v("#")]),e._v(" 文件解析")]),e._v(" "),t("p",[t("code",[e._v(".babelrc")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "presets": [\n        ["env", {\n            "modules": false,\n            "targets": {\n                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n            }\n        }],\n        "stage-2"\n    ]\n}\n')])])]),t("p",[t("code",[e._v("createAsset")]),e._v("的作用")]),e._v(" "),t("ol",[t("li",[e._v("读取文件内容转化为AST语法树")]),e._v(" "),t("li",[e._v("遍历AST语法树获取依赖关系")]),e._v(" "),t("li",[e._v("将es6语法转化成es5")]),e._v(" "),t("li",[e._v("返回依赖关系和转换后的代码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let ID = 0\n\nfunction createAsset(filename) {\n    // 读取文件内容\n    const content = fs.readFileSync(filename, 'utf-8')\n\n    // 转化成AST\n    const ast = babylon.parse(content, {\n        sourceType: 'module',\n    });\n\n    // 该文件的所有依赖\n    const dependencies = []\n\n    // 获取依赖声明\n    traverse(ast, {\n        ImportDeclaration: ({\n            node\n        }) => {\n            dependencies.push(node.source.value);\n        }\n    })\n\n    // 转化ES6语法到ES5\n    const {\n        code\n    } = transformFromAst(ast, null, {\n        presets: ['env'],\n    })\n    console.log(code);\n\n\n    // 分配ID\n    const id = ID++\n\n        // 返回这个模块\n        return {\n            id,\n            filename,\n            dependencies,\n            code,\n        }\n}\n\n")])])]),t("p",[e._v("输入如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n\t"id": 0,\n\t"filename": "./entry.js",\n\t"dependencies": ["./hello.js"],\n\t"code": "\\"use strict\\";\\n\\nvar _hello = require(\\"./hello.js\\");\\n\\nvar _hello2 = _interopRequireDefault(_hello);\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\\n\\nvar a = function a() {\\n  console.log(123123);\\n};\\n\\nconsole.log(_hello2.default);"\n}\n')])])]),t("h4",{attrs:{id:"依赖关系整合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系整合"}},[e._v("#")]),e._v(" 依赖关系整合")]),e._v(" "),t("p",[t("code",[e._v("createGraph")]),e._v("的作用：")]),e._v(" "),t("ol",[t("li",[e._v("获取入口文件的依赖关系和编译后的代码、并将其写入一个"),t("strong",[e._v("queue")]),e._v("（被依赖的模块数组）")]),e._v(" "),t("li",[e._v("遍历"),t("strong",[e._v("queue")]),e._v("，将每个模块所依赖的模块的文件路径和"),t("strong",[e._v("id")]),e._v("写入到"),t("strong",[e._v("mapping")]),e._v("依赖关系表中")]),e._v(" "),t("li",[e._v("返回这个被依赖的模块数组")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function createGraph(entry) {\n    // 解析传入的文件为模块\n    const mainAsset = createAsset(entry)\n\n    // 维护一个数组，传入第一个模块\n    const queue = [mainAsset]\n\n    // 遍历数组，分析每一个模块是否还有其它依赖，若有则把依赖模块推进数组\n    for (const asset of queue) {\n        asset.mapping = {}\n        // 由于依赖的路径是相对于当前模块，所以要把相对路径都处理为绝对路径\n        const dirname = path.dirname(asset.filename)\n        // 遍历当前模块的依赖项并继续分析\n        asset.dependencies.forEach(relativePath => {\n            // 构造绝对路径\n            const absolutePath = path.join(dirname, relativePath)\n            // 生成依赖模块\n            const child = createAsset(absolutePath)\n            // 把依赖关系写入模块的mapping当中\n            asset.mapping[relativePath] = child.id\n            // 把这个依赖模块也推入到queue数组中，以便继续对其进行以来分析\n            queue.push(child)\n        })\n    }\n\n    // 最后返回这个queue，也就是依赖关系图集\n    return queue\n}\n")])])]),t("p",[e._v("输入如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[{\n\t"id": 0,\n\t"filename": "./entry.js",\n\t"dependencies": ["./hello.js"],\n\t"code": "\\"use strict\\";\\n\\nvar _hello = require(\\"./hello.js\\");\\n\\nvar _hello2 = _interopRequireDefault(_hello);\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\\n\\nvar a = function a() {\\n  console.log(123123);\\n};\\n\\nconsole.log(_hello2.default);",\n\t"mapping": {\n\t\t"./hello.js": 1\n\t}\n}, {\n\t"id": 1,\n\t"filename": "hello.js",\n\t"dependencies": ["./name.js"],\n\t"code": "\\"use strict\\";\\n\\nObject.defineProperty(exports, \\"__esModule\\", {\\n  value: true\\n});\\n\\nvar _name = require(\\"./name.js\\");\\n\\nexports.default = \\"hello \\" + _name.name;",\n\t"mapping": {\n\t\t"./name.js": 2\n\t}\n}, {\n\t"id": 2,\n\t"filename": "name.js",\n\t"dependencies": [],\n\t"code": "\\"use strict\\";\\n\\nObject.defineProperty(exports, \\"__esModule\\", {\\n  value: true\\n});\\nvar name = exports.name = \'shimingw\';",\n\t"mapping": {}\n}]\n')])])]),t("h3",{attrs:{id:"打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[e._v("#")]),e._v(" 打包")]),e._v(" "),t("h4",{attrs:{id:"commonjs规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范"}},[e._v("#")]),e._v(" commonJs规范")]),e._v(" "),t("p",[e._v("打包时，使用到了commonJs规范的概念，这里简单介绍一下。")]),e._v(" "),t("ol",[t("li",[e._v("先使用"),t("code",[e._v("require.register")]),e._v("注册文件路径和对应方法之间的映射关系保存在"),t("strong",[e._v("require.modules")]),e._v("中")]),e._v(" "),t("li",[e._v("再使用"),t("code",[e._v("require")]),e._v("方法，通过传入的路径去"),t("strong",[e._v("require.modules")]),e._v("中取出对应的方法")]),e._v(" "),t("li",[e._v("使用"),t("code",[e._v("require")]),e._v("获取方法的同时，会触发依赖模块中的"),t("code",[e._v("require")]),e._v("方法，这样就实现了模块的加载")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function require(p) {\n  var path = require.resolve(p);  //匹配模块路径\n  var mod = require.modules[path];  //找到模块挂在在modules下的方法，mod是一个function\n  if (!mod) throw new Error('failed to require \"' + p + '\"');\n  if (!mod.exports) {\n    mod.exports = {};\n    // 执行完以下方法，可以获取模块导出内容，将导出内容挂在到mod.exports上\n    mod.call(mod.exports, mod, mod.exports, require.relative(path));\n  }\n  return mod.exports;\n}\n\nrequire.modules = {};\n\n//返回文件的真确路径，匹配时可以匹配目录下的index.js文件，可以自动补全.js\nrequire.resolve = function (path) {\n  var orig = path;\n  var reg = path + '.js';\n  var index = path + '/index.js';\n  return require.modules[reg] && reg ||\n    require.modules[index] && index ||\n    orig;\n};\n\n//将文件路径和其所包含的方法通过require对象下的modules进行绑定\nrequire.register = function (path, fn) {\n  require.modules[path] = fn;\n};\n\n// 根据父模块的位置去查找依赖模块的位置\nrequire.relative = function (parent) {\n  return function (p) {\n    // 如果不是相对路径就直接返回\n    if ('.' != p.charAt(0)) return require(p);\n    var path = parent.split('/');\n    var segs = p.split('/');\n    path.pop();\n\n    for (var i = 0; i < segs.length; i++) {\n      var seg = segs[i];\n      if ('..' == seg) path.pop();\n      else if ('.' != seg) path.push(seg);\n    }\n    return require(path.join('/'));\n  };\n};\n")])])]),t("p",[e._v("example：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('require.register("./main.js", function (module, exports, require) {\n    //在这里也可以require其他模块\n    exports.name = \'xiha\'\n});\n\nrequire.register("./foo.js", function (module, exports, require) {\n    // 在这里也可以require其他模块\n    let main = require(\'./main.js\')\n    exports.say = function (x) {\n        console.log(123, x);\n    };\n    exports.myName = () => {\n        console.log(main.name);\n    }\n});\nvar foo = require("./foo.js");\nfoo.myName();\n')])])]),t("h4",{attrs:{id:"打包文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包文件"}},[e._v("#")]),e._v(" 打包文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function bundle(graph) {\n    let modules = ''\n\n    graph.forEach(mod => {\n        modules += `${mod.id}: [\n        function (require, module, exports) { ${mod.code} },      \n        ${JSON.stringify(mod.mapping)},\n      ],`\n    })\n\n    const result = `\n      (function(modules) {\n        function require(id) {\n          const [fn, mapping] = modules[id];\n  \n          function localRequire(name) {\n            return require(mapping[name]);\n          }\n  \n          const module = { exports : {} };\n  \n          fn(localRequire, module, module.exports);\n  \n          return module.exports;\n        }\n  \n        require(0);\n      })({${modules}})\n    `\n    // require(0); 从入口文件开始执行依赖\n    return result\n}\n\nlet resultJs = bundle(createGraph('./example/entry.js'));\nlet fsPath = path.join(__dirname, './hello.js');\nfs.writeFile(fsPath, resultJs, (err) => {\n    if (err) throw err;\n    console.log('打包成功！~~~~~~~~~~~')\n})\n")])])]),t("p",[e._v("打包后的文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('(function (modules) {\n  function require(id) {\n    const [fn, mapping] = modules[id];\n\n    function localRequire(name) {\n      return require(mapping[name]);\n    }\n\n    const module = {\n      exports: {}\n    };\n\n    fn(localRequire, module, module.exports);\n\n    return module.exports;\n  }\n\n  require(0);\n})({\n  0: [\n    function (require, module, exports) {\n      "use strict";\n\n      var _message = require("./message.js");\n\n      var _message2 = _interopRequireDefault(_message);\n\n      function _interopRequireDefault(obj) {\n        return obj && obj.__esModule ? obj : {\n          default: obj\n        };\n      }\n\n      console.log(_message2.default);\n    },\n    {\n      "./message.js": 1\n    },\n  ],\n  1: [\n    function (require, module, exports) {\n      "use strict";\n\n      Object.defineProperty(exports, "__esModule", {\n        value: true\n      });\n\n      var _name = require("./name.js");\n\n      exports.default = "Hello " + _name.name + "!";\n    },\n    {\n      "./name.js": 2\n    },\n  ],\n  2: [\n    function (require, module, exports) {\n      "use strict";\n\n      Object.defineProperty(exports, "__esModule", {\n        value: true\n      });\n      var name = exports.name = \'shimingwen\';\n    },\n    {},\n  ],\n})\n')])])]),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("模块化打包解决的问题")]),e._v(" "),t("ol",[t("li",[e._v("使单一文件的功能明确，便于开发和维护")]),e._v(" "),t("li",[e._v("代码编译，使代码的兼容性更好。")])]),e._v(" "),t("p",[e._v("tip：按需加载如何实现")])])}),[],!1,null,null,null);n.default=s.exports}}]);