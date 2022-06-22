import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity, Button, Platform, StyleSheet } from 'react-native';
// import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default class ModalScreen extends Component {

  // const {visible, setVisible} = useState<string>("true");

  reloader = () => {
    document.location.reload();
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={() => this.reloader()}>
          <Text>
            Reload this App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text>
            Clear App Cache
          </Text>
        </TouchableOpacity>
        
    
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: "#3dda83",
    padding: 20,
    margin: 10,
    borderRadius: 30,
    color: "#ffffff"
  },
  button2: {
    backgroundColor: "#3dda83",
    borderRadius: 30,
    padding: 20,
    color: "#ffffff"
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
