import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function ModalScreen() {

  const reloader = () => {
    window.location.reload();
    window.location.pathname = "/"
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => reloader()}>
        <Text>
          Reload
        </Text>
      </TouchableOpacity>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     

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
