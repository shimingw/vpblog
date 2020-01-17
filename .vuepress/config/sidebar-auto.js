const Git实战手册 = [
  ['01.标签应用和版本管理.md', '标签应用和版本管理'],
  ['02.批量修改log中的提交信息.md', '批量修改log中的提交信息'],
  ['03.stash解惑与妙用.md', 'stash解惑与妙用']
]

const NodeJS = [
  {
    title: 'Koa',
    collapsable: false,
    children: [
      ['01.Koa/01.koa源码：核心库原理.md', 'koa源码：核心库原理'],
      ['01.Koa/02.koa源码：架构设计.md', 'koa源码：架构设计'],
      ['01.Koa/03.koa源码：手动实现.md', 'koa源码：手动实现']
    ]
  },
  {
    title: '命令行',
    collapsable: false,
    children: [['02.命令行/01.玩转Nodejs命令行.md', '玩转Nodejs命令行']]
  },
  {
    title: '测试',
    collapsable: false,
    children: [
      [
        '03.测试/01.Jest实战：单元测试与服务测试.md',
        'Jest实战：单元测试与服务测试'
      ],
      [
        '03.测试/02.Jest进阶：接入ts、集成测试与覆盖率统计.md',
        'Jest进阶：接入ts、集成测试与覆盖率统计'
      ]
    ]
  },
  {
    title: 'Serverless',
    collapsable: false,
    children: [
      [
        '04.Serverless/01.基于实时数据库-在线对战五子棋小游戏.md',
        '基于实时数据库-在线对战五子棋小游戏'
      ],
      [
        '04.Serverless/02.基于ServerLess的极简网页计数器：源码分析与最佳实践.md',
        '基于ServerLess的极简网页计数器：源码分析与最佳实践'
      ]
    ]
  },
  {
    title: '更多',
    collapsable: false,
    children: [
      ['05.更多/01.NodeJS实现简易区块链.md', 'NodeJS实现简易区块链'],
      [
        '05.更多/02.负载均衡：轮询调度算法实现.md',
        '负载均衡：轮询调度算法实现'
      ],
      ['05.更多/03.VemoJS源码拆解.md', 'VemoJS源码拆解'],
      [
        '05.更多/04.NodeJS是如何监听文件的变化.md',
        'NodeJS是如何监听文件的变化'
      ],
      ['05.更多/05.日志库的实现机制与优化方法.md', '日志库的实现机制与优化方法']
    ]
  }
]

const ReactJS = [
  ['01.React组件通信解决方案.md', 'React组件通信解决方案'],
  ['02.ReactRouter进阶技巧.md', 'ReactRouter进阶技巧'],
  [
    '03.一文彻底搞懂ReactHooks的原理和实现.md',
    '一文彻底搞懂ReactHooks的原理和实现'
  ],
  ['04.一文说清VirtualDOM的含义与实现.md', '一文说清VirtualDOM的含义与实现']
]

const UI设计 = [
  {
    title: 'CSS3',
    collapsable: false,
    children: [
      [
        '01.CSS3/01.border-sizing属性详解和应用.md',
        'border-sizing属性详解和应用'
      ],
      ['01.CSS3/02.Flex上手与实战.md', 'Flex上手与实战'],
      ['01.CSS3/03.你了解css3的nth-child吗.md', '你了解css3的nth-child吗']
    ]
  },
  {
    title: 'SCSS',
    collapsable: false,
    children: [
      ['02.SCSS/01.基础：配置与运行.md', '基础：配置与运行'],
      [
        '02.SCSS/02.进阶：继承、占位符和混合宏.md',
        '进阶：继承、占位符和混合宏'
      ],
      ['02.SCSS/03.译文：逐步替换Sass.md', '译文：逐步替换Sass']
    ]
  },
  {
    title: '动画设计',
    collapsable: false,
    children: [
      ['03.动画设计/01.字体特效.md', '字体特效'],
      ['03.动画设计/02.输入框特效.md', '输入框特效'],
      ['03.动画设计/03.按钮特效.md', '按钮特效'],
      ['03.动画设计/04.Loader特效-基础篇.md', 'Loader特效-基础篇'],
      ['03.动画设计/05.Loader特效-进阶篇.md', 'Loader特效-进阶篇']
    ]
  },
  {
    title: '项目实战',
    collapsable: false,
    children: [['04.项目实战/01.个人博客UI设计.md', '个人博客UI设计']]
  }
]

