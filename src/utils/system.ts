import Taro, { getUserInfo, getUserProfile, showToast, downloadFile, requestPayment } from '@tarojs/taro'

export const isValidUrl = (url) => {
  return /(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(url)
}

/**
 * @description: 获取设备权限
 * @param {string} scope 需要获取权限的 scope
 * @return: Promise<boolean>
 */
export const getAuthSetting = (scope: string): Promise<boolean> => {
  return new Promise(resolve => {
    return Taro.authorize({
      scope
    })
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      })
  })
}

/**
 * @description: 保存图片到系统相册
 * @param {string} imgUrl 图片url
 * @return: Promise<boolean>
 */
export const saveImageToPhotosAlbum = (imgUrl: string): Promise<boolean> => {
  // eslint-disable-next-line promise/param-names
  return new Promise((resolve, rejecet) => {
    return Taro.saveImageToPhotosAlbum({ filePath: imgUrl })
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        rejecet(false)
      })
  })
}

const saveImageToPhotos = (posterImagePath) => {
  saveImageToPhotosAlbum(posterImagePath)
    .then(() => {
      // 成功保存图片到本地相册
      // 保存失败
      Taro.showToast({
        title: '保存成功',
        icon: 'none'
      })
    })
    .catch(() => {
      // 保存失败
      Taro.showToast({
        title: '保存失败',
        icon: 'none'
      })
    })
}

// 保存图片到本地相册
export const saveImage = (imgPath) => {
  const scope = 'scope.writePhotosAlbum'
  getAuthSetting(scope).then((res: boolean) => {
    if (res) {
      // 授权过 直接保存
      saveImageToPhotos(imgPath)
      return false
    }
    // 未授权过 先获取权限
    getAuthSetting(scope).then((status: boolean) => {
      if (status) {
        // 获取保存图片到相册权限成功
        saveImageToPhotos(imgPath)
        return false
      }
      // 用户拒绝授权后的回调 获取权限失败
      Taro.showModal({
        title: '提示',
        content: '若不打开授权，则无法将图片保存在相册中！',
        showCancel: true,
        cancelText: '暂不授权',
        cancelColor: '#000000',
        confirmText: '去授权',
        confirmColor: '#3CC51F',
        success: function (e) {
          if (e.confirm) {
            // 用户点击去授权
            Taro.openSetting({
              // 调起客户端小程序设置界面，返回用户设置的操作结果。
            })
          } else {
            //
          }
        }
      })
    })
  })
}

export const ossGif2Png = (filePath) => {
  const tail = '?x-oss-process=image/format,png'
  if (filePath.indexOf('.gif') !== -1 || filePath.indexOf('.GIF') !== -1) {
    return filePath + tail
  }
  return filePath
}

export const getWxUserInfo = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    // 获取用户信息 新版本2.10.4
    if (getUserProfile) {
      getUserProfile({
        desc: '用于完善会员资料',
        success: (res) => {
          resolve(res)
        },
        fail: (res) => {
          reject(res)
        }
      })
    } else {
      getUserInfo({
        success: (res) => {
          resolve(res)
        },
        fail: (res) => {
          reject(res)
        }
      })
    }
  })
}

/**
 * 获取code
 */
export const getLoginCode = async (): Promise<string | boolean> => {
  const res = await Taro.login()
  if (res.code) {
    return res.code
  }

  return false
}

// 文件下载
export const wxDownloadFile = (url, header = {}) => {
  return new Promise((resolve, reject) => {
    downloadFile({
      url: url,
      header,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.tempFilePath)
        } else {
          showToast({
            title: res.errMsg || '服务器错误，无法显示二维码，请稍后再试',
            icon: 'none'
          })
          reject(res)
        }
      },
      fail: (res) => {
        showToast({
          title: res.errMsg || '服务器错误，无法显示二维码，请稍后再试',
          icon: 'none'
        })
        reject(res)
      }
    })
  })
}

// 调起微信支付
interface SignType {
  /** MD5 */
  MD5:any
  /** HMAC-SHA256 */
  'HMAC-SHA256' :any
}

interface WePayProps {
  timeStamp: string;
  nonceStr: string;
  pack: string;
  signType?: keyof SignType ;
  paySign: string;
}
export const wePay = (params:WePayProps):Promise<any> => {
  const {
    timeStamp, nonceStr, pack, signType = 'MD5', paySign
  } = params

  return new Promise((resolve, reject) => {
    requestPayment({
      timeStamp,
      nonceStr,
      package: 'prepay_id=' + pack,
      signType,
      paySign,
      success: (res) => {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}
