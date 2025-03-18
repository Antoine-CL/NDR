import { View, Image } from "react-native";
import React, { useEffect } from "react";
import tw from 'twrnc';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withRepeat, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';

const LoadingAI = () => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={tw`w-32 h-16 -ml-5 flex items-center justify-center`}>
      <Animated.Image
        source={require('@/assets/images/NDR-logo.png')}
        style={[
          {
            width: 40,
            height: 40,
            resizeMode: 'contain',
          },
          animatedStyle
        ]}
      />
    </View>
  );
};

export default LoadingAI;
