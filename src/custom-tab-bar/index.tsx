import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames/bind'
import storage from 'taro-storage'

import home from '@/static/images/tabbar/home.svg'
import homeSelected from '@/static/images/tabbar/home-selected.svg'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const list = [
  {
    pagePath: '/pages/home/index',
    text: '首页',
    iconPath: home,
    selectedIconPath: homeSelected
  },
  {
    pagePath: '/pages/me/index',
    text: '我的',
    iconPath: home,
    selectedIconPath: homeSelected
  }
]

const TabBar: React.FC = () => {
  const tabIndex = storage.getSessionStorage('tabIndex') || 0

  const switchTab = (item, index) => {
    storage.setSessionStorage('tabIndex', index)
    const url = item.pagePath
    Taro.switchTab({ url })
  }

  return (
    <View className={cx('tab-bar')}>
      <View className={cx('tab-bar-border')} />
      {
        list.map((item, index) => {
          const isSelected = tabIndex === index
          return (
            <View
              className={cx('tab-bar-item')}
              onClick={() => switchTab(item, index)}
              data-path={item.pagePath}
              key={item.text}
            >
              <Image className={cx('tab-icon')} src={isSelected ? item.selectedIconPath : item.iconPath} />
              <View
                className={cx('tab-text')}
                style={{
                  color: isSelected ? 'rgba(0, 162, 0, 1)' : 'rgba(0, 0, 0, 0.6)'
                }}
              >
                {item.text}
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default TabBar
