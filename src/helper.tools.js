var helper = {
  /**
   * js生成随机字符串
   * @param  {Number} length [description]
   * @return {[type]}        [description]
   */
  getRandomStr (length = 10) {
    const str = `0123456789abcdefghijklmnopqwvuxyzrstABCDEFGHIJKLMNOPQWVUXYZRST`
    const randomStr = []
    for (var i = 0; i <= length; i++) {
      var strIndex = Math.floor(Math.random() * str.length)
      randomStr.push(str[strIndex])
    }
    return randomStr.join('')
  }
}

export default helper
