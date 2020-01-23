---
title: "sql学习笔记"
date: 2018-05-06
permalink: "2018-05-06-数据库-sql学习笔记"
---



# select语句

## 筛选字段

```sql
SELECT column_name,column_name

FROM table_name;
```



### 选择所有

SELECT * FROM Websites;

选择不重复的

```sql
select distinct sex from test;
```

筛选条件

```sql
Select * from emp where sal > 2000 and sal < 3000;

Select * from emp where sal > 2000 or comm > 500;

select * from test where not name > 110;

Select * from emp where comm is null;

Select * from emp where sal in (5000,3000,1500);

```

查询 EMP 表 SAL 列中等于 5000，3000，1500 的值。

Like模糊查询

```sql
Select * from emp where ename like 'M%';
```

order by排序

按照两个字段进行排列是什么意思？

select * from test order by name;升序排列

select * from test order by name desc;降序排列

SQL INSERT INTO 语法

INSERT INTO table_name (column1,column2,column3,...)

VALUES (value1,value2,value3,...);



## update

```sql
update test set sex='hahahahah' where name='smw';
```

在更新记录时要格外小心！在上面的实例中，如果我们省略了 WHERE 子句，如下所示：

```sql
UPDATE Websites
SET alexa='5000', country='USA'
```

执行以上代码会将 Websites 表中所有数据的 alexa 改为 5000，country 改为 USA。

执行没有 WHERE 子句的 UPDATE 要慎重，再慎重。



## DELETE

```
DELETE FROM table_name
WHERE some_column=some_value;
```

|      | **请注意 SQL DELETE 语句中的 WHERE 子句！**WHERE 子句规定哪条记录或者哪些记录需要删除。如果您省略了 WHERE 子句，所有的记录都将被删除！ |
| ---- | :--------------------------------------- |
|      |                                          |



## SELECT TOP, LIMIT, ROWNUM

选择前十条

```sql
select  * from test limit 10;
```

## like

模糊查询

```
SELECT * FROM test	WHERE name LIKE '%oo%';
```

## IN 操作符实例

下面的 SQL 语句选取 name 为 "Google" 或 "菜鸟教程" 的所有网站：

```sql
SELECT * FROM Websites	WHERE name IN ('Google','菜鸟教程');
```



## BETWEEN 与NOT BETWEEN

在这个范围内、与不在这个范围内的查询

也可以使用文本值，会使用code值去查

```
SELECT * FROM Websites	WHERE alexa BETWEEN 1 AND 20;
SELECT * FROM Websites	WHERE alexa NOT BETWEEN 1 AND 20;
```



## SQL 别名

Concat可以使两个字段一起查出来

```sql
select name , CONCAT(sex,type) as info from test;
```

多表查询语句。使用第一张表的字段匹配第二张表的字段。来进行查询

```sql
select i.hobby from test as t , test_info as i where t.name=i.name;
```



# SQL 连接(JOIN)

SQL JOIN 子句用于把来自两个或多个表的行结合起来，基于这些表之间的共同字段。

最常见的 JOIN 类型：**SQL INNER JOIN（简单的 JOIN）**。 SQL INNER JOIN 从多个表中返回满足 JOIN 条件的所有行。

```sql
select t.type , i.name ,i.hobby from test as t inner join test_info as i  on t.name = i.name;
```

不同的jion

- **INNER JOIN**：如果表中有至少一个匹配，则返回行
- **LEFT JOIN**：即使右表中没有匹配，也从左表返回所有的行
- **RIGHT JOIN**：即使左表中没有匹配，也从右表返回所有的行
- **FULL JOIN**：只要其中一个表中存在匹配，则返回行



## SQL UNION 操作符

union 选取不同的

union 允许选取重复的值

```sql
select name  from test 
union
select name  from test_info 

select name , sex from test where name = 'smw'
union all
select name , hobby from test_info where name = 'smw';
```



## SQL SELECT INTO 语句

INSERT INTO SELECT 语句从一个表复制数据，然后把数据插入到一个已存在的表中。

但是字段个数必须相同

```sql
insert into test_info select * from test;
```



## SQL CREATE TABLE 语句

```sql
CREATE TABLE test3
(
PersonID int primary key,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
);
```



## SQL FOREIGN KEY 约束

测试失败

约束类的创建略过



## SQL CREATE INDEX 语句

没理解



## SQL ALTER TABLE 语句

用于在已有的表中添加、删除或修改列。还可以改变列的数据类型

添加列

```sql
ALTER TABLE table_name	ADD column_name datatype
```

删除列

```sql
ALTER TABLE table_name	DROP COLUMN column_name
```



## SQL AUTO INCREMENT 字段

Auto-increment 会在新记录插入表中时生成一个唯一的数字。

```sql
CREATE TABLE Persons
(
ID int NOT NULL AUTO_INCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (ID)
)
```



## SQL NULL 函数

查出来如果是null，可以自定义成自己希望的那个值



### SQL 创建表

```sql
CREATE TABLE IF NOT EXISTS `use` (
	`id` INT  UNSIGNED  AUTO_INCREMENT,
    `name` VARCHAR (100) NOT NULL,
    `part` INT  UNSIGNED  NOT NULL,
    `type` VARCHAR (100) NOT NULL,
    `create_date` DATA
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8
```



INSERT INTO `use` ('name','part','type','create_date')
VALUES
('qh',2,'php',now());





Order by 查询两列

```sql
SELECT * FROM Websites
ORDER BY country,alexa;
```





### join

两张表join的时候，inner，left ， right ，full ，即以哪张表为基准来

显示查询出来的数据



SELECT * FROM `use` as u inner JOIN pname as p ON u.part = p.type;

使用表的别名来查询 一样

```sql
.col-md-offset-4{margin-left:33.33333333%;margin-top: 33.333333%}
```





SELECT * FROM `use` LEFT JOIN pname ON `use`.part = pname.type UNION SELECT * FROM `use` RIGHT JOIN pname on `use`.part = 

​                       -> pname.type



shanghu.shuzutech.com:商户登录页面
qiye.shuzutech.com：渠道登录页面
yunying.shuzutech.com：数族角色登录页面



```sql
pip uninstall powerline-status
/usr/local/lib/python2.7/site-packages
```



## SQL SELECT INTO

ALTER TABLE Orders
ADD FOREIGN KEY (P_Id)
REFERENCES Persons(P_Id)



ALTER TABLE Orders
ADD CONSTRAINT fk_PerOrders
FOREIGN KEY (P_Id)
REFERENCES Persons(P_Id)



### FOREIGN KEY 约束



create table my_student(
`id` int unsigned not null auto_increment primary key,
`name` varchar(25) not null comment 'student name',
`pid` int unsigned not null comment 'student profile id',
`cid` int unsigned not null comment 'student class id',
key `cid`(`cid`)，
key `pid`(`pid`)
)engine=InnoDB default charset=utf8 auto_increment=1;



**CREATE** **TABLE** `Persons`(

`P_Id` int **NOT**  null,  

name VARCHAR(11) **not** NULL , address VARCHAR(11) **not** NULL,**PRIMARY** **KEY** (P_Id));



(1452, u'Cannot add or update a child row: a foreign key constraint fails (`smw`.`orders`, CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`P_Id`) REFERENCES `Persons` (`P_Id`))')







