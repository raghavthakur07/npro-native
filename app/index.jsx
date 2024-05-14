import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center h-[95vh] px-4">
          <Image
            source={images.secondlogo}
            className="w-[240px] h-[50px]"
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with { '' }
              <Text className="text-secondary-200">
                Npro
              </Text>
            </Text>

            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 items-center text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Npro.
          </Text>

          <CustomButton 
            title="Continue"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161662'
      style='light'/>

    </SafeAreaView>
  );
}

