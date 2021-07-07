import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames/bind'
import { navigateTo } from '@tarojs/taro'

import NavBar from '@/components/NavBar'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const Me:React.FC = () => {
  return (
    <View className={cx('page', 'me-page')}>
      <NavBar />
      <ScrollView scrollY className={cx('container', 'me-container')}>
        <View>current me</View>
        <View style={{ fontSize: 20 }} onClick={() => navigateTo({ url: '/pages/other/index' })}>go to other</View>
      </ScrollView>
    </View>
  )
}

export default Me
