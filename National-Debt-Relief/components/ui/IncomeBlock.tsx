import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types/types";
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from "@/constants/SVGIcons";
import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";



const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {

  const [textColor] = useThemeColor({}, 'text');
  const [tintPrimary] = useThemeColor({}, 'tintPrimary');
  const [tintSecondary] = useThemeColor({}, 'tintSecondary');
  const [tintTertiary] = useThemeColor({}, 'tintTertiary');
  const [backgroundColor] = useThemeColor({}, 'background');

  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    let icon = <DollarIcon width={22} height={22} color={textColor} />;
    if ( item.name == 'Freelancing' ) {
      icon = <WalletCardIcon width={22} height={22} color={textColor} />
    } else if (item.name == 'Interest') {
      icon = <WalletAddMoneyIcon width={22} height={22} color={textColor} />
    }

    let amount = item.amount.split(".");
    
    return (
      <View
        style={{
          backgroundColor: backgroundColor,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: "#666",
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              alignSelf: "flex-start",
            }}
          >
            {icon}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={textColor} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: textColor }}>{item.name}</Text>
        <Text style={{ color: textColor, fontSize: 18, fontWeight: "600" }}>
          ${amount[0]}.
          <Text style={{ fontSize: 12, fontWeight: "400" }}>{amount[1]}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={{ color: textColor, fontSize: 16, marginBottom: 20 }}>
        My <Text style={{ fontWeight: "700" }}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});
