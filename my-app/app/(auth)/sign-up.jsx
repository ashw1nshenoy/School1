import { View, Text, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
const signUp = () => {
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const submit=()=>{

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-[90vh] px-4 my-6">
          {/* <Image 
                source={images.logo}
                  resizeMode='contain'
                  className="w-[100px] h-[30px]"/> */}
          <Text className="text-2xl text-white text-semibold mt-6 font-semibold">SignUp to EduConnect</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e)=>setForm({...form,username:e})}
            otherStyles='mt-7'
            placeholder="Enter Username"/>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e)=>setForm({...form,email:e})}
            otherStyles='mt-7'
            placeholder="Enter Email Address"
            keyboardType='email-address'/>
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter Password"
            handleChangeText={(e)=>setForm({...form,password:e})}
            otherStyles='mt-7'
            keyboardType='password'/>
            <CustomButton title='Sign Up'
            handlePress={submit}
            containerStyles="mt-5"
            isLoading={isSubmitting}/>
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-md text-gray-100 font-pregular">Have an account already?</Text>
              <Link href='/sign-in' className='text-md font-psemibold text-secondary'>Sign In</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signUp