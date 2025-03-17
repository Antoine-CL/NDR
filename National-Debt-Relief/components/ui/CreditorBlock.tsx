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
import { CreditorType } from "@/types/types" 
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "../ThemedText";


const CreditorBlock = ({ creditorList }: { creditorList: CreditorType[] }) => {
  
  const [backgroundColor] = useThemeColor({}, 'background');
  const [textColor] = useThemeColor({}, 'text');

  const renderItem: ListRenderItem<Partial<CreditorType>> = ({
    item,
    index,
  }) => {
    if (index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View
            style={styles.addItemBtn}
          >
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    }

    let amount = item.amount?.split(".");

    return (
      <View
        style={[
          styles.expenseBlock,
        ]}
      >
        <Image source={
          item.name == "UpStart" ?
          require('../../assets/images/upstart.png') :
          item.name == "Wells Fargo" ?
          require('../../assets/images/wells-fargo.png') :
          item.name == "Bank of America" ?
          require('../../assets/images/bank-of-america.png') :
          item.name == "Loan Depot" ?
          require('../../assets/images/loan-depot.png') :
          require('../../assets/images/generic-lender.png')
          
          } style={styles.logo} />

        <Text
          style={[
            styles.expenseBlockTxt1,
            {
              color:
                item.name == "Food"
                  ? textColor
                  : textColor
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseBlockTxt2,
            {
              color:
                item.name == "Food"
                ? textColor
                : textColor
            },
          ]}
        >
          ${amount?.[0] ?? '0'}.
          <Text style={styles.expenseBlockTxt2Span}>{amount?.[1] ?? '00'}</Text>
        </Text>
        <View style={styles.expenseBlock3View}>
          <Text
            style={[
              styles.expenseBlockTxt1,
              {
                color:
                  item.name == "Food"
                  ? textColor
                  : textColor
              },
            ]}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const staticItem = [{ name: "Add Item" }];

  return (
    <View style={{paddingVertical: 20}}>
       <ThemedText style={styles.sectionTitle}>
        Creditor <Text style={{ fontWeight: "700" }}>Accounts</Text>
      </ThemedText>
      <FlatList
        style={{paddingVertical: 15}}
        data={staticItem.concat(creditorList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CreditorBlock;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 25,
    backgroundPosition: 'center',
    backgroundSize: 'contain, contain',
    backgroundRepeat: 'no-repeat',
    alignSelf: 'flex-start',
    marginBottom: 7
},  
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding:20,
    justifyContent: 'center',
    alignItems:'center'
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  expenseBlock: {
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 0.1,
  },
  expenseBlockTxt1: {
    // color: Colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    // color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: "400",
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
