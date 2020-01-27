---
title: "深入浅出lodash"
date: 2019-10-29
permalink: "2019-10-29-JavaScript-深入浅出lodash"
---


## 数组方法

### 拆分方法

- [chunk](https://www.lodashjs.com/docs/latest#_chunkarray-size1)：将数组（array）拆分成多个 `size` 长度的区块，并将这些区块组成一个新数组。 如果`array` 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

  

### 链接方法

- [concat](https://www.lodashjs.com/docs/latest#_concatarray-values)：创建一个新数组，将`array`与任何数组 或 值连接在一起。
- [xor](https://www.lodashjs.com/docs/latest#_xorarrays)：创建一个给定数组唯一值的数组，使用 [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)（交集取反）做等值比较。返回值的顺序取决于他们数组的出现顺序。
- [xorBy](https://www.lodashjs.com/docs/latest#_xorbyarrays-iteratee_identity)：方法类似 [_.xor](https://www.lodashjs.com/docs/latest#xor) ，除了它接受 `iteratee`（迭代器），这个迭代器 调用每一个 `arrays`（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： *(value)*.
- [xorWith](https://www.lodashjs.com/docs/latest#_xorwitharrays-comparator)：该方法是像 [_.xor](https://www.lodashjs.com/docs/latest#xor)，除了它接受一个 `comparator` ，以调用比较数组的元素。 comparator 调用2个参数：*(arrVal, othVal)*.



### 过滤方法

> 将某个数组中的值按照特性规则进行过滤

#### 根据值过滤

##### 纯的函数

- [compact](https://www.lodashjs.com/docs/latest#_compactarray)：创建一个新数组，包含原数组中所有的非假值元素。例如`false`, `null`, `0`, `""`, `undefined`, 和 `NaN` 都是被认为是“假值”。

- [difference](https://www.lodashjs.com/docs/latest#_differencearray-values)：检查某个数组，将特定的值过滤掉，过滤规则为`===`，如果比较返回`false`则保留

- [differenceBy](https://www.lodashjs.com/docs/latest#_differencebyarray-values-iteratee_identity)：与`difference`相比，多了一个前置步骤，数组中的每个值在比较前都会过一遍迭代器中的函数，最后比较返回`false`则保留

- [differenceWith](https://www.lodashjs.com/docs/latest#_differencewitharray-values-comparator)：与`difference`相比，可以自定义比较方法，不一定使用`===`进行比较，比较返回`false`则保留

- [intersection](https://www.lodashjs.com/docs/latest#_intersectionarrays)：类似`difference`，比较规则为`===`，如果比较返回`true`则保留（可理解为获取给定数组的交集）

- [intersection](https://www.lodashjs.com/docs/latest#_intersectionarrays)：类似`differenceBy`，比较返回`true`则保留

- [intersectionWith](https://www.lodashjs.com/docs/latest#_intersectionwitharrays-comparator)：类似`differenceWith`，比较返回`true`则保留

- [without](https://www.lodashjs.com/docs/latest#_withoutarray-values)：创建一个剔除所有给定值的新数组，剔除值的时候使用`===`

- [`filter`](https://www.lodashjs.com/docs/latest#_filtercollection-predicate_identity)：类似原生`filter`

- 

  

##### 不纯的函数

- [pull](https://www.lodashjs.com/docs/latest#_pullarray-values)：移除数组`array`中所有和给定值相等的元素，使用`===`

  方法类似[_.difference](https://www.lodashjs.com/docs/latest#difference), 不同是这个方法会改变数组 `array`，并且参数是单个传入

- [pullAll](https://www.lodashjs.com/docs/latest#_pullallarray-values)：方法类似[_.difference](https://www.lodashjs.com/docs/latest#difference), 不同是这个方法会改变数组 `array`。

- [pullAllBy](https://www.lodashjs.com/docs/latest#_pullallbyarray-values-iteratee_identity)：方法类似 [_.differenceBy](https://www.lodashjs.com/docs/latest#differenceBy), 不同是这个方法会改变数组 `array`

- [pullAllWith](https://www.lodashjs.com/docs/latest#_pullallwitharray-values-comparator)：方法类似 [_.differenceWith](https://www.lodashjs.com/docs/latest#differenceWith) , 不同是这个方法会改变数组 `array`

- [remove](https://www.lodashjs.com/docs/latest#_removearray-predicate_identity)：根据规则，移除`array`中对应的元素，并返回被移除元素的数组。 



#### 根据索引过滤

##### 不纯的函数

- [pullAt](https://www.lodashjs.com/docs/latest#_pullatarray-indexes)：根据索引 `indexes`，移除`array`中对应的元素，并返回被移除元素的数组。 

  



### 切片方法

> 获取某个数组中，特定的值

- [drop](https://www.lodashjs.com/docs/latest#_droparray-n1)：创建一个切片数组，去除`array`前面的`n`个元素。（`n`默认值为1。）
- [dropRight](https://www.lodashjs.com/docs/latest#_droprightarray-n1)：创建一个切片数组，去除`array`尾部的`n`个元素。（`n`默认值为1。）
- [dropRightWhile](https://www.lodashjs.com/docs/latest#_droprightwhilearray-predicate_identity)：从左往右截取数组，直到返回false，停止截取
- [dropWhile](https://www.lodashjs.com/docs/latest#_dropwhilearray-predicate_identity)：从左往右截取数组，直到返回false，开始截取



### 填充方法

- [fill](https://www.lodashjs.com/docs/latest#_fillarray-value-start0-endarraylength)：使用 `value` 值来填充（替换） `array`，从`start`位置开始, 到`end`位置结束（但不包含`end`位置）。

  **Note:** 这个方法会改变 `array`（不是创建新数组）。



### 查找方法

> 根据规则，获取数组中，某个位置的值或索引

#### 根据值获取索引

- [findIndex](https://www.lodashjs.com/docs/latest#_findindexarray-predicate_identity-fromindex0)：比原生`findIndex`，多了一个参数，可以指定查找的起始索引

- [findLastIndex](https://www.lodashjs.com/docs/latest#_findlastindexarray-predicate_identity-fromindexarraylength-1)：与`findIndex`类似，区别是它是从右到左进行查找，同时也可以指定查找的起始索引

- [indexOf](https://www.lodashjs.com/docs/latest#_indexofarray-value-fromindex0)：与原生的`indexof`一致，功能类似`findIndex`

- [lastIndexOf](https://www.lodashjs.com/docs/latest#_lastindexofarray-value-fromindexarraylength-1)：类似`indexOf`，从右到左查找

- [`includes`](https://www.lodashjs.com/docs/latest#_includescollection-value-fromindex0)：检索某个值是否在数组中，同时也可以用来检索对象的key，或者字符串的`include`

  

#### 根据索引获取值

- [head](https://www.lodashjs.com/docs/latest#_headarray)：获取数组 `array` 的第一个元素（ps：参数如果不为数组则返回`undefined`，优于`arr[0]`）
- [initial](https://www.lodashjs.com/docs/latest#_initialarray)：获取数组`array`中除了最后一个元素之外的所有元素（去除数组`array`中的最后一个元素）
- [last](https://www.lodashjs.com/docs/latest#_lastarray)：获取`array`中的最后一个元素。好处同`head`
- [nth](https://www.lodashjs.com/docs/latest#_ntharray-n0)：获取`array`数组的第n个元素。如果`n`为负数，则返回从数组结尾开始的第n个元素。
- [slice](https://www.lodashjs.com/docs/latest#_slicearray-start0-endarraylength)：裁剪数组`array`，从 `start` 位置开始到`end`结束，但不包括 `end` 本身的位置。 
- [sortedIndex](https://www.lodashjs.com/docs/latest#_sortedindexarray-value)：用二进制的方式进行比较，获取某个值插入数组尽可能小的索引位置
- [sortedIndexBy](https://www.lodashjs.com/docs/latest#_sortedindexbyarray-value-iteratee_identity)：与`sortedIndex`类似，区别是，在比较前，可使数组中的值经过特定方法的转换
- [sortedIndexOf](https://www.lodashjs.com/docs/latest#_sortedindexofarray-value)：这个方法类似 [_.indexOf](https://www.lodashjs.com/docs/latest#indexOf)，它只能在已排序的数组上进行检索
- [sortedLastIndex](https://www.lodashjs.com/docs/latest#_sortedlastindexarray-value)：此方法类似于 [_.sortedIndex](https://www.lodashjs.com/docs/latest#sortedIndex)，检索尽可能大的索引
- [sortedLastIndexBy](https://www.lodashjs.com/docs/latest#_sortedlastindexbyarray-value-iteratee_identity)：与[sortedIndexBy](https://www.lodashjs.com/docs/latest#_sortedindexbyarray-value-iteratee_identity)类似，获取尽可能大的索引
- [sortedLastIndexOf](https://www.lodashjs.com/docs/latest#_sortedlastindexofarray-value)：与[sortedIndexOf](https://www.lodashjs.com/docs/latest#_sortedindexofarray-value)，类似获取尽可能大的索引
- [tail](https://www.lodashjs.com/docs/latest#_tailarray)：获取除了`array`数组第一个元素以外的全部元素。
- [take](https://www.lodashjs.com/docs/latest#_takearray-n1)：创建一个数组切片，从`array`数组的起始元素开始提取`n`个元素。
- [takeRight](https://www.lodashjs.com/docs/latest#_takerightarray-n1)：创建一个数组切片，从`array`数组的最后一个元素开始提取`n`个元素。
- [takeRightWhile](https://www.lodashjs.com/docs/latest#_takerightwhilearray-predicate_identity)：与[takeRight](https://www.lodashjs.com/docs/latest#_takerightarray-n1)类似，区别是直到返回`false`，停止。
- [takeWhile](https://www.lodashjs.com/docs/latest#_takewhilearray-predicate_identity)：与[takeRightWhile](https://www.lodashjs.com/docs/latest#_takerightwhilearray-predicate_identity)类似，区别是从头开始取值。



#### 根据规则获取值

- [`find`](https://www.lodashjs.com/docs/latest#_findcollection-predicate_identity-fromindex0)：类似原生`findOne`
- [`findLast`](https://www.lodashjs.com/docs/latest#_findlastcollection-predicate_identity-fromindexcollectionlength-1)：区别于[`find`](https://www.lodashjs.com/docs/latest#_findcollection-predicate_identity-fromindex0)是从后往前找
- 



### 去重方法

- [sortedUniq](https://www.lodashjs.com/docs/latest#_sorteduniqarray)：这个方法类似 [_.uniq](https://www.lodashjs.com/docs/latest#uniq)，但是它只会对相邻的值进行去重
- [sortedUniqBy](https://www.lodashjs.com/docs/latest#_sorteduniqbyarray-iteratee)：这个方法类似 [_.uniqBy](https://www.lodashjs.com/docs/latest#uniqBy)，但是它只会对相邻的值进行去重
- [union](https://www.lodashjs.com/docs/latest#_unionarrays)：对多个数组进行去重，比较规则`===`
- [unionBy](https://www.lodashjs.com/docs/latest#_unionbyarrays-iteratee_identity)：方法类似 [_.union](https://www.lodashjs.com/docs/latest#union)，在每个值比较前，可对每个值进行一次转换
- [unionWith](https://www.lodashjs.com/docs/latest#_unionwitharrays-comparator)：方法类似 [_.union](https://www.lodashjs.com/docs/latest#union)，在两个值比较时，可以自定义比较规则
- [uniq](https://www.lodashjs.com/docs/latest#_uniqarray)：对单个数组中的值进行去重，比较规则`===`
- [uniqBy](https://www.lodashjs.com/docs/latest#_uniqbyarray-iteratee_identity)：这个方法类似 [_.uniq](https://www.lodashjs.com/docs/latest#uniq) ，在每个值比较前，可对每个值进行一次转换
- [uniqWith](https://www.lodashjs.com/docs/latest#_uniqwitharray-comparator)：这个方法类似 [_.uniq](https://www.lodashjs.com/docs/latest#uniq)，在两个值比较时，可以自定义比较规则



### 减少嵌套方法

- [flatten](https://www.lodashjs.com/docs/latest#_flattenarray)：减少一级`array`嵌套深度。
- [flattenDeep](https://www.lodashjs.com/docs/latest#_flattendeeparray)：将`array`递归为一维数组。
- [flattenDepth](https://www.lodashjs.com/docs/latest#_flattendeptharray-depth1)：根据 `depth` 递归减少 `array` 的嵌套层级



### 数组转换方法

> 将数组以对象或者字符串的数据结构展现出来

- [join](https://www.lodashjs.com/docs/latest#_joinarray-separator-)：将 `array` 中的所有元素转换为由 `separator` 分隔的字符串。

- [fromPairs](https://www.lodashjs.com/docs/latest#_frompairspairs)：根据数组中的值返回一个由键值对`pairs`构成的对象
- [zipObject](https://www.lodashjs.com/docs/latest#_zipobjectprops-values)：这个方法类似 [_.fromPairs](https://www.lodashjs.com/docs/latest#fromPairs)，除了它接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
- [zipObjectDeep](https://www.lodashjs.com/docs/latest#_zipobjectdeepprops-values)：这个方法类似 [_.zipObject](https://www.lodashjs.com/docs/latest#zipObject)，除了它支持属性路径。
- [`countBy`](https://www.lodashjs.com/docs/latest#_countbycollection-iteratee_identity)：创建一个组成对象，`key`是经过迭代器后返回的值，`value`这个值返回的次数
- [`groupBy`](https://www.lodashjs.com/docs/latest#_groupbycollection-iteratee_identity)：类似[`countBy`](https://www.lodashjs.com/docs/latest#_countbycollection-iteratee_identity)，不同是`value`用来体现匹配中的集合。



### 排序方法

#### 不纯的函数

- [reverse](https://www.lodashjs.com/docs/latest#_reversearray)：反转数组



### 数组分组

- [unzip](https://www.lodashjs.com/docs/latest#_unziparray)：它接收分组元素的数组，并且创建一个数组
- [unzipWith](https://www.lodashjs.com/docs/latest#_unzipwitharray-iteratee_identity)：此方法类似于 [_.unzip](https://www.lodashjs.com/docs/latest#unzip)，除了它接受一个`iteratee`指定重组值应该如何被组合
- [zip](https://www.lodashjs.com/docs/latest#_ziparrays)：创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
- [zipWith](https://www.lodashjs.com/docs/latest#_zipwitharrays-iteratee_identity)：这个方法类似于 [_.zip](https://www.lodashjs.com/docs/latest#zip)，不同之处在于它接受一个 `iteratee`（迭代函数），来 指定分组的值应该如何被组合。 该iteratee调用每个组的元素： *(...group)*.



### 数组判断方法

- [`every`](https://www.lodashjs.com/docs/latest#_everycollection-predicate_identity)：判断数组中的所有值是否都满足某个条件，否则返回`false`，是则返回`true`



### 遍历方法

- [`forEach`](https://www.lodashjs.com/docs/latest#_foreachcollection-iteratee_identity)：类似原生的`forEach`，区别是可以遍历对象
- [`forEachRight`](https://www.lodashjs.com/docs/latest#_foreachrightcollection-iteratee_identity)：这个方法类似 [`_.forEach`](https://www.lodashjs.com/docs/latest#forEach)，不同之处在于， [`_.forEachRight`](https://www.lodashjs.com/docs/latest#forEachRight) 是从右到左遍历集合中每一个元素的。

- [`flatMap`](https://www.lodashjs.com/docs/latest#_flatmapcollection-iteratee_identity)：遍历数组，将创建的值，进行扁平化合并
- [`flatMapDeep`](https://www.lodashjs.com/docs/latest#_flatmapdeepcollection-iteratee_identity)：这个方法类似 [`_.flatMap`](https://www.lodashjs.com/docs/latest#flatMap) 不同之处在于， [`_.flatMapDeep`](https://www.lodashjs.com/docs/latest#flatMapDeep) 会继续扁平化递归映射的结果。
- [`flatMapDepth`](https://www.lodashjs.com/docs/latest#_flatmapdepthcollection-iteratee_identity-depth1)：该方法类似 [`_.flatMap`](https://www.lodashjs.com/docs/latest#flatMap)，不同之处在于， [`_.flatMapDepth`](https://www.lodashjs.com/docs/latest#flatMapDepth) 会根据指定的 `depth`（递归深度）继续扁平化递归映射结果。
- [`map`](https://www.lodashjs.com/docs/latest#_mapcollection-iteratee_identity)：类似原生`map`，不同可遍历对象，根据对象的`value`，生成新的数组



### 分类方法

- [`partition`](https://www.lodashjs.com/docs/latest#_partitioncollection-predicate_identity)：可根据规则对数组中的值进行分类，只能分2类





## 函数工具方法

- [`after`](https://www.lodashjs.com/docs/latest#_aftern-func)：当某个函数被触发指定次数后发出，某个回调
- [`ary`](https://www.lodashjs.com/docs/latest#_aryfunc-nfunclength)：创建一个调用`func`的函数。调用`func`时最多接受 `n`个参数，忽略多出的参数。
- [`before`](https://www.lodashjs.com/docs/latest#_beforen-func)：限制某个函数的调用次数
- [`curry`](https://www.lodashjs.com/docs/latest#_curryfunc-arityfunclength)：使某个可以接受多个参数的函数柯理化
- [`curryRight`](https://www.lodashjs.com/docs/latest#_curryrightfunc-arityfunclength)：与[`curry`](https://www.lodashjs.com/docs/latest#_curryfunc-arityfunclength)类似，从参数的右侧开始柯理化
- [`debounce`](https://www.lodashjs.com/docs/latest#_debouncefunc-wait0-options)：防抖，函数在延迟设定时间后执行，如果，在此期间又触发了函数，则继续顺延
- [`defer`](https://www.lodashjs.com/docs/latest#_deferfunc-args)、[`delay`](https://www.lodashjs.com/docs/latest#_delayfunc-wait-args)：类似`setTimeout`
- [`negate`](https://www.lodashjs.com/docs/latest#_negatepredicate)：使一个函数结果的返回值取反
- [`once`](https://www.lodashjs.com/docs/latest#_oncefunc)：使一个函数只能执行一次，重复调用不执行函数，直接返回第一次的结果
- [`overArgs`](https://www.lodashjs.com/docs/latest#_overargsfunc-transforms_identity)：创建一个函数，调用`func`时参数为相对应的`transforms`的返回值。如果没有对应的转换函数则不进行转换
- [`spread`](https://www.lodashjs.com/docs/latest#_spreadfunc-start0)：`func`传入的数组可以解析成单个的值
- [`throttle`](https://www.lodashjs.com/docs/latest#_throttlefunc-wait0-options)：节流，在设定时间内，只能执行一次函数。



## 数据工具方法

- [`clone`](https://www.lodashjs.com/docs/latest#_clonevalue)：创建一个 `value` 的浅拷贝
- [`cloneDeep`](https://www.lodashjs.com/docs/latest#_clonedeepvalue)：创建一个 `value` 的深拷贝
- [`cloneDeepWith`](https://www.lodashjs.com/docs/latest#_clonedeepwithvalue-customizer)：类似[`cloneDeep`](https://www.lodashjs.com/docs/latest#_clonedeepvalue)，区别，在拷贝时，可以`return`指定值作为返回值
- [`cloneWith`](https://www.lodashjs.com/docs/latest#_clonewithvalue-customizer)：类似[`clone`](https://www.lodashjs.com/docs/latest#_clonevalue)，区别，在拷贝时，可以`return`指定值作为返回值
- [`conformsTo`](https://www.lodashjs.com/docs/latest#_conformstoobject-source)：判断对象中某个key的value是否满足判断条件
- [`isEqual`](https://www.lodashjs.com/docs/latest#_isequalvalue-other)：执行递归比较



## 对象方法

- [`forIn`](https://www.lodashjs.com/docs/latest#_forinobject-iteratee_identity)：遍历对象，会遍历原型链上可枚举的值
- [`forOwn`](https://www.lodashjs.com/docs/latest#_forownobject-iteratee_identity)：遍历对象，不会遍历原型链上可枚举的值
- [`pick`](https://www.lodashjs.com/docs/latest#_pickobject-props)：创建一个从 `object` 中选中的属性的对象。
- [`pickBy`](https://www.lodashjs.com/docs/latest#_pickbyobject-predicate_identity)：类似[`pick`](https://www.lodashjs.com/docs/latest#_pickobject-props)，可在创建时，自定义规则进行选择
- [`merge`](https://www.lodashjs.com/docs/latest#_mergeobject-sources)：合并两个对象，类似`webpack-merge`效果
- [`get`](https://www.lodashjs.com/docs/latest#_getobject-path-defaultvalue)：对象取值方法，可设置默认值
- [`result`](https://www.lodashjs.com/docs/latest#_resultobject-path-defaultvalue)：与[`get`](https://www.lodashjs.com/docs/latest#_getobject-path-defaultvalue)类似，如果是函数，则返回函数执行后的结果
- 
- 