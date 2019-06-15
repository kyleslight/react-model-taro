let Taro = require('@tarojs/taro')

switch (process.env.TARO_ENV) {
  case 'weapp': {
    Taro = require('@tarojs/taro-weapp');
    break;
  }
  case 'swan': {
    Taro = require('@tarojs/taro-swan');
    break;
  }
  case 'tt': {
    Taro = require('@tarojs/taro-tt');
    break;
  }
  case 'alipay': {
    Taro = require('@tarojs/taro-alipay');
    break;
  }
  default: {
    console.error('输入类型错误，目前只支持 weapp/swan/alipay/tt 七端类型')
  }
}

export default Taro;