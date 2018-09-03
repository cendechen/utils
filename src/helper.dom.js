var helper = {
  /**
   * dom选择器
   * @return {[type]} [description]
   */
  $ (selector) {
    return document.querySelectorAll(selector)
  },
  setClass (dom, cname) {
    var className = dom.className.split('')
    if (!className.includes(cname)) {
      className.push(cname)
    }
    dom.className = className.join('')
  },
  removeClass (dom, cname) {
    var className = dom.className.split('')
    var index = className.indexOf(cname)
    if (index > -1) {
      className.splice(index, 1)
      dom.className = className.join('')
    }
  },
  setTitle (title) {
    var dom = helper.$('title')[0]
    dom.innerText = title
  }
}

export default helper
