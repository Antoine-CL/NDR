/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorLight2 = '#096786';
const tintColorLight3 = '#074e66';

const tintColorDark = '#0a7ea4';
const tintColorDark2 = '#096786';
const tintColorDark3 = '#074e66';

const positiveNumber = '#008000';
const negativeNumber = '#FF0000';

const Colors = {
  light: {
    text: '#11181C',
    brandColorOne: '#1f2147',
    background: '#fff',
    secondaryBackground: '#d7d7d7',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    tintPrimary: tintColorLight,
    tintSecondary: tintColorLight2,  
    tintTertiary: tintColorLight3,
    positiveNumber: positiveNumber,
    negativeNumber: negativeNumber,
  },
  dark: {
    brandColorOne: '#1f2147',
    text: '#ECEDEE',
    background: '#151718',
    secondaryBackground: '#d7d7d7',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    tintPrimary: tintColorDark,
    tintSecondary: tintColorDark2,
    tintTertiary: tintColorDark3,
    positiveNumber: positiveNumber,
    negativeNumber: negativeNumber,
  },
};

export default Colors;