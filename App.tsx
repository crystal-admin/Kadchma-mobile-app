import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// export const CountContext = React.createContext(0);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // const countValue = useContext(CountContext);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      <SafeAreaProvider>
        {/* <CountContext.Provider value={countValue}> */}
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        {/* </CountContext.Provider> */}
      </SafeAreaProvider>
    );
  }
}
