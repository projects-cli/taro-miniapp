import React, { useEffect } from 'react'
import { navigateTo } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'

import './index.scss'

const Index = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  console.log(14, state)

  useEffect(() => {
    console.log(props)
  }, [])

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
      })}>go to test</Button>
      <Button onClick={doTest}>dispatch</Button>
    </View>
  ) 
}

export default Index