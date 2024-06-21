import {StatusBar} from 'expo-status-bar';
import {ScrollView, Text,View,Image} from 'react-native'
import { Link, router  } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center h-[90vh] px-4">
        {/* <Image 
                source={images.logo}
                className="w-[135px] h-[84px]"
                resizeMode='contain'/>  */}
        <Image
                source={images.school}
                className="max-w-[380px] w-full h-[300px]"
                resizeMode='contain'/>
        <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">Discover Endless Possibilites with 
            <Text className="text-secondary-200"> EduConnect</Text></Text>
        </View>
        <Text className="text-sm font-pregular text-white mt-1 text-center">Where creativity meets innovation : Embark on a journey of limitless exploration with aora</Text>
        <CustomButton title="Continue with Email"
                      handlePress={()=>router.push('/sign-in')}
                      containerStyles="w-full mt-2"
                        />
        </View>
       </ScrollView>
       <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
