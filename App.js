


import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import React, {useEffect,useState} from 'react';
import {StyleSheet,Text,Image,Dimensions} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BUS from "./screens/BUS";
import E_AUTO from "./screens/E_AUTO";
import E_RICKSHAW from "./screens/E_RICKSHAW";
const tab= createMaterialTopTabNavigator();
export default function App() {

    
  return (
    
  <>
 
 <Text style={{marginTop:Dimensions.get('window').height/2,fontSize:40}}>BUS</Text> 
  <NavigationContainer >
    <tab.Navigator
     tabBarOptions={{
    activeTintColor: '#e91e63',
    showIcon: true,


    iconStyle: { width:20, height: 20, marginTop: 2 },
    tabBarItemStyle: {
      // Adjust this value as needed
    },
    tabStyle: { height: 70 }
  }}
     screenOptions={
      
       ({ route }) => ({
       
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
             
            if (route.name === 'BUS') {
              iconName =  'bus';
              
            } else if (route.name === 'E_AUTO') {
              iconName = 'rickshaw-electric';
            } 
              else if (route.name === 'E_RICKSHAW') {
              iconName =  'golf-cart' ;
             }
        
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={20}  color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })

    }>
     <tab.Screen name="BUS" component={BUS}  />
     <tab.Screen name="E_AUTO" component={E_AUTO} />
     <tab.Screen name="E_RICKSHAW" component={E_RICKSHAW} />
    </tab.Navigator>
 
  </NavigationContainer>
  </>
  
   
  );
}
// const styles=StyleSheet.create({
//     box:{
//       backgroundColor:'white',
//       fontSize:15,
//       fontWeight:5,
//       color:'black',
//       padding:25,
//       borderWidth:1,
//       margin:5,
//       borderColor:'white',
//       // hard_coded
//       width:300,
//       height:500,
//       position:'absolute',
//         left:50,
       
//         top:100
//       // alignContent:'left'
//     }})

