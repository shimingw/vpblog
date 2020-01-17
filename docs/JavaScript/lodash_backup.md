---
title: "lodash干货-数组"
date: 2019-10-29
permalink: "2019-10-29-JavaScript-lodash干货-数组"
---

## 数组比对过滤方法

### 基础方法

#### compact

过滤到数据中所有的假值，例如`false`, `null`, `0`, `""`, `undefined`, 和 `NaN` 都是被认为是“假值”。

```
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

### 高阶方法

#### difference

检查某个数组，将特定的值过滤掉，过滤规则为`===`，如果比较返回`false`则保留

```
const obj = {name:1111111}
console.log(
    _.difference([obj, "2", 1], [obj, 2])
);
// => ["2", 1]
```

#### differenceBy

与`difference`相比，多了一个前置步骤，数组中的每个值在比较前都会过一遍迭代器中的函数，最后比较返回`false`则保留

```
// 数组中的每个值比较前，都会执行Math.floor方法，执行后的结果相同，则认为需要过滤
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]

// 会取属性中的x值进行比较，2种写法是一样的效果
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }],data=>data.x)
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```

#### differenceWith

与`difference`相比，可以自定义比较方法，不一定使用`===`进行比较，比较返回`false`则保留

```
// _.isEqual，对两个引用值也会进行深度遍历进行比较，例如_.isEqual({},{})返回true
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]

// 可以自定义比较规则
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], (a,b)=>{
//比较的逻辑代码
});
```



#### intersection

类似`difference`，比较规则为`===`，如果比较返回`true`则保留（可理解为获取给定数组的交集）



#### intersectionBy

类似`differenceBy`，比较返回`true`则保留



#### intersectionWith

类似`differenceWith`，比较返回`true`则保留



## 数组切片方法

### 基础方法

#### drop

创建一个切片数组，去除`array`前面的`n`个元素。（`n`默认值为1。）

#### dropRight

创建一个切片数组，去除`array`尾部的`n`个元素。（`n`默认值为1。）

#### initial

获取数组`array`中除了最后一个元素之外的所有元素（去除数组`array`中的最后一个元素）

### 高阶方法

#### dropRightWhile

从左往右截取数组，直到返回false，停止截取

#### dropWhile

从左往右截取数组，直到返回false，开始截取





## 数组查找方法

### 基础方法

#### findIndex

比原生`findIndex`，多了一个参数，可以指定查找的起始索引

#### findLastIndex

与`findIndex`类似，区别是它是从右到左进行查找，同时也可以指定查找的起始索引

#### indexOf

与原生的`indexof`一致，功能类似`findIndex`

#### lastIndexOf

类似`indexOf`，从右到左查找

#### head

获取数组 `array` 的第一个元素（ps：参数如果不为数组则返回`undefined`，优于`arr[0]`）

#### last

获取`array`中的最后一个元素。好处同`head`

#### nth

获取`array`数组的第n个元素。如果`n`为负数，则返回从数组结尾开始的第n个元素。

#### tail

获取除了`array`数组第一个元素以外的全部元素。

#### take

创建一个数组切片，从`array`数组的起始元素开始提取`n`个元素。

#### takeRight

创建一个数组切片，从`array`数组的最后一个元素开始提取`n`个元素。

### 高阶方法

#### sortedIndex

用二进制的方式进行比较，获取某个值插入数组的位置

```
_.sortedIndex([30, 50], 40);
// => 1
```

#### sortedIndexBy

与`sortedIndex`类似，区别是，在比较前，可使数组中的值经过特定方法的转换

```
var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0
```

#### sortedIndexOf

这个方法类似 [`_.indexOf`](https://www.lodashjs.com/docs/latest#indexOf)，它只能在已排序的数组上进行检索

#### sortedLastIndex

此方法类似于 [`_.sortedIndex`](https://www.lodashjs.com/docs/latest#sortedIndex)，检索尽可能大的索引



## 数组突变方法

> 会使数组产生突变，即会修改传入的数组本身

#### pull

移除数组`array`中所有和给定值相等的元素，使用`===`

方法类似[`_.difference`](https://www.lodashjs.com/docs/latest#difference), 不同是这个方法会改变数组 `array`，并且参数是单个传入

```
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```

#### pullAll

方法类似[`_.difference`](https://www.lodashjs.com/docs/latest#difference), 不同是这个方法会改变数组 `array`。

#### pullAllBy

方法类似 [`_.differenceBy`](https://www.lodashjs.com/docs/latest#differenceBy), 不同是这个方法会改变数组 `array`

#### pullAllWith

方法类似 [`_.differenceWith`](https://www.lodashjs.com/docs/latest#differenceWith) , 不同是这个方法会改变数组 `array`

#### pullAt

根据索引 `indexes`，移除`array`中对应的元素，并返回被移除元素的数组。 

```
var array = [5, 10, 15, 20];
var evens = _.pullAt(array, 1, 3);
 
console.log(array);
// => [5, 15]
 
console.log(evens);
// => [10, 20]
```

#### remove

根据规则，移除`array`中对应的元素，并返回被移除元素的数组。 

```
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```

#### reverse

反转数组



## 数组嵌套方法

### flatten

减少一级`array`嵌套深度

### flattenDeep

将`array`递归为一维数组

### flattenDepth

自定义减少 `array` 的嵌套层级



## 数组去重方法

### uniq

对数组中的值进行去重，比较规则`===`

### uniqBy

这个方法类似 [`_.uniq`](https://www.lodashjs.com/docs/latest#uniq) ，在每个值比较前，可对每个值进行一次转换

### uniqWith

这个方法类似 [`_.uniq`](https://www.lodashjs.com/docs/latest#uniq)，在两个值比较时，可以自定义比较规则

### sortedUniq

这个方法类似 [`_.uniq`](https://www.lodashjs.com/docs/latest#uniq)，但是它只会对相邻的值进行去重

### sortedUniqBy

这个方法类似 [`_.uniqBy`](https://www.lodashjs.com/docs/latest#uniqBy)，但是它只会对相邻的值进行去重

### union

对多个数组进行去重，比较规则`===`

### unionBy

方法类似 [`_.union`](https://www.lodashjs.com/docs/latest#union)，在每个值比较前，可对每个值进行一次转换

### uniqWith

方法类似 [`_.union`](https://www.lodashjs.com/docs/latest#union)，在两个值比较时，可以自定义比较规则