const webpack4系列教程 = [
  ['00.零：前言.md', '零：前言'],
  ['01.一：打包JS.md', '一：打包JS'],
  ['02.二：编译ES6.md', '二：编译ES6'],
  [
    '03.三：多页面解决方案--提取公共代码.md',
    '三：多页面解决方案--提取公共代码'
  ],
  [
    '04.四：单页面解决方案--代码分割和懒加载.md',
    '四：单页面解决方案--代码分割和懒加载'
  ],
  ['05.五：处理CSS.md', '五：处理CSS'],
  ['06.六：处理SCSS.md', '六：处理SCSS'],
  ['07.七：SCSS提取和懒加载.md', '七：SCSS提取和懒加载'],
  ['08.八：JS-Tree-Shaking.md', '八：JS-Tree-Shaking'],
  ['09.九：CSS-Tree-Shaking.md', '九：CSS-Tree-Shaking'],
  ['10.十：图片处理汇总.md', '十：图片处理汇总'],
  ['11.十一：字体文件处理.md', '十一：字体文件处理'],
  ['12.十二：处理第三方JavaScript库.md', '十二：处理第三方JavaScript库'],
  ['13.十三：自动生成HTML文件.md', '十三：自动生成HTML文件'],
  [
    '14.十四：Clean-Plugin-and-Watch-Mode.md',
    '十四：Clean-Plugin-and-Watch-Mode'
  ],
  [
    '15.十五：开发模式与webpack-dev-server.md',
    '十五：开发模式与webpack-dev-server'
  ],
  ['16.十六：开发模式和生产模式·实战.md', '十六：开发模式和生产模式·实战']
]

const 前端知识体系 = [
  {
    title: 'JavaScript',
    collapsable: false,
    children: [
      [
        '01.JavaScript/01.JavaScript基础知识梳理-上.md',
        'JavaScript基础知识梳理-上'
      ],
      [
        '01.JavaScript/02.JavaScript基础知识梳理-下.md',
        'JavaScript基础知识梳理-下'
      ],
      ['01.JavaScript/03.正则表达式.md', '正则表达式'],
      [
        '01.JavaScript/04.前端面试中常考的源码实现.md',
        '前端面试中常考的源码实现'
      ],
      [
        '01.JavaScript/05.JavaScript高级程序设计-读书笔记.md',
        'JavaScript高级程序设计-读书笔记'
      ]
    ]
  },
  {
    title: 'TypeScript',
    collapsable: false,
    children: [
      ['02.TypeScript/01.基础篇.md', '基础篇'],
      ['02.TypeScript/02.实战篇.md', '实战篇']
    ]
  },
  {
    title: 'ES6',
    collapsable: false,
    children: [
      {
        title: 'Promise专题',
        collapsable: false,
        children: [
          ['03.ES6/01.Promise专题/01.Promise概述.md', 'Promise概述'],
          [
            '03.ES6/01.Promise专题/02.手写Promise的相关方法.md',
            '手写Promise的相关方法'
          ],
          ['03.ES6/01.Promise专题/03.手动实现Promise.md', '手动实现Promise']
        ]
      },
      ['03.ES6/02.ES6重难点整理.md', 'ES6重难点整理'],
      [
        '03.ES6/03.谈谈promise-async-await的执行顺序与V8引擎的BUG.md',
        '谈谈promise-async-await的执行顺序与V8引擎的BUG'
      ]
    ]
  },
  {
    title: 'HTML5',
    collapsable: false,
    children: [
      {
        title: 'Canvas',
        collapsable: false,
        children: [
          [
            '04.HTML5/01.Canvas/01.canvas学习和滤镜实现.md',
            'canvas学习和滤镜实现'
          ],
          [
            '04.HTML5/01.Canvas/02.canvas离屏技术与放大镜实现.md',
            'canvas离屏技术与放大镜实现'
          ]
        ]
      },
      [
        '04.HTML5/02.HTML5原生拖放事件的学习与实践.md',
        'HTML5原生拖放事件的学习与实践'
      ],
      ['04.HTML5/03.FileAPI文件操作实战.md', 'FileAPI文件操作实战'],
      ['04.HTML5/04.WebSocket学习和群聊实现.md', 'WebSocket学习和群聊实现'],
      ['04.HTML5/05.ServiceWorker离线缓存实战.md', 'ServiceWorker离线缓存实战']
    ]
  },
  {
    title: '浏览器与安全',
    collapsable: false,
    children: [
      [
        '05.浏览器与安全/01.SSL连接并非完全安全问题解决.md',
        'SSL连接并非完全安全问题解决'
      ],
      ['05.浏览器与安全/02.浏览器常见考点.md', '浏览器常见考点'],
      ['05.浏览器与安全/03.Web安全与防护.md', 'Web安全与防护']
    ]
  },
  {
    title: '开发实战',
    collapsable: false,
    children: [
      [
        '06.开发实战/01.MathJax-让前端支持数学公式.md',
        'MathJax-让前端支持数学公式'
      ],
      ['06.开发实战/02.momentjs使用详解.md', 'momentjs使用详解'],
      ['06.开发实战/03.axios全局代理实战.md', 'axios全局代理实战'],
      ['06.开发实战/05.微信网页登录逻辑与实现.md', '微信网页登录逻辑与实现']
    ]
  }
]

