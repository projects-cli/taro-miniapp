const path = require('path')

const config = {
  projectName: '脚手架',
  date: '2020-12-17',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/static': path.resolve(__dirname, '..', 'src/static'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/service': path.resolve(__dirname, '..', 'src/service'),
    '@/styles': path.resolve(__dirname, '..', 'src/styles'),
    '@/package': path.resolve(__dirname, '..', 'package.json')
  },
  mini: {
    imageUrlLoaderOption: {
      limit: 500 // 可以按需调小，设置该值解决coverimage不显示图片bug，coverimage不支持base64，设小防止图片转为base64
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
