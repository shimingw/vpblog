---
title: "ES6学习笔记"
date: 2019-01-13
permalink: "2019-01-13-JavaScript-ES6学习笔记"
---


# ES6

## ES6 声明变量的六种方法

ES5 只有两种声明变量的方法：`var`命令和`function`命令。ES6除了添加`let`和`const`命令，后面章节还会提到，另外两种声明变量的方法：`import`命令和`class`命令。所以，ES6 一共有6种声明变量的方法。



## Map  的 for of  循环

```js
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for(let [key,value] of map){
    console.log(key + "  is  " + value);
}
```



# [函数的扩展]

1、函数传参，可以设置默认参数

2、引入rest参数代替arguments对象

```js
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}

add(2, 5, 3) // 10
```

3、字符串

```js
3.1可以将传入的字符串解析成数组
function test(str) {
    console.log([...str]);
    console.log(str.length);
    return [...str].length;
}
var x = test("qwe");
console.log(x);

3.2使用...解析字符串与split解析。
let str = 'x\uD83D\uDE80y';
str.split('').reverse().join('')
[...str].reverse().join('')

3.3实现了Iterator接口的对象
实现了Iterator接口的对象可以直接使用[...]来转化成数组
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
没有部署Iterator的对象
比如

```

4、箭头函数

```js
4.1箭头函数中的this指向定义时所在的作用域
es5的匿名函数中的this指向运行时所在的作用域

var handler = {
        id: '123456',
        init: function() {
            document.addEventListener('click', event => {
                console.log(this);
                this.doSomething(event.type);
            }, false);
        },
        initSec: function() {
            document.addEventListener('click',function (event) {
                console.log(this);
                this.doSomething(event.type)
            });
        },

        doSomething: function(type) {
            console.log('Handling ' + type  + ' for ' + this.id);
        }
    };

handler.init();
handler.initSec();

4.2  arguments、super、new.target 在箭头函数中不存在
4.3  箭头函数不能用call()、apply()、bind()这些方法去改变this的指向
```
### 尾调用的使用及优化

```js
尾调用不需要保存外部函数的调用帧，可以提高性能
最后返回的是一个函数

我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。等到B运行结束，将结果返回到A，B的调用帧才会消失。如果函数B内部还调用函数C，那就还有一个C的调用帧，以此类推。所有的调用帧，就形成一个“调用栈”（call stack）。
尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
```

### 尾递归

```js
这种递归需要保存n个调用记录，会占用过多的内存
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(5) // 120

尾递归调用方法
返回的函数中total用来保存结果值
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

```

# 数组的扩展

```js
copyWithin,拷贝数组
[].copyWithin(target, start = 0, end = this.length)
```

```js
find() 和 findIndex()
find:可以过滤筛选数组
findIndex:返回第一个匹配中的数组中值得index
```

```js
fill():使用给定值填充数组
fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```

```js

()，keys() 和 values()
三种数组的遍历方法
for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
```

```js
includes()
查看数组中是否含有该值，返回布尔值
```

```js
filter() 方法
如果return true则保留
如果return false则不保留
array.filter(function(){
  return false/true
})
```

# 对象的扩展

```js
var cart = {
        _wheels: 4,

        get wheels () {
            return this._wheels;
        },

        set wheels (value) {
            if (value < this._wheels) {
                throw new Error('数值太小了！');
            }
            this._wheels = value;
        }
    };

    console.log(cart._wheels);

cart.wheels = 1;
```

```js
注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。
```
```js
getOwnPropertyDescriptor
获取对象上某个属性的，默认熟悉
```

```js
Object.is()
比较两个值是否完全相等
相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0
Object.is('foo', 'foo')完美解决了这个问题
```

```js
Object.assign()
对象合并方法，第一个参数是目标对象，后面的参数都是源对象。
也可以用作对象拷贝。是浅拷贝，得到一个该对象的引用

1、可以为对象添加属性
    class Point {
      constructor(x, y) {
        Object.assign(this, {x, y});
      }
    }
2、可以为对象添加方法
    Object.assign(SomeClass.prototype, {
      someMethod(arg1, arg2) {
        ···
      },
      anotherMethod() {
        ···
      }
    });
   
```

