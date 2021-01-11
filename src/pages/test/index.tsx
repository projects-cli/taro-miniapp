import React from 'react'
import { View, Text } from '@tarojs/components'
import IconFont from '../../components/Iconfont'
// interface Props {
//   loading: boolean
// }

const Index = (props) => {
  console.log('test props: ', props)
  return (
    <View>
      <IconFont name='dengshanbao' size={48} />;
      <Text>Hello test!!!!</Text>
    </View>
  )
}

export default Index