const 剑指offer刷题笔记 = [
  ['0.README.md', 'README'],
  {
    title: '字符串',
    collapsable: false,
    children: [
      ['01.字符串/01.替换空格.md', '替换空格'],
      ['01.字符串/02.字符串的全排列.md', '字符串的全排列'],
      ['01.字符串/03.翻转单词顺序.md', '翻转单词顺序'],
      ['01.字符串/04.实现atoi.md', '实现atoi']
    ]
  },
  {
    title: '查找',
    collapsable: false,
    children: [
      ['02.查找/01.旋转数组最小的数字.md', '旋转数组最小的数字'],
      ['02.查找/02.数字在排序数组中出现的次数.md', '数字在排序数组中出现的次数']
    ]
  },
  {
    title: '链表',
    collapsable: false,
    children: [
      ['03.链表/01.从尾到头打印链表.md', '从尾到头打印链表'],
      ['03.链表/02.快速删除链表节点.md', '快速删除链表节点'],
      ['03.链表/03.链表倒数第k节点.md', '链表倒数第k节点'],
      ['03.链表/04.反转链表.md', '反转链表'],
      ['03.链表/05.合并两个有序链表.md', '合并两个有序链表'],
      ['03.链表/06.复杂链表的复制.md', '复杂链表的复制'],
      ['03.链表/07.两个链表中的第一个公共节点.md', '两个链表中的第一个公共节点']
    ]
  },
  {
    title: '数组',
    collapsable: false,
    children: [
      ['04.数组/01.二维数组中的查找.md', '二维数组中的查找'],
      ['04.数组/02.数组顺序调整.md', '数组顺序调整'],
      ['04.数组/03.把数组排成最小的数.md', '把数组排成最小的数'],
      ['04.数组/04.数组中的逆序对.md', '数组中的逆序对']
    ]
  },
  {
    title: '栈和队列',
    collapsable: false,
    children: [
      ['05.栈和队列/01.用两个栈实现队列.md', '用两个栈实现队列'],
      ['05.栈和队列/02.包含min函数的栈.md', '包含min函数的栈'],
      ['05.栈和队列/03.栈的压入弹出序列.md', '栈的压入弹出序列']
    ]
  },
  {
    title: '递归与循环',
    collapsable: false,
    children: [
      ['06.递归与循环/01.青蛙跳台阶.md', '青蛙跳台阶'],
      ['06.递归与循环/02.数值的整次方.md', '数值的整次方'],
      ['06.递归与循环/03.打印从1到最大的n位数.md', '打印从1到最大的n位数'],
      ['06.递归与循环/04.顺时针打印矩阵.md', '顺时针打印矩阵'],
      [
        '06.递归与循环/05.数组中出现次数超过一半的数字.md',
        '数组中出现次数超过一半的数字'
      ],
      ['06.递归与循环/06.最小的k个数.md', '最小的k个数'],
      ['06.递归与循环/07.和为s的两个数字.md', '和为s的两个数字'],
      ['06.递归与循环/08.和为s的连续正数序列.md', '和为s的连续正数序列'],
      ['06.递归与循环/09.n个骰子的点数.md', 'n个骰子的点数'],
      ['06.递归与循环/10.扑克牌的顺子.md', '扑克牌的顺子'],
      ['06.递归与循环/11.圆圈中最后剩下的数字.md', '圆圈中最后剩下的数字']
    ]
  },
  {
    title: '树',
    collapsable: false,
    children: [
      ['07.树/01.重建二叉树.md', '重建二叉树'],
      ['07.树/02.判断是否子树.md', '判断是否子树'],
      ['07.树/03.二叉树的镜像.md', '二叉树的镜像'],
      ['07.树/04.二叉搜索树的后序遍历序列.md', '二叉搜索树的后序遍历序列'],
      ['07.树/05.二叉树中和为某一值的路径.md', '二叉树中和为某一值的路径'],
      ['07.树/06.二叉树层序遍历.md', '二叉树层序遍历'],
      ['07.树/07.二叉树转双向链表.md', '二叉树转双向链表'],
      ['07.树/08.判断是否是平衡二叉树.md', '判断是否是平衡二叉树']
    ]
  },
  {
    title: '位运算',
    collapsable: false,
    children: [
      ['08.位运算/01.二进制中1的个数.md', '二进制中1的个数'],
      ['08.位运算/02.二进制中1的个数进阶版.md', '二进制中1的个数进阶版'],
      ['08.位运算/03.数组中只出现一次的数字.md', '数组中只出现一次的数字']
    ]
  },
  {
    title: '哈希表',
    collapsable: false,
    children: [
      ['09.哈希表/01.丑数.md', '丑数'],
      ['09.哈希表/02.第一次只出现一次的字符.md', '第一次只出现一次的字符']
    ]
  },
  {
    title: '堆',
    collapsable: false,
    children: [['10.堆/01.最小的k个数.md', '最小的k个数']]
  }
]

