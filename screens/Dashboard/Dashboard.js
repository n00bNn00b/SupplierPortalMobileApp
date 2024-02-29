import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Others from '../../components/Dashboard/Tabs/Others/Others'
import Notification from '../../components/Dashboard/Tabs/Notification/Notification'
import Profile from '../../components/Dashboard/Tabs/Profile/Profile'
import Home from '../../components/Dashboard/Tabs/Home/Home'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Dashboard({route,navigation}) {


  const {email,org_type,user_name,} = route.params.userData


  const focusedIcons = [
    <Ionicons name="home-outline" size={24} color="black" />,
    <Ionicons name="notifications-outline" size={24} color="black" />,
    <FontAwesome name="user-o" size={24} color="black" />,
    <AntDesign name="infocirlceo" size={24} color="black" />
  ]

  const unFocusedIcons = [
    <Ionicons name="home-sharp" size={24} color="#0044ba" />,
    <Ionicons name="notifications-sharp" size={24} color="#0044ba" />,
    <FontAwesome name="user" size={24} color="#0044ba" />,
    <AntDesign name="infocirlce" size={24} color="#0044ba" /> 
  ]

  const tabComponents = [
    {
      name:"Home",component:Home, 
      focusedIcon: focusedIcons[0],unFocusedIcon:unFocusedIcons[0]
    },
    {
      name:"Notifications",component:Notification, 
      focusedIcon: focusedIcons[1],unFocusedIcon:unFocusedIcons[1]
    }, 
    {
      name:"Profile",component: Profile, focusedIcon:focusedIcons[2],unFocusedIcon:unFocusedIcons[2]
    }, 
    {
      name:"Others",component:Others, focusedIcon:focusedIcons[3],unFocusedIcon:unFocusedIcons[3]
    }
  ]

  return (
    <Tab.Navigator >
      {
        tabComponents.map(({name,component,focusedIcon,unFocusedIcon})=>{
          return(
            <Tab.Screen key={name} name={name} component={component} options={{headerShown:false,tabBarIcon:({focused})=>(focused?unFocusedIcon:focusedIcon)}}/>
          )
        })
      }
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});