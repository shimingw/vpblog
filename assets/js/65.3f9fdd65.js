(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{309:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/qq_41523096/article/details/82142747")]),t._v(" "),a("blockquote",[a("p",[t._v("用来描述一个函数执行所需要的时长")]),t._v(" "),a("p",[t._v("取一个函数运行时长的最高阶项")]),t._v(" "),a("p",[t._v("根据处理数据的大小，是一个线性的值，用"),a("strong",[t._v("O")]),t._v("来标识")])]),t._v(" "),a("p",[t._v("比如\nT（n） = 3n\n最高阶项为 3n，省去系数 3，转化的时间复杂度为：\nT（n） = O（n）")]),t._v(" "),a("p",[t._v("O（1）,O（nlogn）, O（n^3）, O（m*n），O（2^n），O（n！）")]),t._v(" "),a("h3",{attrs:{id:"复杂度介绍图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度介绍图标"}},[t._v("#")]),t._v(" 复杂度介绍图标")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/22/16913f0d5fb66d79?w=990&h=525&f=png&s=115214",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/22/16913f3a8111fb02?w=794&h=398&f=png&s=34321",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("h3",{attrs:{id:"链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),a("p",[t._v("优点")]),t._v(" "),a("ul",[a("li",[t._v("一个"),a("strong",[t._v("链表")]),t._v("是数据元素的线性集合")]),t._v(" "),a("li",[t._v("每个元素指向下一个元素")]),t._v(" "),a("li",[t._v("这种结构允许在迭代期间有效地从序列中的任何位置插入或删除元素（没有索引所以对其他数据不会有影响）\n缺点")]),t._v(" "),a("li",[t._v("访问时间是线性的（"),a("strong",[t._v("难以管道化？？")]),t._v("）")]),t._v(" "),a("li",[t._v("更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n链表数据结构\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"双向链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[t._v("#")]),t._v(" 双向链表")]),t._v(" "),a("p",[t._v("优点")]),t._v(" "),a("ul",[a("li",[t._v("由一组称为节点的顺序链接记录组成的链接数据结构")]),t._v(" "),a("li",[t._v("它可以被概念化为两个由相同数据项组成的单链表，但顺序相反")]),t._v(" "),a("li",[t._v("两个节点链接允许在任一方向上遍历列表")])]),t._v(" "),a("p",[t._v("缺点")]),t._v(" "),a("ul",[a("li",[t._v("添加或者删除节点时,需做的链接更改要比单向链表复杂得多")])]),t._v(" "),a("h2",{attrs:{id:"常见算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见算法"}},[t._v("#")]),t._v(" 常见算法")]),t._v(" "),a("h3",{attrs:{id:"贪心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法"}},[t._v("#")]),t._v(" 贪心算法")]),t._v(" "),a("p",[t._v("在对问题求解时，总是做出在当前看来是最好的选择。")]),t._v(" "),a("p",[t._v("不是对所有问题都能得到整体最优解，但对范围相当广泛的许多问题他能产生整体最优解或者是整体最优解的近似解。")]),t._v(" "),a("h3",{attrs:{id:"分治算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分治算法"}},[t._v("#")]),t._v(" 分治算法")]),t._v(" "),a("p",[t._v("分治算法的基本思想是将一个规模为 N 的问题分解为 K 个规模较小的子问题，这些子问题相互独立且与原问题性质相同。求出子问题的解，就可得到原问题的解。")]),t._v(" "),a("h4",{attrs:{id:"分治法解题的一般步骤："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分治法解题的一般步骤："}},[t._v("#")]),t._v(" 分治法解题的一般步骤：")]),t._v(" "),a("ol",[a("li",[t._v("分解，将要解决的问题划分成若干规模较小的同类问题；")]),t._v(" "),a("li",[t._v("求解，当子问题划分得足够小时，用较简单的方法解决；")]),t._v(" "),a("li",[t._v("合并，按原问题的要求，将子问题的解逐层合并构成原问题的解。")])]),t._v(" "),a("h3",{attrs:{id:"动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),a("p",[t._v("动态规划算法通常用于求解具有某种最优性质的问题。在这类问题中，可能会有许多可行解。每一个解都对应于一个值，我们希望找到具有最优值的解。")]),t._v(" "),a("p",[a("strong",[t._v("与分治法最大的差别是")]),t._v("：适合于用动态规划法求解的问题，经分解后得到的"),a("strong",[t._v("子问题往往不是互相独立的")]),t._v("（即下一个子阶段的求解是建立在上一个子阶段的解的基础上，进行进一步的求解）")]),t._v(" "),a("h3",{attrs:{id:"回溯法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回溯法"}},[t._v("#")]),t._v(" 回溯法")]),t._v(" "),a("p",[t._v("回溯法（探索与回溯法）是一种选优搜索法，按选优条件向前搜索，以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为“回溯点”。")]),t._v(" "),a("h4",{attrs:{id:"基本思想："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本思想："}},[t._v("#")]),t._v(" 基本思想：")]),t._v(" "),a("p",[t._v("回溯法在问题的解空间树中，按深度优先策略，从根结点出发搜索解空间树。算法搜索至解空间树的任意一点时，先判断该结点是否包含问题的解。如果肯定不包含（剪枝过程），则跳过对该结点为根的子树的搜索，逐层向其祖先结点回溯；否则，进入该子树，继续按深度优先策略搜索。\n回溯法就是对隐式图的深度优先搜索算法\n回溯法：为了避免生成那些不可能产生最佳解的问题状态，要不断地利用限界函数(bounding function)来处死(剪枝)那些实际上不可能产生所需解的活结点，以减少问题的计算量。具有限界函数的深度优先生成法称为回溯法。（回溯法 = 穷举 +　剪枝）")]),t._v(" "),a("h4",{attrs:{id:"一般步骤："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般步骤："}},[t._v("#")]),t._v(" 一般步骤：")]),t._v(" "),a("p",[t._v("(1)针对所给问题，定义问题的解空间；\n(2)确定易于搜索的解空间结构；\n(3)以深度优先方式搜索解空间，并在搜索过程中用剪枝函数避免无效搜索。")]),t._v(" "),a("h4",{attrs:{id:"两个常用的剪枝函数："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个常用的剪枝函数："}},[t._v("#")]),t._v(" 两个常用的剪枝函数：")]),t._v(" "),a("p",[t._v("(1)约束函数：在扩展结点处减去不满足约束的子数\n(2)限界函数：减去得不到最优解的子树")]),t._v(" "),a("p",[t._v("用回溯法解题的一个显著特征是在搜索过程中动态产生问题的解空间。在任何时刻，算法只保存从根结点到当前扩展结点的路径。如果解空间树中从根结点到叶结点的最长路径的长度为 h(n)，则回溯法所需的计算空间通常为 O(h(n))。而显式地存储整个解空间则需要 O(2^h(n))或 O(h(n)!)内存空间。")]),t._v(" "),a("h3",{attrs:{id:"分支限界法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支限界法"}},[t._v("#")]),t._v(" 分支限界法")]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/fengty90/p/3768843.html")])])}),[],!1,null,null,null);s.default=r.exports}}]);