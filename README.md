# utils
前端开发前端项目的 utils工具函数库

## 加载方式

```
npm install ce-utils --save
// 全局加载
import utils from 'ce-utils'
// 单文件引用
import helper from 'ce-utils/src/helper.base.js'
```

###helper.base

* isString
> 判断是否是字符
* isArray
> 判断是否是数组
* isUndefined
> 判断是否是undefined
* isNull
> 判断是否是null
* isPlainObject
> 判断是否一个键值对象
* isFunction
> 判断是否是一个函数
* cloneArray
> 复制数据 深拷贝
* cloneObject
> 复制对象 深拷贝
* extend(target, ...args)
> 对象合并，把最后面的元素拷贝到最前面来
* noop
> 定义空函数

### helper.load

* loadCss(target)
> 加载css文件(target: string|array)
* loadScript(target)
> 加载js文件(target: string|array)

### helper.dom

* $ dom选择器
> 返回一个对象数组
* setClass(dom, cname)
> 给相应dom设置类名
* removeClass(dom, cname)
> 取消dom的类名设置
* setTitle(title)
> 设置网页的标题

### helper.tools

* getRandomStr(length = 10)
> 获取随即串 默认获取10位
