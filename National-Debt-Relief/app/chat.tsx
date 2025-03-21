import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView, FlatList } from 'react-native';
import { Stack, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import ChatBubble from '@/components/ui/chat/chat-bubble';
import { OpenAI, useChat } from 'react-native-gen-ui';
import { z } from "zod";
import SearchingLocation from '@/components/ui/chat/loaders/searching-location';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatMessage from '@/components/ui/chat/chat-message';
import ChatSubmitButton from '@/components/ui/chat/chat-submit-button';
import LocationMap from '@/components/ui/chat/components/location-map';
import { getDeviceLocation } from '@/utils/get-device-location';
import { fetchLocation } from '@/utils/fetch-reverse-geocode';
import ChatContainer from '@/components/ui/chat/chat-container';
import ChatInput from '@/components/ui/chat/chat-input';
import tw from 'twrnc';
import LoadingAI from '@/components/ui/chat/loaders/ai';
import CreditorBlock from '@/components/ui/CreditorBlock';
import creditorList from '@/data/creditors.json';
import { CreditorType, TransactionType } from '@/types/types';
import TransactionBlock from '@/components/ui/transactions/TransactionsBlock';
import transactionList from '@/data/transactions.json'; 
import SummaryBlock from '@/components/ui/summary/summary';

export default function ChatScreen() {

  const insets = useSafeAreaInsets();
  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');
  const openAi = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY ?? "",
    model: process.env.EXPO_PUBLIC_OPENAI_MODEL || "gpt-4o",
  });
  
  const {
    input,
    error,
    isLoading,
    isStreaming,
    messages,
    handleSubmit,
    onInputChange,
  } = useChat({
    openAi,
    initialMessages: [
      {
        content: "Hello, how can I help you today?",
        role: "assistant",
      },
    ],
    onError: (error) => {
      console.error("Error while streaming:", error);
    },
    onSuccess: () => {
      console.log("✅ Streaming done!");
    },
    tools: {
      getLocation: {
        description: "Get the user's location",
        parameters: z.object({}), // Empty object if no parameters are needed
        render: async function* () {
          yield <SearchingLocation />;

          const location = await getDeviceLocation();

          const geoLocation = await fetchLocation(
            location.coords.latitude,
            location.coords.longitude
          );

          const locationName = `${geoLocation.address.city}, ${geoLocation.address.country}`;

          return {
            component: (
              <LocationMap
                latitude={location.coords.latitude}
                longitude={location.coords.longitude}
                locationName={locationName}
              />
            ),
            data: {
              location: {
                locationName,
                details: geoLocation,
              },
            },
          };
        },
      },
      getCreditors: {
        description: "Get all creditors",
        parameters: z.object({}), // Empty object if no parameters are needed
        render: async function* () {
          yield <LoadingAI />;

          return {
            component: (
              <CreditorBlock creditorList={creditorList as unknown as CreditorType[]} />

            ),
            data: {
              creditorList: creditorList,
            },
          };
        },
      },
      getTransactions: {
        description: "Get transactions",
        parameters: z.object({
          count: z.number().optional(),
        }),
        render: async function* ({ count = 10 }) {
          yield <LoadingAI />;

          return {
            component: (
              <TransactionBlock transactions={transactionList as unknown as TransactionType[]} />
            ),
            data: {
              transactionList: transactionList.slice(0, count),
            },
          };
        },
      },
      getBalance: {
        description: "Get balance",
        parameters: z.object({}),
        render: async function* () {
          yield <LoadingAI />;

          const balance = 1437.5;
          const percentageOfSettlement = 47;
          return {
            component: (
              <SummaryBlock balance={balance} percentageOfSettlement={percentageOfSettlement} />
            ),
            data: {
              balance: balance,
              percentageOfSettlement: percentageOfSettlement,
            },
          };
        },
      },
    },
  });

  return (
    <>
  
    <ChatContainer>
      {/* List of messages */}
      <SafeAreaView style={styles.container}> 
      <TouchableOpacity 
              style={tw`ml-4`}
              onPress={() => router.back()}
            >
              <Feather name="arrow-left" size={24} color={'rgb(0, 0, 0)'} />
            </TouchableOpacity>
      <FlatList
        data={messages}
        inverted
        contentContainerStyle={tw`flex-col-reverse p-3`}
        renderItem={({ item, index }) => (
          // Individual message component
          <ChatMessage
            message={item}
            isLastMessage={index === messages.length - 1}
            isLoading={isLoading}
            isStreaming={isStreaming}
            error={error}
          />
        )}
      />

      <View style={tw`flex flex-row items-end p-3 gap-x-2`}>
        {/* Text input field */}
        <View style={tw`grow basis-0`}>
          <ChatInput input={input} onInputChange={onInputChange} />
        </View>

        {/* Submit button */}
        <View style={tw`shrink-0`}>
          <ChatSubmitButton
            isLoading={isLoading}
            isStreaming={isStreaming}
            input={input}
            handleSubmit={handleSubmit}
          />
        </View>
      </View>
      </SafeAreaView>
    </ChatContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesList: {
    gap: 10,
  },
  inputWrapper: {
    backgroundColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 30,
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 