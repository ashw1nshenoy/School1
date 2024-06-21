import { Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View  className="flex-1 items-center justify-center h-screen space-y-3">
      <View className="bg-fuchsia-500 h-16 w-16 items-center justify-center rounded "><Text>1</Text></View>
      <View className="bg-fuchsia-500 h-16 w-16 items-center justify-center rounded"><Text>2</Text></View>
      <View className="bg-fuchsia-500 h-16 w-16 items-center justify-center rounded"><Text>3</Text></View>
    </View>
    
  )
}

export default Profile
