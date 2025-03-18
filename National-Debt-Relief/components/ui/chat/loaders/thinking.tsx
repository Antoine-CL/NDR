import LottieView from "lottie-react-native";
import { View } from "react-native";
import ThinkingAnimation from "../../../../assets/loading/thinking.json";
import React from "react";
import tw from 'twrnc';

const Thinking = () => {
  return (
    <View style={tw`w-12 h-12`}>
      <LottieView
        source={ThinkingAnimation}
        style={{
          width: "100%",
          height: "100%",
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default Thinking;
