import React, { useEffect } from 'react'
import { switchTab } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

const Index = () => {
  useEffect(() => {
    switchTab({
      url: '/pages/home/index'
    })
  }, [])
  // const doTest = () => {
  //   dispatch({
  //     type: 'common/test'
  //   })
  // }

  return (
    <View>
      <Text>Hello world!</Text>
      {/* <Button onClick={() => navigateTo({
        url: '/pages/test/index'
      })}
      >go to test</Button>
      <Button onClick={doTestReducer}>dispatch</Button>
      <AtButton type='primary' onClick={doTest}>按钮文案</AtButton> */}
    </View>
  )
}

export default Index
