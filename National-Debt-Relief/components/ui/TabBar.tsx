import { View, Platform, StyleSheet, LayoutChangeEvent } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import TabBarButton from './TabBarButton';
import { useEffect, useState } from 'react';
import Animated,{ interpolate, ReduceMotion, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const [routes, setRoutes] = useState(state.routes.filter(route => route.name === 'index' || route.name === 'banking'));

const [dimensions, setDimensions] = useState({width: 100, height: 20});

const buttonWidth = dimensions.width /  routes.length;

const onTabBarLayout = (event: LayoutChangeEvent) => {
  const { width, height } = event.nativeEvent.layout;

  setDimensions({
    width: width,
    height: height
    });
}

const tabPositionX = useSharedValue(0);

const animatedStyle = useAnimatedStyle(() => {
    return {
    transform: [{ translateX: tabPositionX.value }],
  }
});

useEffect(() => {
    tabPositionX.value = 
    withSpring(buttonWidth * state.index, {
        duration: 1200,
        dampingRatio: 0.7,
        stiffness: 100,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        reduceMotion: ReduceMotion.System,
      })
    
  }, [state.index]);

  return (
           
    <View onLayout={onTabBarLayout} style={styles.tabBar}>
    <Animated.View style={[animatedStyle, {
            position: 'absolute',
             backgroundColor: colors.primary,
             borderRadius: 30,
             marginHorizontal: 12,
             height: dimensions.height -15,
             width: buttonWidth - 25,
             }]}>
        </Animated.View>
      {
      routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {

            const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabBarButton
                key={route.key}
                isFocused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
                label={label.toString()}
                routeName={route.name}
                color={colors.primary}
                colorFocused={'#fff'}
            />
        );
      })}
    </View>
  );
}


export const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 0.1,
  },
//   tabBarItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 5,
//   }
});

export default TabBar;