```js
getPrototypeOf 从对象捕获原型。从而给原型添加方法
var spaghetti = new Pasta("wheat", 0.2);
// Obtain the prototype from the object.
var proto = Object.getPrototypeOf(spaghetti);
另外，ES6规定，所有Class的原型的方法都是不可枚举的。
```

```js
属性的遍历
1、for...in
for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
2、Object.keys(obj)
Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。
3、Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）。
4、Object.getOwnPropertySymbols(obj)
Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。
5、Reflect.ownKeys(obj)
Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举。
```

```js
获取已数组的形式获取对象的所有值
Object.keys():获取所有key
Object.values():获取所有value
Object.entries():获取所有key和value
```

```js
Null传导运算符
const firstName = message?.body?.user?.firstName || 'default';
上面代码有三个?.运算符，只要其中一个返回null或undefined，就不再往下运算，而是返回undefined。
```



# Symbol

```js
var s1 = Symbol();
var s2 = Symbol();
Object.is(s1,s2)	//false
```

```js
作为属性名的 Symbol 
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
# Set和Map数据结构

```js
提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
```

```js
Set 实例的属性和方法：
new Set()
add(value)：		添加某个值，返回Set结构本身。
delete(value)：	删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：		返回一个布尔值，表示该值是否为Set的成员。
clear()：		清除所有成员，没有返回值。
```

```js
Array.from方法可以将 Set 结构转为数组。
```

```js
遍历操作：
keys()：		返回键名的遍历器
values()：	返回键值的遍历器
entries()：	返回键值对的遍历器
forEach()：	使用回调函数遍历每个成员
```

```js
WeakSet：
new WeakSet()
WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

```

```js
Map：
new Map()
json一定要使用字符串作为key值
map可以使用对象作为key值

const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content')
m.get(o) // "content"
```
```js
[]传值、...传值  方法
const items = [
    ['name', '张三',111111],
    ['title', 'Author',22222222]
];
items.forEach(([a1,a2,a3],b,c)=>{
    console.log("a",a1)
    console.log("a",a2)
    console.log("a",a3)
    console.log("b",b)
    console.log("c",c)
})
items.forEach((...key)=>{
    console.log(key)
})
```

## WeakMap

```js
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 
```

```js
WeakMap与Map的区别有两点:
1、WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
2、WeakMap的键名所指向的对象，不计入垃圾回收机制。
3、没有遍历操作，没有size属性
```

```js
WeakMap的设计目的:
有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用
一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放内存。
内部机制:
它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
```

```js
WeakMap 应用的典型场合就是 DOM 节点作为键名
使用weakmap为元素添加事件，当元素被移除后该事件会自动移除，不会造成内存泄漏
const listener = new WeakMap();

listener.set(element1, handler1);
listener.set(element2, handler2);

element1.addEventListener('click', listener.get(element1), false);
element2.addEventListener('click', listener.get(element2), false);

```









# Proxy

```js
概述:
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
```

```js
var proxy = new Proxy(target, handler);
new Proxy()表示生成一个Proxy实例
target:参数表示所要拦截的目标对象.
handler:参数也是一个对象，用来定制拦截行为。
例如:
var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});
```

```js
拦截方法:
（1）get(target, propKey, receiver)

拦截对象属性的读取，比如proxy.foo和proxy['foo']。

最后一个参数receiver是一个对象，可选，参见下面Reflect.get的部分。

（2）set(target, propKey, value, receiver)

拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。

（3）has(target, propKey)

拦截propKey in proxy的操作，返回一个布尔值。

（4）deleteProperty(target, propKey)

拦截delete proxy[propKey]的操作，返回一个布尔值。

（5）ownKeys(target)

拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。

（6）getOwnPropertyDescriptor(target, propKey)

拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

（7）defineProperty(target, propKey, propDesc)

拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

（8）preventExtensions(target)

拦截Object.preventExtensions(proxy)，返回一个布尔值。

（9）getPrototypeOf(target)

