import { View } from "react-native";
import { cn } from "../../../utils/cn";
import React from "react";
import BubbleTail from "./bubble-tail";
import Markdown from 'react-native-markdown-display';
import { ChatCompletionMessageParam } from "react-native-gen-ui";
import tw from 'twrnc';
import { transform } from "@babel/core";

interface ChatBubbleProps {
  message: ChatCompletionMessageParam;
}

const ChatBubble = ({ message }: ChatBubbleProps) => {
  return (
    <View
      style={tw`relative rounded-3xl py-1 px-4 ${
        message.role === "user"
          ? "bg-sky-500 self-end ml-14"
          : "bg-gray-200 self-start mr-14"
      }`}
    >
      {message.role === "user" ? (
        <View 
          style={[
            tw`absolute -bottom-1 -right-1`,
            { transform: [{ scaleX: -1 }] }
          ]}
        >
          <BubbleTail color={"#0ea5e9"} />
        </View>
      ) : (
        <View style={tw`absolute -bottom-1 -left-1`}>
          <BubbleTail color={"#e5e7eb"} />
        </View>
      )}
      <Markdown style={{
        body: { fontSize: 16, color: message.role === "user" ? "white" : "black" }
      }}>
        {typeof message.content === "string" ? message.content : ""}
      </Markdown>
    </View>
  );
};

export default ChatBubble;
