import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TabOneScreen() {

  let webviewRef = React.useRef(null);

  const handleWebViewNavigationStateChange = ( newNavState: { url: any; }) => {

    
    const { url } = newNavState;
    if(!url) return;

    // one way to handle errors is via query string
    // if (url.includes('?errors=true')) {
    //   this.webview.stopLoading();
    // }
    // alert("detects this function");
    // alert(window.location.href);
    // redirect somewhere else
    if(url == 'https://kadchma2.kdsg.gov.ng/home-page/') {
      //const newURL = 'https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app';
      //const redirectTo = 'window.location = "' + newURL + '"';
      if(webviewRef.current == document.location.href){

      }
      //webviewRef.current.injectJavaScript("https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app");
    }

    return;
  };

  
    return (
      <><WebView
        onNavigationStateChange={(event) => {
          if(event.url === 'https://kadchma2.kdsg.gov.ng/home-page/'){
             event.url = "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app" 
          }
        }}
        style={styles.container}
        originWhitelist={['*']}
        source={{ uri: "https://kadchma2.kdsg.gov.ng/home-page/?request_type=mobile_app"}} 
        //onNavigationStateChange={handleWebViewNavigationStateChange}
        ref={webviewRef} 
      /></>
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
