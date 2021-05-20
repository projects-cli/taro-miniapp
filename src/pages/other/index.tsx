import React from 'react'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames/bind'

import NavBar from '@/components/NavBar'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const Other:React.FC = () => {
  return (
    <View className={cx('page', 'other-page')}>
      <NavBar />
      <ScrollView scrollY className={cx('container', 'other-container')}>
        <View style={{ fontSize: 120 }}>Other1</View>
        <View style={{ fontSize: 120 }}>Other2</View>
        <View style={{ fontSize: 120 }}>Other3</View>
        <View style={{ fontSize: 120 }}>Other4</View>
        <View style={{ fontSize: 120 }}>Other5</View>
        <View style={{ fontSize: 120 }}>Other6</View>
      </ScrollView>
    </View>
  )
}

export default Other
