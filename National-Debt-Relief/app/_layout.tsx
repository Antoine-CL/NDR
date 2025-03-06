import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { router, Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useContext } from "react";
import { useAuth, AuthProvider } from "../context/AuthContext";

import { useColorScheme } from '@/hooks/useColorScheme';
import { KeyboardProvider } from 'react-native-keyboard-controller';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StackLayout = () => {
    const colorScheme = useColorScheme();
    const customLightTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255, 255, 255)',
        primary: 'rgb(31, 33, 71)',
        text: 'rgb(31, 33, 71)',
        textInverseColor: 'rgb(31, 33, 71)',
      },
    };
    const customDarkTheme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: 'rgb(67, 67, 67)',
        primary: 'rgb(233, 233, 233)',
        text: 'rgb(236, 237, 255)',
        textInverseColor: 'rgb(255, 46, 46)'
      },
    };
    const { authState } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    const [loaded] = useFonts({ SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')});

    // Monitor auth state changes
    useEffect(() => {
      const inAuthGroup = segments[0] === "(tabs)";
      
      if (!authState?.authenticated && inAuthGroup) {
        router.replace("/");
      } else if (authState?.authenticated) {
        router.replace("/(tabs)");
      }
    }, [authState]);

    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
  
    if (!loaded) {
      return null;
    }

    return (
      <ThemeProvider value={colorScheme === 'dark' ? customDarkTheme : customLightTheme}>
        <KeyboardProvider>
          <Stack screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </KeyboardProvider>
      </ThemeProvider>  
    );
}

const RootLayoutNav = () => {
	return (
 
		<AuthProvider>
			<StackLayout />
		</AuthProvider>

	);
};

export default RootLayoutNav;
