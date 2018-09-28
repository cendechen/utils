import base from './helper.base.js'
/**
 * 管理一个异步资源加载器
 */
var createLinks = function (links) {
  return new Promise((r, j) => {
    var link = document.createElement('link')
    var head = document.querySelector('head')
    link.rel = 'stylesheet'
    link.href = links
    link.onload = () => {
      r()
    }
    link.onerror = () => {
      j(new Error(`${links}资源加载失败`))
    }
    link.onreadystatechange = function () {
      if (this.readyState === 'loaded' || this.readyState === 'complete') {
        r()
      }
    }
    head.appendChild(link)
  })
}

var createScripts = (function () {
  var queue = [] // 队列
  var currentIndex = 0
  var callback
  function loadSuccess () {
    if (currentIndex === queue.length) {
      // 加载成功
      callback()
    } else {
      createScript(queue[currentIndex])
      currentIndex++
    }
  }
  function createScript(links) {
    var script = document.createElement('script')
    var head = document.querySelector('head')
    script.type = 'type/javascript'
    script.onload = function() {
      // 再次加载
      loadSuccess()
    }
    script.onreadystatechange = function () {
      if (this.readyState === 'loaded' || this.readyState === 'complete') {
        loadSuccess()
      }
    }
    script.src = links
    head.appendChild(script)
  }

  return function load (linkArr, fn) {
    currentIndex = 0
    queue = linkArr
    callback = fn
    loadSuccess()
  }
})()

var createScript = function (links) {
  return new Promise((r, j) => {
    var head = document.querySelector('head')
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.onload = () => {
      r()
    }
    script.onreadystatechange = function () {
      if (this.readyState === 'loaded' || this.readyState === 'complete') {
        r()
      }
    }
    script.onerror = () => {
      j(new Error(`${links}资源加载失败`))
    }
    script.src = links
    head.appendChild(script)
  })
}
var helper = {
  /**
   * css 加载资源
   * @param  {[type]} links [description]
   * @return {[type]}       [description]
   */
  loadCss (links) {
    if (!links) {
      return Promise.resolve() // 没有资源不需要加载
    }
    if (base.isString(links)) {
      // 直接加载数据
      return createLinks(links)
    }
    if (base.isArray(links)) {
      var allPormise = []
      links.forEach(d => {
        allPormise.push(createLinks(d))
      })
      return Promise.all(allPormise)
    }
  },
  /**
   * 单文件加载 和 队列化文件加载
   * @param  {[type]} links [description]
   * @return {[type]}       [description]
   */
  loadScript (links) {
    if (!links) {
      return Promise.resolve()
    }
    if (base.isArray(links)) {
      // 需要队列的化的加载js,js会有依赖顺序
      return new Promise ((r, j) => {
        createScripts(links, () => {
          r()
        })
      })
    } else if (base.isString(links)){
      return createScript(links)
    }
  }
}

export default helper
