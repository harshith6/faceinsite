import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image} from 'react-native';
import { Link, router,Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import { CustomButton } from '../components';
import { useGlobalContext } from '../context/GlobalProvider';


export default function App() {

    // const {isLogged, isLoading} =  useGlobalContext();

    // if(!isLoading && isLogged){ 
    //     return <Redirect href="/home"/>
    // }

  return (
    <View>
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
             contentContainerStyle={{height: '100%',}}
             >
            <View className="w-full items-center justify-center
                 min-h-[85vh] px-4">
                {/* <Image source={images.logo} className="w-[250px] h-[84px]"
                resizeMode='contain'
                /> */}
                <Image source={images.cards} className="max-w-[380px] w-full h-[300px]"
                    resizeMode='contain'
                />
                <View className="realtive mt-5">
                    <Text className="text-5xl text-white font-bold text-center">
                        Discover Endless Possibilities with{' '} <Text className="text-secondary-200">FaceInsite</Text>
                    </Text>
                    <Image 
                        source = {images.path}
                        className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                        resizeMode='contain'
                    ></Image>
                </View>
                <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
                    embark on a journey of limitless exploraton wioth Hora 

                </Text>
                <CustomButton 
                    title= "Let's Start "
                    handlePress={()=> router.push('/main')}
                    containerStyles="w-full mt-7"
                />
            </View>

            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
      
    </View>
  );
}
