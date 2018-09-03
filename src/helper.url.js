var helper = {
  /**
   * 获取URL的参数
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  getParam (key) {
    var reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`)
    var r = location.search.substr(1).match(reg)
    if (r !== null) {
      return decodeURIComponent(r[2])
    }
    return ''
  }
}

export default helper
