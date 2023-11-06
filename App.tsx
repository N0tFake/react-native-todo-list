import { AppRegistry } from "react-native";
import Home from "./src/Home";
import {expo} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App(){
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded && !fontError])

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f30000'
//   }
// })

AppRegistry.registerComponent(expo.name, () => App )