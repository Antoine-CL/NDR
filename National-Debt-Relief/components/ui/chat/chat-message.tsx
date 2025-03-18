import React from "react";
import { View, Text } from "react-native";
import {
  ChatCompletionMessageOrReactElement,
  ChatCompletionMessageParam,
} from "react-native-gen-ui";
import ChatBubble from "./chat-bubble";
import Thinking from './loaders/thinking';
import { cn } from "@/utils/cn";
import tw from 'twrnc';
import LoadingAI from "./loaders/ai";

interface ChatMessageProps {
  message: ChatCompletionMessageOrReactElement;
  isLastMessage: boolean;
  isLoading: boolean;
  isStreaming: boolean;
  error?: Error;
}

const ChatMessage = ({
  message,
  isLastMessage,
  isLoading,
  isStreaming,
  error,
}: ChatMessageProps) => {
  return (
    <View style={tw`flex gap-y-2 ${isLastMessage ? '' : 'pb-4'}`}>
      <MessageContent message={message} />
      {isLastMessage && isLoading && !isStreaming && <LoadingAI />}
      {isLastMessage && error && (
        <View style={tw`self-start px-5 py-4 bg-red-100 rounded-2xl`}>
          <Text style={tw`text-red-500`}>{error.message}</Text>
        </View>
      )}
    </View>
  );
};

// The chat message component
const MessageContent = ({
  message,
}: {
  message: ChatCompletionMessageOrReactElement;
}) => {
  if (message == null) {
    return null;
  }

  if (React.isValidElement(message)) {
    return message;
  }

  const m = message as ChatCompletionMessageParam;

  if (m.role === "function") {
    return (
      <></>
      //Debugging
      // <View style={{ opacity: 0.4 }}>
      //   <Text>Only seen by the model:</Text>
      //   <Text>{m.content?.toString().slice(0, 100)}...</Text>
      // </View>
    );
  }

  return <ChatBubble message={m} />;
};

export default ChatMessage;
