// android 220339162650-hi9te07s5bfgtrbrdiieflgfhh6hk5lo.apps.googleusercontent.com
// web 220339162650-vot08ut8hjrgtkhivptkom7vf48b79j6.apps.googleusercontent.com

import { View, Text, ScrollView, Image, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import GoogleButton from '../../components/GoogleButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <View className="items-center">
            <Image
              source={images.secondlogo} resizeMode='contain'
              className="w-[240px] h-[50px]" />
            <Text className="text-[20px] font-semibold text-semibold mt-4 text-gray-300">
              Login to Native
            </Text>
          </View>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({
              ...form,
              email: e
            })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({
              ...form,
              password: e
            })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-7"
          />

          <Text className="text-md text-gray-100 text-center font-pregular mt-3">
                Or
          </Text>

          <GoogleButton
            title="Login with Google"
            containerStyles="mt-3" />


          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 text-center font-pregular">
                Don't have account ?
              </Text>
              <Link href="/sign-up" className="text-lg font-psemibold
              text-secondary">Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn