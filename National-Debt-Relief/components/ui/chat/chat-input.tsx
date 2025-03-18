import { Platform, TextInput } from "react-native";
import { cn } from "@/utils/cn";
import React from "react";
import tw from 'twrnc';

interface ChatInputProps {
  input: string;
  onInputChange: (text: string) => void;
}

const ChatInput = ({ input, onInputChange }: ChatInputProps) => {
  return (
    <TextInput
      style={tw`w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 min-h-[46px] text-base`}
      placeholder="Message National Debt Relief..."
      value={input}
      onChangeText={onInputChange}
      multiline
    />
  );
};

export default ChatInput;
