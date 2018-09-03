var helper = {
  isString (v) {
    return typeof v === 'string'
  },
  /**
   * 检验是否是数组
   * @param  {[type]}  v [description]
   * @return {Boolean}   [description]
   */
  isArray (v) {
    return Array.isArray(v)
  },
  /**
   * 检验是否是undefined
   * @param  {[type]}  v [description]
   * @return {Boolean}   [description]
   */
  isUndefined (v) {
    if (v === undefined) {
      return true
    }
    return false
  },
  isNull (v) {
    if (typeof v === 'object' && v === null) {
      return true
    }
    return false
  },
  isPlainObject (v) {
    return Object.prototype.toString.call(v) === '[object Object]'
  },
  isFunction (v) {
    return Object.prototype.toString.call(v) === '[object Function]'
  },
  /**
   * 数组拷贝
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  cloneArray (v) {
    if (helper.isArray(v)) {
      return v.map(helper.cloneArray)
    }
  },
  /**
   * [cloneObject description]
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  cloneObject (v) {
    let target = {}
    for (var i in v) {
      if (helper.isPlainObject(v[i])) {
        target[i] = helper.cloneObject(v[i])
      } else {
        target[i] = v[i]
      }
    }
    return target
  },
  /**
   * 对象扩展与复制
   * @param  {[type]}    target [description]
   * @param  {...[type]} args   [description]
   * @return {[type]}           [description]
   */
  extend (target, ...args) {
    for (var i = 0; i < args.length; i++) {
      for (var cur in current[i]) {
        if (helper.isArray(current[cur])) {
          target[cur] = helper.cloneArray(current[cur])
        } else if (helper.isPlainObject(current[cur])) {
          target[cur] = helper.cloneObject(current[cur])
        } else {
          target[cur] = current[cur]
        }
      }
    }
    return target
  },
  noop () { // 空函数
    return function () {}
  }
}

export default helper
