import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";


const Header = () => {
  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      // backgroundColor: 'red', 
  
    },
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 70,
      alignItems: "center",
      paddingHorizontal: 20,
      // borderColor: 'blue',
      // borderWidth: 1,
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
    <SafeAreaView style={styles.container}>
      <View
        style={styles.wrapper}
      >
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
    </SafeAreaView>
  );
};

export default Header;

