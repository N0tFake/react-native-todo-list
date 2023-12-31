import { SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import Home from './pages/Home';


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      // When all loading is setup, unmount the splash screen component.
      SplashScreen.hideAsync();
      setReady(true);
    }, 1000);
  }, []);

  return <Home />
}
