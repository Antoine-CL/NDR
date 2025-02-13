import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Stack, useRouter, useSegments } from "expo-router";
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
    const [loaded] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });
    const { authState } = useAuth();
    const segment = useSegments();
    const router = useRouter();

    useEffect(() => {
      if (loaded) {
        SplashScreen.hideAsync();
      }
    }, [loaded]);
  
    if (!loaded) {
    
    }

    useEffect(()=>{
        const inAuthGroup = segment[0] === "(tabs)";
        
        if (!authState?.authenticated && inAuthGroup) {
            router.replace("/");
        } else if (authState?.authenticated === true) {
            router.replace("/(tabs)");
        }
    }, [authState]);

    return (
      <ThemeProvider value={colorScheme === 'dark' ? customDarkTheme : customLightTheme}>
        <KeyboardProvider>
        <Stack>
            {authState?.authenticated ? (
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            ) : (
                <Stack.Screen name="index" options={{ headerShown: false }} />
            )}
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
