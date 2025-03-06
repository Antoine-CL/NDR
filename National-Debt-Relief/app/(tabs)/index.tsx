import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "@/components/ui/Header";
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from "@/components/ui/ExpenseBlock";
import IncomeBlock from "@/components/ui/IncomeBlock";
import TransactionsBlock from "@/components/ui/transactions/TransactionsBlock";
import ExpenseList from '@/data/creditors.json';
import incomeList from '@/data/banks.json';
import transactionList from '@/data/transactions.json';
import { useThemeColor } from "@/hooks/useThemeColor";
import Colors from "@/constants/Colors";
import { TransactionType } from "@/types/types";
 

const Page = () => {

  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');
  const [tintPrimary] = useThemeColor({}, 'tintPrimary');
  const [tintSecondary] = useThemeColor({}, 'tintSecondary');
  const [tintTertiary] = useThemeColor({}, 'tintTertiary');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingHorizontal: 20,
    },
  });
  
  const pieData = [
    {
      value: 47,
      color: '#1f2147',
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: '#2A2C60',
      text: "40%",
    },
    {
      value: 16,
      color: '#363878',
      text: "16%",
    },
    { 
      value: 3, 
      color: "#363878", 
      gradientCenterColor: "#FF7F97", 
      text: "3%" 
    },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: textColor, fontSize: 16 }}>
                <Text style={{ fontWeight: 700 }}>Balance</Text>
              </Text>
              <Text
                style={{ color: textColor, fontSize: 36, fontWeight: 700 }}
              >
                $1475.<Text style={{ fontSize: 22, fontWeight: 400 }}>00</Text>
              </Text>
            </View>
            <View style={{paddingVertical:20,alignItems:'center'}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                gradientCenterColor="#4B7BFF"
                sectionAutoFocus
                // focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor="white"
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <ExpenseBlock expenseList={ExpenseList} />

          {/* <IncomeBlock incomeList={incomeList} /> */}

          <TransactionsBlock transactions={transactionList as TransactionType[]} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;
