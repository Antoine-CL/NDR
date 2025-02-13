import { PlatformPressable, Text } from '@react-navigation/elements';
import {StyleSheet } from 'react-native';
import { icon } from '../../constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

const TabBarButton = ({routeName, color, colorFocused, label, isFocused, onPress, onLongPress}
    :{routeName: string, color: string, colorFocused: string, label: string, isFocused: boolean, onPress: () => void , onLongPress: () => void}) => {

        const scale = useSharedValue(0);
        useEffect(() => {
            scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {duration: 350 });
        }, [scale, isFocused]);

        const animatedTextStyle = useAnimatedStyle(() => { 
            const opacity = interpolate(scale.value, [0, 1], [1, 0]);
            return {
                opacity
            }
        });
        const animatedIconStyle = useAnimatedStyle(() => { 
            const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
            const top = interpolate(scale.value, [0, 1], [0, 9]);
            return {
                transform: [{
                    scale: scaleValue
                }],
                top: top
                }
            }
        );
    
    return (
        <PlatformPressable
     
            // href={buildHref(route.name, route.params)}
            // accessibilityState={isFocused ? { selected: true } : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            <Animated.View style={animatedIconStyle}>
            {icon[routeName as keyof typeof icon]({
                 color: isFocused ? colorFocused : color
                 })}
            </Animated.View>
           
            <Animated.Text style={[{ color: isFocused ? colorFocused : color, fontSize: 12}, animatedTextStyle]}>
              {label}
            </Animated.Text>
          </PlatformPressable>
    )
}

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      }
})

export default TabBarButton;