拦截Object.getPrototypeOf(proxy)，返回一个对象。

（10）isExtensible(target)

拦截Object.isExtensible(proxy)，返回一个布尔值。

（11）setPrototypeOf(target, proto)

拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。

如果目标对象是函数，那么还有两种额外操作可以拦截。

（12）apply(target, object, args)

拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

（13）construct(target, args)

拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
```

```js
Object.create()可以继承proxy对象的规则
let obj = Object.create(proto);
```





# Reflect

```js
Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为
```

```js
静态方法:
Reflect对象一共有13个静态方法。
  Reflect.apply(target,thisArg,args)
  Reflect.construct(target,args)
  Reflect.get(target,name,receiver)
  Reflect.set(target,name,value,receiver)
  Reflect.defineProperty(target,name,desc)
  Reflect.deleteProperty(target,name)
  Reflect.has(target,name)
  Reflect.ownKeys(target)
  Reflect.isExtensible(target)
  Reflect.preventExtensions(target)
  Reflect.getOwnPropertyDescriptor(target, name)
  Reflect.getPrototypeOf(target)
  Reflect.setPrototypeOf(target, prototype)
```









# Promise 对象

```js
使用方法:
  var promise = new Promise(function(resolve, reject) {
      if(0){
          resolve(1111111111);
      }else{
          reject(2222222222);
      }
  });

执行:
  promise.then(function(value) {
      // success
      console.log("value",value)
  }, function(error) {
      // failure
      console.log("error",error)
  });
或者这么写
  promise.then(function(value) {
    // success
    console.log("value",value)
}).catch(error => {
    // failure
    console.log("error",error)
});
```

```js
Promise.prototype.then() 
在then的方法里    throw new Error('test'); 会被catch捕捉到。
then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数
promise.then(function(value) {
    // success
    console.log("value",value)
    return "akjshdajksdh";
}).then(json=>{
    console.log("json",json)
}).catch(error => {
    // failure
    console.log("error",error)
});
```

```js
如果Promise状态已经变成Resolved，再抛出错误是无效的。
只能在then里抛出
```

```js
Promise.all() 
如果使用all()，就不需要再每个promise实例中写cathc方法。
Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）
例子:
const databasePromise = connectDatabase();
const booksPromise = databasePromise
  .then(findAllBooks);
const userPromise = databasePromise
  .then(getCurrentUser);
Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommentations(books, user));
上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommentations这个回调函数。
```

```js
Promise.race()
var p = Promise.race([p1, p2, p3]);
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
```

```js
Promise.resolve()
作用:将现有对象转为Promise对象.
（1）参数是一个Promise实例:
如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
（2）参数是一个thenable对象
thenable对象指的是具有then方法的对象，比如下面这个对象。
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
（3）参数不是具有then方法的对象，或根本就不是对象:
如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。
var p = Promise.resolve('Hello');
p.then(function (s){
  console.log(s)		//Hello
});
```

```js
Promise.reject()
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected
与上述的方法类似
```

```js
done()方法	(问题！！！！)
done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
  asyncFunc()
    .then(f1)
    .catch(r1)
    .then(f2)
    .done();
```

```js
finally() 	(问题！！！！)
finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
```

# Iterator 和 for...of 循环

```js
任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。
```

```js

必须具备Iterator属性的对象才可以使用for of循环
1、数组。
	配合keys()，values()，entries()丰富for--of遍历的方法
2、字符串
	每个字符串被当做一个值来进行遍历
3、对象
	必须配合object下的keys()，values()，entries()方法，对对象进行转换，对转换后值得值进行遍历。
```

```js
NodeList对象:
节点的集合
具备Iterator接口并且具备数组所拥有的属性
但是是死的对象，不会因为节点跟新而变化

HTMLCollection对象:
具备Iterator接口,但是不具备数组的属性
但他是活的; 当底层文档更改时，它会自动更新。
```

# Generator 函数的语法

```js
Generator 函数是一个普通函数，但是有两个特征:
一是，function关键字与函数名之间有一个星号；
二是，函数体内部使用yield表达式，定义不同的内部状态

