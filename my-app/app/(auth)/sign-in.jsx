import { View, Text, ScrollView,Image,Linking } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import axios from 'axios'; // Import axios for HTTP requests

const signIn = () => {
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

      // Handle successful login based on your backend response format
      if (response.status === 200) { // Check for HTTP status code 200 indicating success
        console.log('Login successful:', response.data);
        alert('Login successful!');


    } else {
        console.error('Login failed:', response.data);
        alert('Login failed. Please check your credentials.'); // Provide informative error messages
    }
      // You might redirect to a different screen or store user data
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.'); // Inform user of error
    } finally {
      setisSubmitting(false); // Reset loading state
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