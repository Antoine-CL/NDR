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
import { Screen } from "@/components/ui/screen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "./banking";
import CreditorBlock from "@/components/ui/CreditorBlock";
 

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
  
  const pieData = [
    {
      value: 47,
      color: '#000000',
      text: "47%",
    },
    {
      value: 40,
      color: '#000000',
      text: "40%",
    },
    {
      value: 16,
      color: '#000000',
      text: "16%",
    },
    { 
      value: 3, 
      color: "#000000", 
      text: "3%" 
    },
  ];

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Screen>
            <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 70,
            }}
          >
            <ThemedView style={{ gap: 10 }}>
                <ThemedView>
                  <ThemedText type="title">Balance</ThemedText>
                </ThemedView>
                <ThemedText style={{ fontSize: 24, fontWeight: 400 }} type="subtitle">$1475.<ThemedText style={{ fontSize: 20, fontWeight: 400 }} type="subtitle">00</ThemedText></ThemedText>
      
            </ThemedView>
            <View style={{paddingVertical:20,alignItems:'center'}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                gradientCenterColor="#4B7BFF"
                sectionAutoFocus
                focusOnPress
                strokeWidth={3}
                strokeColor="#fff"
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor="white"
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                       <ThemedText
                       type="default"
                        style={{
                          fontSize: 26,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                         47<ThemedText type="default" style={{fontSize: 12}}>%</ThemedText>
                      </ThemedText>
                    </View>
                  );
                }}
              />
              <ThemedText type="default" style={{fontSize: 8}}>of balance at settlement</ThemedText>
            </View>
          </View>

          <CreditorBlock creditorList={creditorList as unknown as CreditorType[]} />

          {/* <IncomeBlock incomeList={incomeList} /> */}

          <TransactionsBlock transactions={transactionList as TransactionType[]} />
          </Screen>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;
