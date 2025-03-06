import { Redirect } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const { authState } = useAuth();
  
  if (authState?.authenticated) {
    return <Redirect href="/(tabs)" />;
  }
  
  return <Redirect href="/login" />;
}