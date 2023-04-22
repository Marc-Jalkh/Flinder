import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth } from './Screens/Auth';
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Auth />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}