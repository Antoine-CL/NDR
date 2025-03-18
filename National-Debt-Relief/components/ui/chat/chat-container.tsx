import React, { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc';

const ChatContainer = ({ children }: PropsWithChildren) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView 
        style={tw`flex-1`}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 84}
      >
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatContainer;
