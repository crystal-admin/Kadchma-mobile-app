/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useEffect, useState } from 'react';
import { ColorSchemeName, Pressable, FlatList, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}



/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    //console.log("Running useEffect");
  }, [count]) 

  //console.log("Running render");
  // const reloader = () => {
  //   //console.log("reloading " + window.location.href);
  //   window.location.reload()
  // }

  // const dropDownBuilder = () => {
  //     //create elements
  //     let mainDiv = document.createElement("div");
  //     let style = document.createElement("style");
  //     let button = document.createElement("button");

      
  //     //adding attributes
  //     mainDiv.setAttribute("id", "dropdown");
    

  //     //adding all styles
  //     style.innerHTML = `
  //       #dropdown {
  //         position: relative;
  //         display: inline-block;
  //       }

  //       .show {display: block;}
  //     `;

  //     document.head.appendChild(style);
  // }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={TabOneScreen} 
        options={({ navigation }: RootTabScreenProps<any>) => ({
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#196C15", },
          headerTitleStyle: { color: "#ffffff"},
          title: 'Kadchma Enrollee Data App',
          tabBarIcon: ({ color }: any) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => setCount(count + 1)}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons name="ios-reload-circle" size={24} color="white" />
              {/* 
              <Entypo name="dots-three-vertical" size={24} color="#ffffff" />
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              /> */}
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Kadchma Enrollee Data App',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Entypo name="dots-three-vertical" size={24} color="black" />
              {/* <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              /> */}
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
