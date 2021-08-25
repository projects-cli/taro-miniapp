import React from 'react'
import { navigateTo } from '@tarojs/taro'
import { ScrollView, View, Button } from '@tarojs/components'
import classNames from 'classnames/bind'
import { useQueryClient, useQuery } from 'react-query'

import { restful } from '@/utils'
import NavBar from '@/components/NavBar'
import styles from './index.modules.scss'

const cx = classNames.bind(styles)

const fetchData = async () => await restful.request({
  url: 'https://jsonplaceholder.typicode.com/posts'
})
const usePosts = () => {
  return useQuery('post', async (): Promise<any> => fetchData)
}

const Home:React.FC = () => {
  const queryClient = useQueryClient()
  const getData = () => {
    console.log('执行')
    queryClient.setQueryData('post', fetchData)
  }
  const { status, data, error, isFetching } = usePosts()
  console.log(23333, status, data, error, isFetching)

  return (
    <View className={cx('page', 'home-page')}>
      <NavBar />
      <ScrollView scrollY className={cx('container', 'home-container')}>
        <View>current home</View>
        <Button onClick={() => { navigateTo({ url: '/subPackages/debug/debug/index' }) }}>debug</Button>
        <Button onClick={getData}>请求</Button>
        <View>
          {
            status === 'loading' ? (
              'Loading...'
            ) : status === 'error' ? (
              <span>Error: {error.message}</span>
            ) : (
              <View>fdfd</View>
              // data?.map(item => <View key={item.id}>{item.title}</View>)
            )
          }
        </View>
        <View style={{ fontSize: 20 }} onClick={() => navigateTo({ url: '/pages/other/index' })}>go to other</View>
      </ScrollView>
    </View>
  )
}

export default Home
