import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';
import { View } from '../components/Themed';

export default function TabOneScreen() {

  const [visible, setVisible] = useState(false);
  let webviewRef = React.useRef(null);
  
  const ActivityIndicatorElement = () => {
      return (
        <View style={styles.activityIndicatorStyle}>
          <ActivityIndicator color="#196C15" size="large"/>
        </View>
      )
  }

  
  //   // alert(window.location.href);
  //   // redirect somewhere else
  //   if(url == 'https://kadchma2.kdsg.gov.ng/home-page/') {
  //     //const newURL = 'https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app';
  //     //const redirectTo = 'window.location = "' + newURL + '"';
  //     if(webviewRef.current == document.location.href){

  //     }
  //     //webviewRef.current.injectJavaScript("https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app");
  //   }

  //   return;
  // };
  
    const handleViewStart = (event: WebViewNavigationEvent) => {

      if(event.nativeEvent.url === "https://kadchma2.kdsg.gov.ng/home-page/"){
         event.nativeEvent.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
      }
      setVisible(true);
    }
 
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          style={{ flex: 1 }}
          originWhitelist={['*']}
          source={{ uri: "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app"}} 
          onNavigationStateChange={(event) => {          
            event.url = 'https://kadchma2.kdsg.gov.ng/home-page/'   
            if(event.url === 'https://kadchma2.kdsg.gov.ng/home-page/'){
              event.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
            }
          }}
          // ref={webviewRef} 
          onError={(event) => event.nativeEvent.description = "Unable to connect to Kadchma database server, possibly due to bad internet connection. To try again, please use the reload option above to reload this page or close and reopen the app."}
          javaScriptEnabled={true}
          //for cache storage
          domStorageEnabled={true}
          //injectedJavaScript={if(window.location.href){}}
          renderLoading={() => <ActivityIndicatorElement />}
          onLoadStart={(event) => handleViewStart(event)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <ActivityIndicatorElement /> : null }
      </SafeAreaView>
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
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center"
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
