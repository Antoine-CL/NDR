import LottieView from "lottie-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import TypingAnimation from "../../../assets/loading/typing.json";
import { Send } from "lucide-react-native";
import { Text } from "react-native";
import tw from 'twrnc';

interface ChatSubmitButtonProps {
  isLoading: boolean;
  isStreaming: boolean;
  input: string;
  handleSubmit: (input: string) => void;
}

const ChatSubmitButton = ({
  isLoading,
  isStreaming,
  input,
  handleSubmit,
}: ChatSubmitButtonProps) => {
  return (
    <TouchableOpacity
      style={tw`flex flex-row items-center justify-center bg-gray-50 border border-gray-200 rounded-full w-16 h-16 gap-x-2`}
      disabled={isLoading}
      onPress={() => {
        handleSubmit(input);
      }}
    >
      {isStreaming ? (
        <LottieView
          source={TypingAnimation}
          resizeMode="cover"
          style={{
            width: 40,
            height: 18,
          }}
          autoPlay
          loop
        />
      ) : (
        <>
          <Send color={"#3F83F8"} size={16} />
      
        </>
      )}
    </TouchableOpacity>
  );
};

export default ChatSubmitButton;
