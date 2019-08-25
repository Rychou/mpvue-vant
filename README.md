## 介绍

`mpvue-vant` 记录了我们团队开发中在 `mpvue` 中使用 `Vant Weapp` 组件库所踩下的坑，在这里分享给大家，让`mpvue` 开发者可以使用 `vant` 组件库进行开发，避免踩不必要的坑。

此教程是在[dov-yih](https://github.com/dov-yih)一同协助下完成。经过测试，[Vant Weapp](https://youzan.github.io/vant-weapp/#/intro)下所有组件都能够在`mpvue`中使用

- [demo 地址](./demo)
- [更新日志](./blog/update.md)

## 使用方法

### 安装组件库

> 以下两种方式没有本质区别，都是要将组件库复制到 `static` 目录下。

#### npm 安装

在根目录下，命令行执行：

```shell
npm i vant-weapp -S --production
```

安装完后，将 `node_modules/vant-weapp/dist` 目录下的所有文件，copy 至 `static/vant` 目录下。

#### 克隆仓库

在本地找个位置（非项目目录），在命令行执行以下命令：

```shell
git clone https://github.com/youzan/vant-weapp.git
```

克隆到本地后，将 `dist` 目录下的所有文件复制到你项目的 `/static/vant/` 目录下。

### 引入组件

在需要引入组件的页面目录下的 `main.json` 文件中，引入对应组件。

```json
{
  "usingComponents": {
    "van-button": "/static/vant/button/index",
  }
}
```

### 组件使用

```html
<van-button>测试</van-button>
```

## 注意事项

具体组件 api 文档参考[Vant Weapp](https://youzan.github.io/vant-weapp/#/intro)

### 使用方式

mpvue 和原生小程序的方式有所不同。可以参考[mpvue 文档](http://mpvue.com/)

**数据绑定**

原生小程序使用方式为

```html
<button value="{{value}}">按钮</button>
```

mpvue 使用方式

```html
<button v-bind:value="value">按钮</button>
<button :value="value">按钮</button> //或者
```

**事件监听**

原生小程序使用方式

```html
<button bind:click="onClick">按钮</button>
```

mpvue 使用方式

```html
<button @click="onClick">按钮</button>
```

**特殊的组件引入**

`vant` 中像 `notify` 这种操作反馈类的组件，都需要引入两个东西。

- 组件的引入，这个在`main.json`中引入。

- 方法的引入，需要在 `vue` 文件中 `import` 引入，值得注意的是，这里的引入不能使用绝对路径，可以用类似于这样的相对路径。

  ```js
  import Notify from '@/../static/notify/notify' //@是mpvue的一个别名，指向src目录
  ```

**事件的回调参数**

`mpvue` 中获取 `event` 值与原生小程序有所不同。举例：

```js
onChange (event) { // 获取表单组件filed的值
  console.log(event.mp.detail) // 注意加入mp
}
```

### BUG 及报错处理方法

**监听事件名**

`mpvue` 里面无法监听原生小程序组件中的 `@click-icon` 这类 `kebab-case` 事件名，因此如果 API 文档里面有出现这样的监听名，那么需要手动修改源代码。

可以改成驼峰式的监听名。

eg: 我在 `field` 组件中就遇到这个问题，我的做法是：

```
// static/vant/field/index.js

this.$emit('click-icon');

// 修改为:

this.$emit('clickIcon');
```

**启动报错**

一般的报错报错都可以通过一下流程处理。

- 是否打开了微信开发者工具中的`ES6转ES5`功能。
- 仔细检查代码和比对文档，看看是否有使用不当的地方。
- 重新编译`npm run dev`或删掉`dist`目录重新`npm run dev`
- 重启或更新微信开发者工具。

若以上流程都走完了，还是无法解决报错，可以通过提交`issues`的方式，我来帮你解决。

**引入组件报错**

```shell
VM54:1 thirdScriptError sdk uncaught third Error module "static/vant/notify/index.js" is not defined
```

解决办法是：打开小程序开发者工具中的**ES6 转 ES5**功能. [issues/#5](https://github.com/Rychou/mpvue-vant/issues/5#issuecomment-419620351)

## 其他组件库

目前比较好的组件库有三个，[Wux Weapp](https://wux-weapp.github.io/wux-weapp-docs/#/),[iview weapp](https://weapp.iviewui.com/),[Vant Weapp](https://youzan.github.io/vant-weapp/#/intro)。

这三者都是用原生小程序写的组件库，因此理论上来说，在 mpvue 中都是可以无缝使用的。不同组件库的组件都不一样，有的更丰富，有的逻辑更完善，有的文档更清晰。因此用什么组件，还需要自己取舍。

比如：三者中，唯有[Wux Weapp](https://wux-weapp.github.io/wux-weapp-docs/#/)有日历组件，而且它里面还有一些更高级的组件可以使用。

使用方法上，几乎没有差异。值得注意的是，大家复制源代码到自己项目上时，应该复制`/dist/`目录下的文件。因为这里是经过编译后的。

如果大家使用过程中遇到什么 BUG，可以通过提[issues](https://github.com/Rychou/mpvue-vant/issues)的方式让我知道，大家一起踩坑吧！

## 分享两个小程序

### 猫叫助手

基于 vant 和 wux 组件库,以及小程序云开发开发的一个小程序。以及总结了`mpvue`中使用云开发的注意事项，[mpvue-cloud](https://github.com/Rychou/mpvue-cloud)

收录各种猫叫声，帮助与猫咪交流，分享一些养猫的小知识等。

![猫叫助手](https://ws3.sinaimg.cn/large/005BYqpgly1g22ii40s6kj325s0m8tcq.jpg)

### 在书云

这是我近期使用 `Taro` 开发框架开发的一款小程序，主要功能是提供可靠的 `书架管理` 功能，只需要扫一扫书籍背后的条形码即可添加书籍入库，你可以方便的在线上管理你的书架，查看书籍的基本信息，亦可以添加书评。

该项目获得了[微信小程序 U 计划](https://edu.weixin.qq.com/cgi-bin/newreadtemplate?t=edu_portal/zh-hans/apply/apply-u-plan/index)的资助。目前项目正在开发中，欢迎大家体验反馈。

![在书云](https://ws3.sinaimg.cn/large/005BYqpgly1g22igfh59bj325s0m8wig.jpg)
