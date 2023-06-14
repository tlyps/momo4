/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=12661190&pid=905927281cedb029728ec9989f31486d&tid=0bf2944d53a6149a672e6cdbc790573b",
    "https://www.maimemo.com/share/page?uid=12661190&pid=905927281cedb029728ec9989f31486d&tid=0bf2944d53a6149a672e6cdbc790573b",
    "https://www.maimemo.com/share/page?uid=12661190&pid=905927281cedb029728ec9989f31486d&tid=0bf2944d53a6149a672e6cdbc790573b",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=12661190&pid=db6cf0a2c502bd3f40143a69113c06b6&tid=cf913b0f8dfa2b06478fc4809db42c17",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
