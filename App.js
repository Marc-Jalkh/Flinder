import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Auth  from './Screens/Auth';
export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
      <Auth />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}