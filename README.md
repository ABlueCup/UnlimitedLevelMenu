### 无限层级菜单(Unlimited Level Menu)
#### 效果
点击当前菜单，如果当前菜单，如果当前菜单有子菜单，当前状态是展开，则折叠，当前状态是折叠，则展开。

#### 结构
```
开发部门
    前端组
        PC开发
        移动端开发
        node开发
        native-app开发
    后端组
        服务器开发
        后台开发
        公共技术研发团队
    数据库组
        大数据
        数据分析
测试部门
    灰盒测试
    观感测试
运维部门
    线下运维
        OA办公运维
        机房运维
    线上运维
设计部门
    原画师
    视频设计师
    UE体验师
```
#### 思路
事件委托机制
动画： slideUp slideDown slideToggle

点击当前菜单，通过冒泡传播机制，触发容器的点击事件，容器通过ev.target判断是事件源是谁，然后执行相应的方法

表示展开还是折叠的符号 + -， 放在em标签中， 当前菜单标题放在span中，子菜单放在ul中 <li><span><em></em>title</span><ul></ul></li>

ev.target不能是li, 里面包含的元素太多，操作起来比较复杂，我们只能选择给标题添加span，让操作变得更精确

不需要管它是哪一个span， 直接判断当前状态是折叠还是展开，然后再判断它后面有无ul, 然后执行方法

判断折叠 or 展开  em的class判断 fold是折叠，unfold展开

判断它后面后没有ul, $(ev.target).next() 是否存在，$(ul).toggle, 修改em内的值，通过更换class修改背景图片，

图标 16 * 16  
- left: -42px, top: -28px
+ left: -59px, top: -28px
