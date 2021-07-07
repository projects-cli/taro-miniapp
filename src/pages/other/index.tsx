import React from 'react'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames/bind'
import { switchTab } from '@tarojs/taro'
import storage from 'taro-storage'

import NavBar from '@/components/NavBar'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const Other:React.FC = () => {
  return (
    <View className={cx('page', 'other-page')}>
      <NavBar />
      <ScrollView scrollY className={cx('container', 'other-container')}>
        <View style={{ fontSize: 20 }} onClick={() => { switchTab({ url: '/pages/me/index' }); storage.setSessionStorage('tabIndex', 1) }}>go to me</View>
        <View style={{ fontSize: 20 }} onClick={() => { switchTab({ url: '/pages/home/index' }); storage.setSessionStorage('tabIndex', 0) }}>go to home</View>
      </ScrollView>
    </View>
  )
}

export default Other
