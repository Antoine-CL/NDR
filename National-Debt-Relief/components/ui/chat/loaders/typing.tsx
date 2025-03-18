import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import TypingAnimation from '@/assets/loading/typing.json';
import tw from 'twrnc';

export default function Typing() {
  return (
    <View style={tw`w-12 h-6`}>
      <LottieView
        source={TypingAnimation}
        autoPlay
        loop
        style={tw`w-full h-full`}
      />
    </View>
  );
}
