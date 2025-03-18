import {
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { BankingType, CreditorType } from "@/types/types" 
  import Colors from "@/constants/Colors";
  import { Feather } from "@expo/vector-icons";
  import { useThemeColor } from "@/hooks/useThemeColor";
  import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PieChart } from "react-native-gifted-charts";
  
  
  const SummaryBlock = ({balance, percentageOfSettlement}: {balance: number, percentageOfSettlement: number}) => {
  
    const [backgroundColor] = useThemeColor({}, 'background');
    const [textColor] = useThemeColor({}, 'text');
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
            <ThemedText style={{ fontSize: 24, fontWeight: 400 }} type="subtitle">${balance}.<ThemedText style={{ fontSize: 20, fontWeight: 400 }} type="subtitle">00</ThemedText></ThemedText>
  
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
                     {percentageOfSettlement}<ThemedText type="default" style={{fontSize: 12}}>%</ThemedText>
                  </ThemedText>
                </View>
              );
            }}
          />
          <ThemedText type="default" style={{fontSize: 8}}>of balance at settlement</ThemedText>
        </View>
      </View>
    );
  };
  
  export default SummaryBlock;