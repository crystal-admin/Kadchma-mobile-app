import React, { useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import WebBrowser from 'expo-web-browser';
import { WebView, WebViewNavigation } from 'react-native-webview';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  // const AppView = async () => {
  //     await WebBrowser.openBrowserAsync('https://kadchma2.kdsg.gov.ng/login/');
  // }
  
  // useEffect(() => {
  //   if(window.location.href == "https://kadchma2.kdsg.gov.ng/home-page/"){
  //       window.location.href = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app";
  //   }
  // });

  const onNavigationStateChange = (navigationState: WebViewNavigation) => {
      alert(navigationState.url);
      alert(navigationState.mainDocumentURL);
  }

  return (
    <View>
        <><WebView
          style={styles.container}
          originWhitelist={['*']}
          source={{ uri: 'https://kadchma2.kdsg.gov.ng/login/'}} 
          onNavigationStateChange={onNavigationStateChange}
        /></>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // color: "#000000",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
