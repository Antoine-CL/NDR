import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { LinearGradient } from "expo-linear-gradient";
import Styles from "@/constants/styles";

const Header = () => {
  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');
  const headerHeight = 70;

  const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: Styles.headerHeight,
    },
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: Styles.headerHeight,
      alignItems: "center",
      paddingHorizontal: 20,
    },
    userInfoWrapper: { 
      flexDirection: "row", 
      alignItems: "center", 
    },
    userImg: { 
      height: 50, 
      width: 50, 
      borderRadius: 30, 
    },
    userTxtWrapper: {
      marginLeft:10,
    },
    userText: {
      color: textColor,
    },
    boldText: {
      fontWeight:'700',
    },
    btnWrapper: {
      borderColor: "#666",
      borderWidth: 1,
      padding: 8,
      borderRadius: 10,
    },
    btnText: { 
      color: textColor, 
      fontSize: 12,
    },
  });
  

  return (
      <View
        style={styles.wrapper}
      >
         <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.4 )', 'rgba(255, 255, 255, 0 )']}
        locations={[0.5, 0.8, 1]}
        style={styles.background}
      />
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://avatars1.githubusercontent.com/u/17858766?s=88&v=4" }}
            style={styles.userImg}
          />
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>Welcome back</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              John Doe
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.btnWrapper}
        >
          <Text style={styles.btnText}>
            Add Creditor
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default Header;

