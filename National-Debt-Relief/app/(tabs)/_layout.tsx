import { Tabs } from 'expo-router';
import { Easing, Platform, SafeAreaView, StyleSheet, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabBar from '@/components/ui/TabBar';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Header from '@/components/ui/Header';
import React from 'react';
import { ChatButton } from '@/components/ui/chat/ChatButton';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <>
      <Tabs
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          header: () => <Header />,
          headerTransparent: true,
          headerShown: true,
          headerStyle: {
            marginBottom: 50,
          },
    
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarButton: HapticTab,
          // tabBarBackground: TabBarBackground,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
          }}
        />
        <Tabs.Screen
          name="banking"
          options={{
            title: 'Banking',
          }}
        />
      </Tabs>
      <ChatButton />
    </>
  );
}