const 思考与成长 = [['01.如何保持高效学习.md', '如何保持高效学习']]

const 每周分享 = [
  ['00.介绍.md', '介绍'],
  {
    title: '2019',
    collapsable: false,
    children: [
      ['01.2019/01.新年初刊.md', '新年初刊'],
      ['01.2019/02.如何缩小学习反馈周期.md', '如何缩小学习反馈周期'],
      ['01.2019/03.无声半年.md', '无声半年'],
      ['01.2019/04.redis热key等问题研究.md', 'redis热key等问题研究']
    ]
  },
  {
    title: '2018',
    collapsable: false,
    children: [
      ['02.2018/01.第一期.md', '第一期'],
      ['02.2018/02.第二期.md', '第二期']
    ]
  }
]

const 设计模式手册 = [
  {
    title: '创建型模式',
    collapsable: false,
    children: [
      ['01.创建型模式/01.单例模式.md', '单例模式'],
      ['01.创建型模式/02.工厂模式.md', '工厂模式'],
      ['01.创建型模式/03.抽象工厂模式.md', '抽象工厂模式']
    ]
  },
  {
    title: '结构型模式',
    collapsable: false,
    children: [
      ['02.结构型模式/01.享元模式.md', '享元模式'],
      ['02.结构型模式/02.代理模式.md', '代理模式'],
      ['02.结构型模式/03.桥接模式.md', '桥接模式'],
      ['02.结构型模式/04.组合模式.md', '组合模式'],
      ['02.结构型模式/05.装饰者模式.md', '装饰者模式'],
      ['02.结构型模式/06.适配器模式.md', '适配器模式']
    ]
  },
  {
    title: '行为型模式',
    collapsable: false,
    children: [
      ['03.行为型模式/01.命令模式.md', '命令模式'],
      ['03.行为型模式/02.备忘录模式.md', '备忘录模式'],
      ['03.行为型模式/03.模板模式.md', '模板模式'],
      ['03.行为型模式/04.状态模式.md', '状态模式'],
      ['03.行为型模式/05.策略模式.md', '策略模式'],
      ['03.行为型模式/06.解释器模式.md', '解释器模式'],
      ['03.行为型模式/07.订阅-发布模式.md', '订阅-发布模式'],
      ['03.行为型模式/08.责任链模式.md', '责任链模式'],
      ['03.行为型模式/09.迭代器模式.md', '迭代器模式']
    ]
  }
]

module.exports = {
  '/docs/Git实战手册/': Git实战手册,

  '/docs/NodeJS/': NodeJS,

  '/docs/ReactJS/': ReactJS,

  '/docs/UI设计/': UI设计,

  '/docs/webpack4系列教程/': webpack4系列教程,

  '/docs/前端知识体系/': 前端知识体系,

  '/docs/剑指offer刷题笔记/': 剑指offer刷题笔记,

  '/docs/思考与成长/': 思考与成长,

  '/docs/每周分享/': 每周分享,

  '/docs/设计模式手册/': 设计模式手册
}
