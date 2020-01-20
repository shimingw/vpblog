---
title: "three.js 学习笔记"
date: 2018-06-05
permalink: "2018-06-05-数据可视化-three.js 学习笔记"
---


# three.js 学习笔记

日期：2018-6-5

### 三大组件

场景（scene）、相机（camera）和渲染器（renderer）。有了这三样东西，才能将物体渲染到网页中去。

场景和相机代表了3D观察空间和数据模型，渲染器则包含了WebGL绘图上下文和着色器。

### 场景

场景就只有一种

```
var scene = new THREE.Scene();
```



### 相机

```
透视相机，也就是类似于人眼观察的方式

PerspectiveCamera("field of view", "aspect ratio", "near clipping plane", "far clipping plane")	

```



### 渲染器

```
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

染器renderer的domElement元素，表示渲染器中的画布，所有的渲染都是画在domElement上的，所以这里的appendChild表示将这个domElement挂接在body下面，这样渲染的结果就能够在页面中显示了。
```



### 添加物体到场景中

```
var geometry = new THREE.CubeGeometry(1,1,1); 	//盒子模型
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});	//材料着色
var cube = new THREE.Mesh(geometry, material); 	
scene.add(cube);

CubeGeometry(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides)
width：立方体x轴的长度
height：立方体y轴的长度
depth：立方体z轴的深度，也就是长度
```



### 渲染

```
renderer.render(scene, camera);

渲染函数的原型如下：
render( scene, camera, renderTarget, forceClear )

scene：前面定义的场景
camera：前面定义的相机
renderTarget：渲染的目标，默认是渲染到前面定义的render变量中
forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。
```



### 渲染循环

