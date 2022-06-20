import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { TouchableOpacity, Button, Platform, StyleSheet } from 'react-native';
// import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function ModalScreen() {

  // const {visible, setVisible} = useState<string>("true");

  const reloader = () => {
    window.location.reload();
  }

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => reloader()}>
        <Text>
          Reload
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      */}


      {/* <View style={styles.container}>
        <Dialog
          visible={visible}
          dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })}
        >
          <DialogContent>
            {}
          </DialogContent>
        </Dialog>
      </View> */}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
