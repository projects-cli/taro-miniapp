import React from 'react'
import { navigateTo } from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames/bind'

import NavBar from '@/components/NavBar'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const Home:React.FC = () => {
  return (
    <View className={cx('page', 'home-page')}>
      <NavBar />
      <ScrollView scrollY className={cx('container', 'home-container')}>
        <View>current home</View>
        <View style={{ fontSize: 20 }} onClick={() => navigateTo({ url: '/pages/other/index' })}>go to other</View>
      </ScrollView>
    </View>
  )
}

export default Home
