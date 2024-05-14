import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { icons, images } from '../constants'

const GoogleSignInButton = ({ containerStyles }) => {
  return (
    <TouchableOpacity className={`bg-gray-200 rounded-full py-2 px-4 flex-row
    items-center justify-center ${containerStyles}
    `}>
      <View>
        <Image
          source={icons.googleIcon}
          style={{ width: 23, height: 23, marginRight: 12 }}
          resizeMode='contain'
        />
      </View>
      <Text className={`text-gray-700 text-base font-medium tracking-wide
      overflow-hidden truncate whitespace-nowrap`}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInButton;
