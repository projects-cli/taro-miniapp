import React from 'react'
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
        <View style={{ fontSize: 120 }}>Home1</View>
        <View style={{ fontSize: 120 }}>Home2</View>
        <View style={{ fontSize: 120 }}>Home3</View>
        <View style={{ fontSize: 120 }}>Home4</View>
        <View style={{ fontSize: 120 }}>Home5</View>
        <View style={{ fontSize: 120 }}>Home6</View>
      </ScrollView>
    </View>
  )
}

export default Home
