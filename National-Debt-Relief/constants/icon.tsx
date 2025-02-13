import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

  export const icon = {
    index: (props: any) => <Feather name='home' size={24} {...props}></Feather>,
    explore: (props: any) => <Feather name='compass' size={24} {...props}></Feather>,
    profile: (props: any) => <Feather name='user' size={24} {...props}></Feather>,
  }