知识点:
Generator只有调用next方法时，函数才会执行。

```

```js
next()方法可以传值
用来表示上文中yield的值
```
### 这两个章节没有细看

```js
Generator 函数的语法
Generator 函数的异步应用
```







# Class 的基本语法

```js
ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
```

```js
constructor 方法
通过new命令生成对象实例时，自动调用该方法
```

```js
类的实例对象
实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
constructor中定义的属性方法在其本身
其他的属性方法都在class上
```

```js
Class 表达式
这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

```js
Class 的取值函数（getter）和存值函数（setter）
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}
```

```js
Class 的 Generator 方法
如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
```

```js
Class 的静态方法 
如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
```
```js
静态属性添加方法(不能被继承)
class Foo {
}
Foo.prop = 1;
```

```js
new.target属性
可以判断方法被执行的时候是不是被new出来的
还是直接执行的
```
# Class 的继承

```js
super关键字
constructor方法和toString方法之中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。
子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
重点：
1、this是调用子类的方法
2、super是调用父类的方法
3、子类的constructor方法中的super()方法是调用父类的constructor方法
4、子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例

class Point {
    test(){
        console.log("qew")
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        console.log(this)
        console.log(x)
        console.log(y)
        console.log(color)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }

    mix () {
        super.test();
    }
}

var qqq = new ColorPoint(1,2,3)
qqq.mix();
```

```js
es5的继承方式
1、创造子类的实例对象this
2、将父类的方法添加到this上面(Parent.apply(this))

es6的继承方式
1、先创造父类的实例对象this（所以必须先调用super方法）
2、再用子类的构造函数修改this
```

```js
super 关键字
1、super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
2、super作为对象时，在普通方法中，指向父类的原型对象；在静态方法(static)中，指向父类。
3、通过super调用父类的方法时，super会绑定子类的this。
4、super 对象只可以调用父类上prototype下的属性和方法
```
### 类的 prototype 属性和__proto__属性

```js
1、子类的__proto__属性，表示构造函数的继承，总是指向父类。
2、子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
```

### extends 的继承目标

### 实例的 __proto__ 属性 

### 原生构造函数的继承

```js
原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。
Boolean()
Number()
String()
Array()
Date()
Function()
RegExp()
Error()
Object()
以前，这些原生构造函数是无法继承的
现在可以使用extends继承
```





# 修饰器(ES2017)

1、类的修饰

```js
为类添加新的属性方法
```





# Module 的语法

### 1、概述

```js
1、ES6 模块的设计思想，是尽量的静态化

2、CommonJS 和 AMD 模块，都只能在运行时确定这些东西
	let { stat, exists, readFile } = require('fs');
	整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取3个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
	
3、通过export命令显式指定输出的代码，再通过import命令输入。
	import { stat, exists, readFile } from 'fs';
	从fs模块加载3个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，效率要比 CommonJS 模块的加载方式高
```

### 3、export 命令

```js
export命令用于规定模块的对外接口
import命令用于输入其他模块提供的功能。
```

```js
export写法
1、export var firstName = 'Michael';
	export var lastName = 'Jackson';
2、var firstName = 'Michael';
	var lastName = 'Jackson';
	export {firstName, lastName};
3、export还可以直接输出类或者方法
4、使用as关键字重命名
	export {
	  v1 as streamV1,
	};
```

### 4、import 命令

```js
1、import {firstName, lastName, year} from './profile';
2、import { lastName as surname } from './profile';
3、import命令是编译阶段执行的，在代码运行之前
4、import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
5、import 'lodash';
	仅仅执行lodash模块
```

### 5、模块的整体加载

```js
import * as circle from './circle';
将circle这个文件的输出（类、方法、变量）全部定义到circle这个对象下面
```

### 6、export default 命令

```js
export default function () {
  console.log('foo');
}
加载的时候可以指定任意名字
```

### 7、export 与 import 的复合写法

```js
export { foo, bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';
export { foo, bar };
```


# Module 的加载实现

#### 1、浏览器加载

