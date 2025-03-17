import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import BankingBlock from '@/components/ui/BankingBlock';
import bankingList from '@/data/banks.json';
import { BankingType } from '@/types/types';

export default function BankingScreen() {
  console.log("Parent bankingList", bankingList);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/banking-art.jpg')} style={styles.logo} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Manage Banking</ThemedText>
        <ThemedText type="default">Add, edit, or delete bank accounts, used to pay off creditors.</ThemedText>
      </ThemedView>
      
      <BankingBlock bankingList={bankingList as unknown as BankingType[]} />
    
    </ParallaxScrollView>
  );
}

export const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
  },
});
