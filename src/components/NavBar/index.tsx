/**
 * 参考
 * https://github.com/lingxiaoyi/Taro-navigation-bar
 */
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import React, { useState } from 'react'
import { is } from 'ramda'

import './index.scss'

interface Rect {
  width: number;
  top: number;
  left: number;
  right: number;
  height: number;
  bottom: number;
}

interface SystemInfo extends Taro.getSystemInfoSync.Result {
  navBarExtendHeight: number;
  navBarHeight: number;
  capsulePosition: Rect;
  isIos: boolean;
}

interface Props {
  back?: boolean;
  home?: boolean;
  menu?: boolean;
  title?: string;
  color?: string;
  background?: string;
  backgroundColorTop?: string;
  searchBar?: boolean;
  searchText?: string;
  iconTheme?: string;
  extClass?: string;
  delta?: number;
  renderLeft?: React.ReactElement;
  renderRight?: React.ReactElement;
  renderCenter?: React.ReactElement;
  onBack?: () => void;
  onHome?: () => void;
  onMenu?: () => void;
  onSearch?: () => void;
  immersion?: boolean;
}

export const getSystemInfo = () => {
  if ((Taro as any).globalSystemInfo && !(Taro as any).globalSystemInfo.isIos) {
    return (Taro as any).globalSystemInfo
  } else {
    // h5环境下忽略navbar
    if (!is(Function, Taro.getSystemInfoSync)) {
      return null
    }
    const systemInfo: any = Taro.getSystemInfoSync() || {
      model: '',
      system: ''
    }
    const isIos = systemInfo.system?.toLowerCase().includes('ios')

    let rect: Rect | null
    try {
      rect = Taro.getMenuButtonBoundingClientRect ? Taro.getMenuButtonBoundingClientRect() : null
      if (rect === null) {
        throw new Error('getMenuButtonBoundingClientRect error')
      }
      // 取值为0的情况  有可能width不为0 top为0的情况
      if (!rect.width || !rect.top || !rect.left || !rect.height) {
        throw new Error('getMenuButtonBoundingClientRect error')
      }
    } catch (error) {
      let gap = 0 // 胶囊按钮上下间距 使导航内容居中
      let width = 96 // 胶囊的宽度
      if (systemInfo.platform === 'android') {
        gap = 8
        width = 96
      } else if (systemInfo.platform === 'devtools') {
        if (isIos) {
          gap = 5.5 // 开发工具中isIos手机
        } else {
          gap = 7.5 // 开发工具中android和其他手机
        }
      } else {
        gap = 4
        width = 88
      }
      if (!systemInfo.statusBarHeight) {
        // 开启wifi的情况下修复statusBarHeight值获取不到
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20
      }
      rect = {
        // 获取不到胶囊信息就自定义重置一个
        bottom: systemInfo.statusBarHeight + gap + 32,
        height: 32,
        left: systemInfo.windowWidth - width - 10,
        right: systemInfo.windowWidth - 10,
        top: systemInfo.statusBarHeight + gap,
        width: width
      }
      console.log('error', error)
      console.log('rect', rect)
    }

    let navBarHeight = 0
    if (!systemInfo.statusBarHeight) {
      // 开启wifi和打电话下
      systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20
      navBarHeight = (function () {
        const gap = rect.top - systemInfo.statusBarHeight
        return 2 * gap + rect.height
      })()

      systemInfo.statusBarHeight = 0
      systemInfo.navBarExtendHeight = 0 // 下方扩展4像素高度 防止下方边距太小
    } else {
      navBarHeight = (function () {
        const gap = rect.top - systemInfo.statusBarHeight
        return systemInfo.statusBarHeight + 2 * gap + rect.height
      })()
      if (isIos) {
        systemInfo.navBarExtendHeight = 4 // 下方扩展4像素高度 防止下方边距太小
      } else {
        systemInfo.navBarExtendHeight = 0
      }
    }

    systemInfo.navBarHeight = navBarHeight // 导航栏高度不包括statusBarHeight
    systemInfo.capsulePosition = rect // 右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小
    systemInfo.isIos = isIos; // 是否ios
    (Taro as any).globalSystemInfo = systemInfo // 将信息保存到全局变量中,后边再用就不用重新异步获取了
    // console.log('systemInfo', systemInfo);
    return systemInfo
  }
}

let globalSystemInfo = getSystemInfo()

