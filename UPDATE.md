# 下一步计划

1.添加多种内置皮肤；

2.新开Vue3版本（考虑中）

# 版本更新笔记

## 0.1.10

修复close执行2次，$layer.close和$layer.closeAll改为promise，新增parent，isOutAnim配置项,$layer.reset添加返回值

### isOutAnim - 关闭动画

类型：Boolean/类型：Number，默认：true

默认情况下，关闭层时会有一个过度动画。如果你不想开启，设置 isOutAnim: false 即可

### $layer.close(index)

参数：窗口标识,类型：Promise,返回值：Boolean,标识执行结果，true代表成功关闭，false表示该窗口不存在或者已经是关闭状态

关闭layer窗口的方法

修改为Promise类型，主要是针对使用了关闭动画后，需要关闭layer后立即重新打开的情况，虽然解决了异步产生的问题，但关闭的动画不会消失；

不使用关闭动画则无此问题，设置isOutAnim=0

```js
async open() {
      await this.$layer.close(this.layer2);
      this.layer = this.$layer();
    }
```

### $layer.closeAll()

参数：无，类型：Promise,返回值：Boolean数组,标识每个窗口的执行结果，true代表成功关闭，false表示该窗口不存在或者已经是关闭状态

关闭所有layer窗口的方法

修改为Promise类型，主要是针对使用了关闭动画后，需要在打开某个窗口前关闭所有其他窗口的情况，若需要打开的窗口已经是打开状态，则会关闭后重新打开；

不使用关闭动画则无此问题，设置isOutAnim=0


```js
async open() {
      await this.$layer.closeAll();
      this.layer = this.$layer();
    }
```

### parent - Vue组件挂载

设置parent:this,将当前layer组件挂载在当前使用的组件下，可在vue调试工具中显示，方便调试，0.1.20新增此项，0.1.20之前，在content.parent配置，让内容区的子

组件挂载在在当前使用的组件下，现在默认挂载在layer下，使用设置parent:this后，可以在调试工具中看到清晰的结构，如下所示：

```html
<App>
  <LayerVue>
    <Mycomponent>
```

注意：此项和el-父元素选择器不同，parent设置是关乎vue调试工具中能不能显示layer，el设置的是真实dom元素渲染的位置

## 0.1.9

添加多种动画，添加自定义最小高宽

### anim - 动画效果

类型：Number，默认：1

| 值      | 备注           |
| :------ | :------------- |
| anim: 1 | 平滑放大。默认 |
| anim: 2 | 上方滑下       |
| anim: 3 | 下方飞入       |
| anim: 4 | 左侧滑入       |
| anim: 5 | 左侧旋转飞入   |

### minarea - 最小宽高

类型：Array，默认：[300,200]，单位：px

设置窗口最小高宽

## 0.1.6


## 0.1.4

修复bug :网页引入时找不到子元素

## 0.0.7

利用回调函数剔除Vue代码的引入

## 0.0.5

初步实现Layer挂载到Vue的实例上

## 0.0.4

加载前隐藏

## 0.0.1

删除包@finalsummer/vuelayer,更改为layer-vue，发布0.0.1版本

配置项如下：

```vue
	title: { type: [String, Boolean], default: '信息' },
    area: { type: [String, Array], default: 'auto' },
    offset: { type: [String, Array, Number], default: 'auto' },
    settop: { type: Function },
    moveOut: { type: Array, default: () => [0, 0, 0, 0] },
    visible: {},
    zindex: { type: Number, default: 1 },
    closeBtn: { type: [Number, Boolean], default: true },
    maxmin: { type: Array, default: () => [0, 0] },
    resize: { type: [Number, Boolean], default: true },
    lbresize: { type: [Number, Boolean], default: true },
    moveEnd: { type: Function },
    move: { type: String, default: '.vue-layer-title' },
    cancel: { type: Function },
    success: { type: Function },
    end: { type: Function },
    full: { type: Function },
    min: { type: Function },
    restore: { type: Function },
    destroyOnClose: { type: [Number, Boolean], default: false },
    amin: { type: Number, default: 0 },
    content:{}
```
