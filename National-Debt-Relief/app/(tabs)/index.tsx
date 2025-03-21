import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/ui/Header";
import { PieChart } from "react-native-gifted-charts";
import IncomeBlock from "@/components/ui/IncomeBlock";
import TransactionsBlock from "@/components/ui/transactions/TransactionsBlock";
import creditorList from '@/data/creditors.json';
import transactionList from '@/data/transactions.json';
import { useThemeColor } from "@/hooks/useThemeColor";
import Colors from "@/constants/Colors";
import { CreditorType, TransactionType } from "@/types/types";
import { Screen } from "@/components/ui/Screen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "./banking";
import CreditorBlock from "@/components/ui/CreditorBlock";
import SummaryBlock from "@/components/ui/summary/summary";

const Page = () => {

  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');
  const [tintPrimary] = useThemeColor({}, 'tintPrimary');
  const [tintSecondary] = useThemeColor({}, 'tintSecondary');
  const [tintTertiary] = useThemeColor({}, 'tintTertiary');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      paddingHorizontal: 20,
    },
  });

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
 
          <SummaryBlock balance={1437.5} percentageOfSettlement={47} />

          <CreditorBlock creditorList={creditorList as unknown as CreditorType[]} />

          <TransactionsBlock transactions={transactionList as TransactionType[]} />
        
        </ScrollView>
      </View>
    </>
  );
};

export default Page;
