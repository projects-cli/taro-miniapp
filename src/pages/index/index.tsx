import React, { useEffect } from 'react'
import { navigateTo } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'
import { AtButton } from 'taro-ui'

import './index.scss'

const Index = (props) => {
  const dispatch = useDispatch()
  // const state = useSelector(store => store)

  // console.log('index-14: ', state)

  // useEffect(() => {
  //   console.log('index-16: ', props)
  // })

  const doTestReducer = () => {
    dispatch({
      type: 'common/save',
      payload: {
        test: 1
      }
    })
  }

  const doLogin = () => {
    dispatch({
      type: 'auth/login'
    })
  }

  const doTest = () => {
    dispatch({
      type: 'common/test'
    })
  }

  return (
    <View>
      <Text>Hello world!</Text>
      {/* <Button onClick={() => navigateTo({
        url: '/pages/test/index'
      })}
      >go to test</Button>
      <Button onClick={doTestReducer}>dispatch</Button>
      <AtButton type='primary' onClick={doTest}>按钮文案</AtButton> */}
      <AtButton type='primary' onClick={doLogin}>login</AtButton>
    </View>
  )
}

export default Index
