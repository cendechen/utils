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
  /**
   * [isNull description]
   * @param  {[type]}  v [description]
   * @return {Boolean}   [description]
   */
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
      for (var cur in args[i]) {
        if (helper.isArray(args[i][cur])) {
          target[cur] = helper.cloneArray(args[i][cur])
        } else if (helper.isPlainObject(args[i][cur])) {
          target[cur] = helper.cloneObject(args[i][cur])
        } else {
          target[cur] = args[i][cur]
        }
      }
    }
    return target
  },
  /**
   * 空函数
   * @return {[type]} [description]
   */
  noop () { // 空函数
    return function () {}
  }
}

export default helper
