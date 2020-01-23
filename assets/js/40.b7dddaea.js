(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{279:function(a,t,e){"use strict";e.r(t);var s=e(2),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"python学习笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python学习笔记"}},[a._v("#")]),a._v(" python学习笔记")]),a._v(" "),e("h2",{attrs:{id:"函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[a._v("#")]),a._v(" 函数")]),a._v(" "),e("h3",{attrs:{id:"def"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#def"}},[a._v("#")]),a._v(" def")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("用来声明函数\ndef say_hello():\n\tprint('hello word')\n")])])]),e("h3",{attrs:{id:"global"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global"}},[a._v("#")]),a._v(" global")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("用来在函数内部声明引用全局变量\n")])])]),e("h3",{attrs:{id:"可以为参数设置默认值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以为参数设置默认值"}},[a._v("#")]),a._v(" 可以为参数设置默认值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("def func(a, b=5, c=10):\n传值时也可以使用这样的方法\nfunc(c=50, a=100)\n")])])]),e("h3",{attrs:{id:"param"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[a._v("#")]),a._v(" *param")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("从此处开始直到结束的所有位置参数\n（ Positional Arguments） 都将被收集并汇集成一个称为“param”的元组（ Tuple） \n")])])]),e("h3",{attrs:{id:"param-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#param-2"}},[a._v("#")]),a._v(" **param")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("从此处开始直至结束的所有关键字\n参数都将被收集并汇集成一个名为 param 的字典（ Dictionary）\n")])])]),e("h3",{attrs:{id:"none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[a._v("#")]),a._v(" None")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("如果一个函数没有返回值，则print返回值为None\n每一个函数都在其末尾隐含了一句 return None\n")])])]),e("h3",{attrs:{id:"import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[a._v("#")]),a._v(" import")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("同js的import功能\n")])])]),e("h3",{attrs:{id:"pyc-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pyc-文件"}},[a._v("#")]),a._v(" .pyc 文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("更快速的完成模块导入\n")])])]),e("h3",{attrs:{id:"from-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-import"}},[a._v("#")]),a._v(" from ... import ...")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("引入模块中的某个功能\n同js中的import from\n")])])]),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" "),e("strong",[a._v("name")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("__name__ == '__main__'\n如果相等表示模块是独立运行的\n")])])]),e("h3",{attrs:{id:"dir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dir"}},[a._v("#")]),a._v(" dir()")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import my_module_one\nprint(dir(my_module_one))\n显示当前模块的属性和方法\n")])])]),e("h3",{attrs:{id:"tuple"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tuple"}},[a._v("#")]),a._v(" tuple")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("可以用索引获取\nzoo = ('python', 'elephant', 'penguin')\nnew_zoo = 'monkey', 'camel', zoo\n")])])]),e("h3",{attrs:{id:"元组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元组"}},[a._v("#")]),a._v(" 元组")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("key、value的形式\nab = {\n'Swaroop': 'swaroop@swaroopch.com',\n'Larry': 'larry@wall.org',\n'Matsumoto': 'matz@ruby-lang.org',\n'Spammer': 'spammer@hotmail.com'\n}\n")])])]),e("h3",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" list")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("类似js数组\n")])])]),e("h2",{attrs:{id:"project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[a._v("#")]),a._v(" project")]),a._v(" "),e("h3",{attrs:{id:"压缩文件的demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩文件的demo"}},[a._v("#")]),a._v(" 压缩文件的demo")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import os\nimport time\n\n# C:\\Users\\Administrator\\Desktop\\myNote\nsource = ['C:\\\\Users\\Administrator\\Desktop\\myNote']\ntarget_dir = 'C:\\\\Users\\Administrator\\Desktop'\ntarget = target_dir + os.sep + \\\n         time.strftime('%Y%m%d%H%M%S') + '.zip'\nprint(target)\n# 如果目标目录还不存在，则进行创建\nif not os.path.exists(target_dir):\n    os.mkdir(target_dir)    # 创建目录\n\n# 5. 我们使用 zip 命令将文件打包成 zip 格式\nzip_command = 'zip -r {0} {1}'.format(target, ' '.join(source))\n\nprint('Zip command is:')\nprint(zip_command)\nprint('Running:')\n\nif os.system(zip_command) == 0:\n    print('Successful backup to', target)\nelse:\n    print('Backup FAILED')\n")])])]),e("h2",{attrs:{id:"class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[a._v("#")]),a._v(" class")]),a._v(" "),e("h3",{attrs:{id:"类的基本用法（self，init）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类的基本用法（self，init）"}},[a._v("#")]),a._v(" 类的基本用法（self，"),e("strong",[a._v("init")]),a._v("）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("self：相当于js中的this指针，指向这个类\n__init__：相当于js中的类的，初始化方法。每次被初始化的时候都会执行的函数\n\nclass Person:\n    def __init__(self, name):\n        self.name = name\n\n    def say_hi(self):\n        print(self)\n        print('hello,my name is', self.name)\n\n\np = Person('shimingwen')\np.say_hi()\n")])])]),e("h3",{attrs:{id:"类变量与对象变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类变量与对象变量"}},[a._v("#")]),a._v(" 类变量与对象变量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('类变量：被所有实例化后的对象所共享，挂载在类下\n引用方法\n1、Robot.popluation\n2、self.__class__.population，因为每个对象都通过\nself.__class__ 属性来引用它的类\n\n对象变量：被实例化后的对象所拥有，挂载在self下\nclass Robot:\n    """表示有一个带有名字的机器人。"""\n    # 一个类变量，用来计数机器人的数量\n    population = 0\n\n    def __init__(self, name):\n        """初始化数据"""\n        self.name = name\n        print("Initializing {}".format(self.name))\n\n        # 当有人被创建时，机器人\n        # 将会增加人口数量\n        Robot.population += 1\n\n    def die(self):\n        """我挂了"""\n        print("{} is die".format(self.name))\n\n        Robot.population -= 1\n\n        if Robot.population == 0:\n            print("{} was this last one.".format(self.name))\n        else:\n            print("There are still {:d} robots working.".format(Robot.population))\n\n    def say_hi(self):\n        """来自机器人的问候\n        没问题，你做得到\n        """\n        print("Greetings, my masters call me {}".format(self.name))\n\n    @classmethod\n    def how_many(cls):\n        """打印出当前的人口数量"""\n        print("We have {:d} robots".format(cls.population))\n\n\ndroid1 = Robot("R2-D2")\ndroid1.say_hi()\nRobot.how_many()\n\ndroid2 = Robot("C-3PO")\ndroid2.say_hi()\nRobot.how_many()\n\n\nprint("\\nRobots can do some work here.\\n")\nprint("Robots have finished their work. So let\'s destroy them.")\ndroid1.die()\ndroid2.die()\n\nRobot.how_many()\n\n')])])]),e("h3",{attrs:{id:"classmethod-（类方法）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#classmethod-（类方法）"}},[a._v("#")]),a._v(" classmethod （类方法）")]),a._v(" "),e("h3",{attrs:{id:"staticmethod（-静态方法）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staticmethod（-静态方法）"}},[a._v("#")]),a._v(" staticmethod（ 静态方法）")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("只能存在于类下，不能被对象所继承的方法\n")])])]),e("h3",{attrs:{id:"继承"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[a._v("#")]),a._v(" 继承")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('子类继承父类，类似js的继承，寻找方法时，会从原型链线上查找\nclass SchoolMember:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n        print("school member:{}".format(self.name))\n\n    def tell(self):\n        print("Name : \'{}\' Age: \'{}\' ".format(self.name, self.age))\n\n\nclass Teacher(SchoolMember):\n    def __init__(self, name, age, salary):\n        SchoolMember.__init__(self, name, age)\n        self.salary = salary\n        print("Add teacher : {}".format(self.name))\n\n    # def tell(self):\n    #     SchoolMember.tell(self)\n    #     print("Salary: \'{:d}\'".format(self.salary))\n\n\nclass Student(SchoolMember):\n    def __init__(self, name, age, marks):\n        SchoolMember.__init__(self, name, age)\n        self.marks = marks\n        print("Add student: {}".format(self.name))\n\n    def tell(self):\n        SchoolMember.tell(self)\n        print(\'Marks: "{:d}"\'.format(self.marks))\n')])])]),e("h2",{attrs:{id:"输入与输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入与输出"}},[a._v("#")]),a._v(" 输入与输出")]),a._v(" "),e("h3",{attrs:{id:"open"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[a._v("#")]),a._v(" open")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("阅读模式（'r' ） ，写入模式（'w' ） 和追加模式（'a' ）\n文本模式（'t' ） 还是二进制模式（'b' ） 来读取\nhelp(open)\n\n默认为读取内容功能开启\nf = open('poem.txt')\n\n写入内容功能开启\nf = open('poem.txt', 'w')\nf.write(poem)\n\n读取每行内容\nline = f.readline()\n\n\n\n")])])]),e("h2",{attrs:{id:"pickle模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pickle模块"}},[a._v("#")]),a._v(" pickle模块")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("可以将数据写进文件，并且从文件中取出数据。\n要想将一个对象存储到一个文件中，我们首先需要通过 open 以写入（ write） 二进制\n（ binary） 模式打开文件，然后调用 pickle 模块的 dump 函数。这一过程被称作封装\n（ Pickling） 。\n接着，我们通过 pickle 模块的 load 函数接收返回的对象。这个过程被称作拆封\n（ Unpickling） 。\n")])])]),e("h2",{attrs:{id:"unicode-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unicode-模块"}},[a._v("#")]),a._v(" Unicode 模块")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('将 # encoding=utf-8 这一注释放置在我们程序的顶端。\n# encoding=utf-8\nimport io\nf = io.open("abc.txt", "wt", encoding="utf-8")\nf.write(u"Imagine non-English language here")\nf.close()\ntext = io.open("abc.txt", encoding="utf-8").read()\nprint(text)\n')])])]),e("h2",{attrs:{id:"异常处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[a._v("#")]),a._v(" 异常处理")]),a._v(" "),e("h3",{attrs:{id:"捕捉异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捕捉异常"}},[a._v("#")]),a._v(" 捕捉异常")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("try:\n    text = input('Enter something --\x3e ')\nexcept EOFError:\n    print('Why did you do an EOF on me?')\nexcept KeyboardInterrupt:\n    print('You cancelled the operation.')\nelse:\n    print('You entered {}'.format(text))\n")])])]),e("h3",{attrs:{id:"抛出异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抛出异常"}},[a._v("#")]),a._v(" 抛出异常")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("创建自定义异常类型，接收两个参数\n可以被except捕捉到\nclass errorInput(Exception):\n    def __init__(self, length, atleast):\n        Exception.__init__(self)\n        self.length = length\n        self.atleast = atleast\n\n\ntry:\n    text = input('enter something--\x3e')\n    if len(text) < 3:\n        raise errorInput(len(text), 3)\nexcept EOFError:\n    print('Why did you do an EOF on me?')\nexcept errorInput as ex:\n    print(('ShortInputException: The input was ' +\n           '{0} long, expected at least {1}')\n          .format(ex.length, ex.atleast))\nelse:\n    print('No exception was raised.')\n")])])]),e("h3",{attrs:{id:"with"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with"}},[a._v("#")]),a._v(" with")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('我们在 finally 代码块中编写的代码应该格外留心 __exit__ 方法的自动操作。这能\n够帮助我们避免重复显式使用 try..finally 语句。\nwith open("poem.txt") as f:\n    for line in f:\n        print(line)\n')])])]),e("h2",{attrs:{id:"标准库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准库"}},[a._v("#")]),a._v(" 标准库")]),a._v(" "),e("h3",{attrs:{id:"sys模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sys模块"}},[a._v("#")]),a._v(" sys模块")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("提供python版本相关信息\nimport sys\nprint(sys.version_info)\n")])])]),e("h3",{attrs:{id:"日志模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志模块"}},[a._v("#")]),a._v(" 日志模块")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);