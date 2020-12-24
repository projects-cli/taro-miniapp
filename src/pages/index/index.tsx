import React, { useEffect } from 'react'
import { navigateTo } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'
import { AtButton } from 'taro-ui'

import './index.scss'

const Index = (props) => {
  const state = useSelector(store => store)
  const dispatch = useDispatch()

  console.log('index-14: ', state)

  useEffect(() => {
    console.log('index-16: ', props)
  })

  const doTest = () => {
    dispatch({
      type: 'common/save',
      payload: {
        test: 1
      }
    })
  }

  return (
    <View>
      <Text>Hello world!</Text>
      <Button onClick={() => navigateTo({
        url: '/pages/test/index'
      })}
      >go to test</Button>
      <Button onClick={doTest}>dispatch</Button>
      <AtButton type='primary'>按钮文案</AtButton>
    </View>
  )
}

export default Index
