import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames/bind'

import NavBar from '@/components/NavBar'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const Me:React.FC = () => {
  return (
    <View className={cx('page', 'me-page')}>
      <NavBar />
      <ScrollView scrollY className={cx('container', 'me-container')}>
        <View style={{ fontSize: 120 }}>Me1</View>
        <View style={{ fontSize: 120 }}>Me2</View>
        <View style={{ fontSize: 120 }}>Me3</View>
        <View style={{ fontSize: 120 }}>Me4</View>
        <View style={{ fontSize: 120 }}>Me5</View>
        <View style={{ fontSize: 120 }}>Me6</View>
      </ScrollView>
    </View>
  )
}

export default Me
