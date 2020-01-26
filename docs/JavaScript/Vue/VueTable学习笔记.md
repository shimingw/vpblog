---
title: "VueTable"
date: 2017-12-06
permalink: "2017-12-06-JavaScript-VueTable"
---


# VueTable

#### 可以类似bootstrap table 一样传入表格需要字段



#### 使用回调选项格式化字段

```
1、allcap
	{
                        name:'name',
                        callback: 'allcap',
                        titleClass: 'center aligned',
                        dataClass: 'center aligned',
//                        callback: 'genderLabel'

	}
	只可以返回字符串
	
2、genderLabel
	可以返回HTML标签
	
3、在字段中添加属性可以操作某个具体字段
	visible:false	隐藏该列
	
4、使用track-by来指定索引字段
    <vuetable ref="vuetable"
        //...
        track-by="item_code"
        //...
      ></vuetable>
	 
	 
	 
```





### 分页

```
Vuetable使用的分页信息

    total - 可用记录总数
    per_page - 此请求/页面中返回的记录数
    current_page - 这个数据块的当前页面
    last_page - 这个数据的最后一页
    next_page_url - 下一页的URL
    prev_page_url - 上一页的URL
    from - 此页面的开始记录
    to - 这个页面的结束记录

如果您使用具有不同数据结构或使用不同变量名称的服务提供商的API，则必须使用transform()hook将您收到的数据结构转换为Vuetable可以使用的数据结构。
```



### 修改分页显示文案

```
VuetablePaginationInfoMixin.vue
修改上述文件中的描述内容
```

