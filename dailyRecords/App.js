import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_300Light, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';


import FlowProvider from './context/Provider';
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_300Light, Inter_400Regular, Inter_500Medium
  });


  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <FlowProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </FlowProvider>
  );
}
