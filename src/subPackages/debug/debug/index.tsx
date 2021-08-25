import React from 'react'
import { Debug as DebugComponent } from '@jdlfe/minidebug-next'
import { View } from '@tarojs/components'

import './index.scss'

const Debug: React.FC = () => {
  return (
    <View className='debug-container'>
      <DebugComponent />
    </View>
  )
}

export default Debug