const NavBar: Taro.FC<Props> = (props: Props) => {
  const {
    back,
    home,
    menu,
    title,
    color,
    background,
    backgroundColorTop,
    searchBar,
    searchText,
    iconTheme,
    extClass,
    onBack,
    onHome,
    onMenu,
    onSearch,
    immersion
  } = props

  const setStyle = (systemInfo: SystemInfo) => {
    const {
      statusBarHeight,
      navBarHeight,
      capsulePosition,
      navBarExtendHeight,
      isIos,
      windowWidth
    } = systemInfo

    const rightDistance = windowWidth - capsulePosition.right // 胶囊按钮右侧到屏幕右侧的边距
    const leftWidth = windowWidth - capsulePosition.left // 胶囊按钮左侧到屏幕右侧的边距

    const navigationbarinnerStyle = {
      color,
      // `background:${background}`,
      height: navBarHeight + navBarExtendHeight,
      paddingTop: statusBarHeight,
      paddingRight: leftWidth,
      paddingBottom: navBarExtendHeight
    }
    let navBarLeft = {}
    if ((back && !(home || menu)) || (!back && (home || menu))) {
      navBarLeft = {
        width: capsulePosition.width,
        height: capsulePosition.height,
        marginLeft: 0,
        marginRight: rightDistance
      }
    } else if ((back && (home || menu)) || title) {
      navBarLeft = {
        width: capsulePosition.width,
        height: capsulePosition.height,
        marginLeft: rightDistance
      }
    } else {
      navBarLeft = { width: 'auto', marginLeft: 0 }
    }
    return {
      navigationbarinnerStyle,
      navBarLeft,
      navBarHeight,
      capsulePosition,
      navBarExtendHeight,
      isIos,
      rightDistance
    }
  }

  const [configStyle, setConfigStyle] = useState(setStyle(globalSystemInfo))

  const {
    navigationbarinnerStyle,
    navBarLeft,
    navBarHeight,
    capsulePosition,
    navBarExtendHeight,
    isIos,
    rightDistance
  } = configStyle

  useDidShow(() => {
    if (globalSystemInfo.isIos) {
      globalSystemInfo = getSystemInfo()
      setConfigStyle(setStyle(globalSystemInfo))
    }
  })

  const handleBackClick = () => {
    if (is(Function, onBack)) {
      onBack()
    } else {
      const pages = Taro.getCurrentPages()
      if (pages.length >= 2) {
        Taro.navigateBack({
          delta: props.delta
        })
      } else {
        Taro.redirectTo({
          url: '/pages/me/index'
        })
      }
    }
  }
  const handleGoHomeClick = () => {
    if (home && is(Function, onHome)) {
      onHome()
    } else if (menu && is(Function, onMenu)) {
      onMenu()
    }
  }
  const handleSearchClick = () => {
    if (is(Function, onSearch)) {
      onSearch()
    }
  }

  let navBarCenter: any

  if (title) {
    navBarCenter = <Text>{title}</Text>
  } else if (searchBar) {
    navBarCenter = (
      <View
        className='nav-bar-search'
        style={{ height: capsulePosition.height }}
        onClick={handleSearchClick}
      >
        <View className='nav-bar-search__icon' />
        <View className='nav-bar-search__input'>{searchText}</View>
      </View>
    )
  } else {
    navBarCenter = props.renderCenter
  }

  // 临时方案，当设置title或rendercenter时，设置left宽，解决中间内容显示靠左问题
  if (!back && !props.renderLeft) {
    navBarLeft.width = (props.renderCenter || title) ? capsulePosition.width : 'auto'
  }

  return (
    <View
      className={`nav-bar ${isIos ? 'isIos' : 'android'} ${extClass}`}
      style={{
        background: backgroundColorTop || background,
        height: navBarHeight + navBarExtendHeight,
        position: immersion ? 'fixed' : 'static'
      }}
    >
      <View
        className={`nav-bar__placeholder ${isIos ? 'isIos' : 'android'}`}
        style={{ paddingTop: navBarHeight + navBarExtendHeight }}
      />
      <View
        className={`nav-bar__inner ${isIos ? 'isIos' : 'android'}`}
        style={{ background: background, ...navigationbarinnerStyle }}
      >
        <View className='nav-bar__left' style={{ ...navBarLeft }}>
          {back && !(home || menu) && (
            <View
              onClick={handleBackClick}
              className={`nav-bar__button nav-bar__btn_back ${iconTheme}`}
            />
          )}
          {!back && (home || menu) && (
            <View
              onClick={handleGoHomeClick}
              className={`nav-bar__button nav-bar__btn_${home ? 'home' : menu ? 'menu' : ''} ${iconTheme}`}
            />
          )}
          {back && (home || menu) && (
            <View className={`nav-bar__buttons ${isIos ? 'isIos' : 'android'} ${iconTheme}`}>
              <View
                onClick={handleBackClick}
                className={`nav-bar__button nav-bar__btn_back ${iconTheme}`}
              />
              <View
                onClick={handleGoHomeClick}
                className={`nav-bar__button nav-bar__btn_${home ? 'home' : menu ? 'menu' : ''} ${iconTheme}}`}
              />
            </View>
          )}
          {!back && !(home || menu) && props.renderLeft}
        </View>
        <View className='nav-bar__center' style={{ paddingLeft: rightDistance }}>
          {navBarCenter}
        </View>
        <View className='nav-bar__right' style={{ marginRight: rightDistance }}>
          {props.renderRight}
        </View>
      </View>
    </View>
  )
}

NavBar.options = {
  addGlobalClass: true
}

NavBar.defaultProps = {
  extClass: '',
  // background: 'rgba(255,255,255,1)', // 导航栏背景
  color: '#000000',
  title: '',
  searchText: '点我搜索',
  searchBar: false,
  back: false,
  home: false,
  iconTheme: 'black',
  delta: 1,
  immersion: false
}

export default React.memo(NavBar)
