import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import Styles from '@/constants/styles';

export const Screen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <View style={[styles.screen]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Styles.headerHeight,
  },
});