import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const featherIcons = {
    index: (props: any) => <Feather name='home' size={18} {...props}></Feather>,
    banking: (props: any) => <Feather name='dollar-sign' size={18} {...props}></Feather>,
    profile: (props: any) => <Feather name='user' size={18} {...props}></Feather>,
    transaction_fee: (props: any) => <Feather name='arrow-left' size={18} {...props}></Feather>,
    customer_fee: (props: any) => <Feather name='arrow-left' size={18} {...props}></Feather>,
    deposit: (props: any) => <Feather name='arrow-right' size={18} {...props}></Feather>,
  }

export default featherIcons;
