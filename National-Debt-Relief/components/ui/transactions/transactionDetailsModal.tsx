import { TransactionType } from "@/types/types";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";

export default function TransactionDetailsModal({ visible, onClose, transaction }:
     { visible: boolean, onClose: () => void, transaction: TransactionType }) {
        
  if (!transaction) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{transaction.name}</Text>
          <Text style={styles.amount}>${transaction.amount}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
          
          <Pressable
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    minWidth: 300,
    minHeight: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    marginBottom: 10,
  },
  date: {
    color: '#666',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
});
