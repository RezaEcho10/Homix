import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons} from 'react-native-vector-icons'
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import Profile from '../Screens/Profile'
import Detail from '../Screens/Detail'


const Tab = createBottomTabNavigator()

const FooterTab = () => {
  const ScreenOption = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 70
    }
  }
  return (
    <Tab.Navigator screenOptions={ScreenOption}>
      <Tab.Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons 
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? 'black' : 'grey'}
              />
            )
          }
        }}
      />
      <Tab.Screen 
        name='search'
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons 
                name={"search-sharp"}
                size={24}
                color={focused ? 'black' : 'grey'}
              />
            )
          }
        }}
      />
      <Tab.Screen 
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons 
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? 'black' : 'grey'}
              />
            )
          }
        }}
      />
      <Tab.Screen 
        name='detail'
        component={Detail}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons 
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? 'black' : 'grey'}
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default FooterTab