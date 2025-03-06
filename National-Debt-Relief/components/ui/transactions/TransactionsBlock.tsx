import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TransactionType } from "@/types/types"; 
import Colors from "@/constants/Colors";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  NetflixIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "@/constants/SVGIcons"; 
import  featherIcons  from "@/constants/FeatherIcons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link, Stack } from "expo-router";
import TransactionDetailsModal from './transactionDetailsModal';

const TransactionsBlock = ({ transactions }: { transactions: TransactionType[] }) => {
  const [selectedItem, setSelectedItem] = useState<TransactionType | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [textColor] = useThemeColor({}, 'text');
  const [tintPrimary] = useThemeColor({}, 'tintPrimary');
  const [tintSecondary] = useThemeColor({}, 'tintSecondary');
  const [tintTertiary] = useThemeColor({}, 'tintTertiary');
  const [secondaryBackground] = useThemeColor({}, 'secondaryBackground');
  const [positiveNumber] = useThemeColor({}, 'positiveNumber');
  const [negativeNumber] = useThemeColor({}, 'negativeNumber');

  const styles = StyleSheet.create({
    spendingSectionWrapper: {
      marginVertical: 20,
      alignItems: "flex-start",
    },
    sectionTitle: {
      color: textColor,
      fontSize: 16,
      marginBottom: 20,
    },
    spendingWrapper: {
      flexDirection: "row",
      display: "flex",
      width: "100%",
      alignItems: "center",
      marginVertical: 10,
    },
    iconWrapper: {
      backgroundColor: secondaryBackground,
      padding: 15,
      borderRadius: 50,
      marginRight: 10,
    },
    textWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemName: {
      color: textColor,
      fontSize: 16,
      fontWeight: "600",
    },
  });
  
  let icon = <DollarIcon width={22} height={22} color={textColor} />;

  const handlePress = (item: TransactionType) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <>
    <View style={styles.spendingSectionWrapper}>
      <Text style={styles.sectionTitle}>
        My <Text style={{ fontWeight: "700" }}>Transactions</Text>
      </Text>

      {transactions.map((item) => {
        icon = featherIcons[item.type as keyof typeof featherIcons]({ 
          color: parseFloat(item.amount) >= 0 ? positiveNumber : negativeNumber 
        });

        return (
          <Pressable 
          key={item.id + "icon"}
          onPress={() => handlePress(item)}
          style={styles.spendingWrapper}
          >
        
             
              <View style={styles.iconWrapper}>{icon}</View>
              <View style={styles.textWrapper}>
                <View style={{ gap: 5 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={{ color: '#000' }}>{item.date}</Text>
                </View>
                <Text style={styles.itemName}>${item.amount}</Text>
              </View>
   
            </Pressable>
   
        );
      })}
    </View>

    <TransactionDetailsModal 
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      transaction={selectedItem as TransactionType}
    />
    </>
  );
};

export default TransactionsBlock;

