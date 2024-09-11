import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView>
      <View className='bg-black h-full flex items-center justify-center '>
        <Text className=' text-white text-xl'>Welcome to a brand new Expo project</Text>
      </View>
    </SafeAreaView>
  )
}

export default home