```js
defer：渲染完再执行、如果有多个defer脚本，会按照它们在页面出现的顺序加载
async：下载完就执行、不能保证加载顺序
浏览器对于带有type="module"的<script>，都是异步加载
等同于打开了<script>标签的defer属性
```

#### 2、ES6 模块与 CommonJS 模块的差异

```js
1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJS 模块输出的是值的拷贝
import	模块输出的值是引用值(
	所有的变量与类都是引用的同一个
)

```

#### 3、Node 加载（es6模块加载与commonJS的差异）

```js
1、Node 对 ES6 模块的处理比较麻烦
	CommonJS 模块格式，与 ES6 模块格式是不兼容的
	目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案
2、在静态分析阶段，一个模块脚本只要有一行import或export语句，Node 就会认	为该脚本为 ES6 模块，否则就为 CommonJS 模块
3、如果不输出任何接口，但是希望被 Node 认为是 ES6 模块，可以在脚本中加一行	语句。
	export {};
4、ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异。
5、module.exports等同于export default、只能输出一次。
```

#### 4、import 命令加载 CommonJS 模块

```js
1、CommonJS 模块输出都定义在module.exports这个属性上面
2、使用import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default
```

#### 5、require 命令加载 ES6 模块

```js
require在家es6模块时，会把该模块中的所有属性方法成为输入对象的属性
```
#### 6、循环加载

```js
CommonJS模块的加载原理
1、CommonJS的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象
2、由于CommonJS模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。
```

```js
ES6 模块的循环加载
ES6模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
```

# 编程风格

#### 1、块级作用域

```js
（1）let 取代 var
（2）全局常量和线程安全
	在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。
```

#### 2、字符串

```js
静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
`反引号内可以使用${}来设置变量
const b = `foo${a}bar`;
```

#### 3、解构赋值

```js
1、使用数组成员对变量赋值时，优先使用解构赋值。
	数组：const [first, second] = arr;
	对象：const { firstName, lastName } = obj;(obj中必须包含这两key值)
    // best
    function getFullName({ firstName, lastName }) {
    }
2、对函数返回对象的解构赋值
    function processInput() {
        let left = {
            name:1
        };
        let right = {
            name:2
        };
        return { left, right };
    }
    const {left,right} = processInput();
```

#### 4、对象

```js
1、单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
    // good
    const a = { k1: v1, k2: v2 };
    const b = {
      k1: v1,
      k2: v2,
    };
    
2、对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
3、如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。
4、对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。
    var ref = 'some value';
      var obj = {
      ref
    };
```
#### 5、数组

```js
1、使用扩展运算符（...）拷贝数组。
2、使用Array.from方法，将类似数组的对象转为数组。
```
#### 6、函数

```js
1、立即执行函数可以写成箭头函数的形式。
  (() => {
    console.log('Welcome to the Internet.');
  })();
  
2、箭头函数中的this与普通函数中的this(调用和定义的区别)
	箭头函数中的this
	1、总是代表它的直接调用者, 例如 obj.func ,那么func中的this就是obj
	2、在默认情况(非严格模式下,未使用 'use strict'),没找到直接调用者,则this指的是 window
	3、在严格模式下,没有直接调用者的函数中的this是 undefined
	4、使用call,apply,bind(ES5新增)绑定的,this指的是 绑定的对象

	普通函数中的this
	1、函数被定义时的this指向
```

#### 7、Map结构

```js
注意区分Object和Map，只有模拟现实世界的实体对象时，才使用Object。如果只是需要key: value的数据结构，使用Map结构。因为Map有内建的遍历机制。
```

#### 8、class

```js
1、总是用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解。
2、使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。
```

#### 9、模块

```js
1、Module语法是JavaScript模块的标准写法，坚持使用这种写法。使用import取代require。
2、使用export取代module.exports。
3、如果模块只有一个输出值，就使用export default
4、如果模块默认输出一个函数，函数名的首字母应该小写。
5、如果模块默认输出一个对象，对象名的首字母应该大写。
```

#### 10、ESLint的使用

```js
ESLint是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
```







# 读懂 ECMAScript 规格







