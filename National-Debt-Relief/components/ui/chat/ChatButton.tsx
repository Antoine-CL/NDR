import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';

export const ChatButton = () => {
  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');

  return (
    <Link href="/chat" asChild style={[styles.button]}>
      <TouchableOpacity >
        <Feather name="message-circle" size={30} color={textColor} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 10,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    zIndex: 1000,
  },
}); 