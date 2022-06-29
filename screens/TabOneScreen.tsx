import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import  { WebView }  from 'react-native-webview';
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes';
import { View } from '../components/Themed';


// const CountContext = React.createContext(0);

export default function TabOneScreen({ }) {
  // const { itemId, otherParam } = params;
  
  const [visible, setVisible] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [link, setLink] = useState("https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app");
  
  // let countValue = useContext(CountContext);

  // let webviewRef = React.useRef(null);
  
  const webView = WebView;

  
  const ActivityIndicatorElement = () => {
      return (
        <View style={styles.activityIndicatorStyle}>
          <ActivityIndicator color="#196C15" size="large"/>
        </View>
      )
  }

    // const YesReload = () => {
    //   return (
    //     <SafeAreaView style={styles.container}>
    //       <WebView
            
    //         style={{ flex: 1 }}
    //         originWhitelist={['*']}
    //         source={{ uri: "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app"}} 
    //         onError={(event) => event.nativeEvent.description = "Unable to connect to Kadchma database server, possibly due to bad internet connection. To try again, please use the reload option above to reload this page or close and reopen the app."}
    //         javaScriptEnabled={true}
    //         //for cache storage
    //         domStorageEnabled={true}
    //         //injectedJavaScript={if(window.location.href){}}
    //         renderLoading={() => <ActivityIndicatorElement />}
    //         // onLoadStart={(event) => handleViewStart(event)}
    //         // onLoad={() => setReload(true)}
    //       />
    //     </SafeAreaView>
    //     )
    //   }
  
      // const NoReload = () => {
      //   return (
      //     <SafeAreaView style={styles.container}>
      //       <WebView
      //         style={{ flex: 1 }}
      //         originWhitelist={['*']}
      //         source={{ uri: "https://kadchma2.kdsg.gov.ng/login"}} 
      //         // ref={webviewRef} 
      //         onError={(event) => event.nativeEvent.description = "Unable to connect to Kadchma database server, possibly due to bad internet connection. To try again, please use the reload option above to reload this page or close and reopen the app."}
      //         javaScriptEnabled={true}
      //         //for cache storage
      //         domStorageEnabled={true}
      //         //injectedJavaScript={if(window.location.href){}}
      //         renderLoading={() => <ActivityIndicatorElement />}
      //         // onLoadStart={(event) => handleViewStart(event)}
      //         onLoad={() => setReload(true)}
      //       />
      //     </SafeAreaView>
      //     )
      //   }
   
    // const webView = (Url: any) => {
    //   console.log("Working....");
    //   return (
    //     <SafeAreaView style={styles.container}>
    //       <WebView
    //         style={{ flex: 1 }}
    //         originWhitelist={['*']}
    //         source={{ uri: Url}} 
    //         // onNavigationStateChange={(event) => {           
    //         //   if(event.url === 'https://kadchma2.kdsg.gov.ng/home-page/'){
    //         //     event.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
    //         //   }
    //         // }}
    //         // ref={webviewRef} 
    //         onError={(event) => event.nativeEvent.description = "Unable to connect to Kadchma database server, possibly due to bad internet connection. To try again, please use the reload option above to reload this page or close and reopen the app."}
    //         javaScriptEnabled={true}
    //         //for cache storage
    //         domStorageEnabled={true}
    //         //injectedJavaScript={if(window.location.href){}}
    //         renderLoading={() => <ActivityIndicatorElement />}
    //         // onLoadStart={(event) => handleViewStart(event)}
    //         // onLoad={() => setVisible(false)}
    //       />
    //     {visible ? <ActivityIndicatorElement /> : null }
    //     </SafeAreaView>
    //     )
    //   }

    // const reloadPage = () => {
    //     return WebView.prototype.reload()
    // }

    const handleViewStart = (event: WebViewNavigationEvent) => {
      // console.log("loading.....is..happening..");
      setVisible(true);
     // setLink('https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app');
      setCount(count+1);
    }

    const handleViewEnd = (event: WebViewNavigationEvent) => {
      if(event.nativeEvent.url == "https://kadchma2.kdsg.gov.ng/home-page/"){
        event.nativeEvent.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
      }
      
      // console.log(event.nativeEvent.url);
      // console.log("loading.....has..ended..")
      setVisible(false);
      //setLink("https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app");
    }
 
    // const LoadingViewState = () => {
    //    setLink("https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app");
    //   //  reloadPage();
    // }


    const INJECTED_JAVASCRIPT = `(function() {
      if(window.location.href === "https://kadchma2.kdsg.gov.ng/home-page/"){
        window.location.href = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app"
      }
    })();`;

    const INJECTED_AFTER_CONTENT_LOAD = `(function() {

      window.initial = 0;

      window.increment = 1;

      if(window.increment > window.initial){
          window.location.reload();
      }

    })();`;

    // const INJECTED_JS = `(function() {
    //   window.ReactNativeWebView.postMessage(JSON.stringify({key : "value"}));
    // })();`;
  
    // const INJECTED_JS = `(function() {
    //   alert(countValue);
    // })();`;
  
  
    

    return (
      <SafeAreaView style={styles.container}>
        <WebView
        //  ref={webviewRef}
          onLoadProgress={function({ nativeEvent }){if(nativeEvent.url === 'https://kadchma2.kdsg.gov.ng/home-page/'){
            nativeEvent.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app"
          }}}
          onLoadStart={(event) => handleViewStart(event)}
          style={{ flex: 1 }}
          originWhitelist={['*']}
          onNavigationStateChange={(event) => {     
            if(event.url === 'https://kadchma2.kdsg.gov.ng/home-page/'){
               event.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
            } else {
               event.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
            }
          }}
          source={{ uri: link }} 
          onError={(event) => event.nativeEvent.description = "Unable to connect to Kadchma database server, possibly due to bad internet connection. To try again, kindly close and reopen the app."}
          javaScriptEnabled={true}
          // injectedJavaScriptForMainFrameOnly={true}
          injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT}
          //injectedJavaScript={INJECTED_JS}
          //for cache storage
          domStorageEnabled={true}
          renderLoading={() => <ActivityIndicatorElement />} 
          onLoad={(event) => handleViewEnd(event)}  
          // onMessage={(event) => {
          //   const data = JSON.parse(event.nativeEvent.data);
          //   alert(data)
          // }}
        />
        {visible ? <ActivityIndicatorElement /> : null }
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
