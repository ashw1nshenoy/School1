import { View, Text, ScrollView,Image,Linking } from 'react-native'
import React, { useState } from 'react'
import { Link,router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'; 

const signIn = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const handleChangeText = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const submit = async () => {
    const { username, password } = form;

    if (!username || !password) {
      alert('Please enter both email and password.');
      return;
    }

    setisSubmitting(true); 
    console.log(username)
    try {
      const response = await axios.post('http://192.168.43.5:3000/api/login', {
        username,
        password,
      });

  
      if (response.status === 200) { 

        console.log('Login successful:', response.data);
        alert('Login successful!');
        router.push('/(home)/index');


    } else {
        console.error('Login failed:', response.data);
        alert('Login failed. Please check your credentials.'); 
    }
  
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.'); 
    } finally {
      setisSubmitting(false); 
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-[90vh] px-4 my-6">
          {/* <Image 
                source={images.logo}
                  resizeMode='contain'
                  className="w-[100px] h-[30px]"/> */}
          <Text className="text-2xl text-white text-semibold mt-6 font-semibold">Login to EduConnect</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e)=>setForm({...form,username:e})}
            otherStyles='mt-7'
            placeholder="Enter Username"
            keyboardType='text'/>
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter Password"
            handleChangeText={(e)=>setForm({...form,password:e})}
            otherStyles='mt-7'
            keyboardType='password'/>
            <CustomButton title='Sign In'
            handlePress={submit}
            containerStyles="mt-5"
            isLoading={isSubmitting}/>
            {/* <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-md text-gray-100 font-pregular">Don't have an account?</Text>
              <Link href='/sign-up' className='text-md font-psemibold text-secondary'>Sign Up</Link>
            </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn