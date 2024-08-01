import React, { useRef } from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView,PanGestureHandler } from 'react-native-gesture-handler';
  
const BUS = () => {
 
    const Vehicle=[
      {id:1,
      name:'BUS1'
      },
      {
        id:2,
        name:'BUS2'
      }
      ]

  return (
   <FlatList
   data={Vehicle}
   renderItem={({item})=>{
     return (
       
         <View>
         <>
          <Text style={styles.box}>
          {item.name} 
           </Text>
        
         </>
        
         </View>
       
     );
     }}
   
   />
  );
};
const styles=StyleSheet.create({
  box:{
    backgroundColor:'white',
    fontSize:15,
    fontWeight:5,
    color:'black',
    padding:25,
    borderWidth:1,
    margin:5,
    borderColor:'white',
    // alignContent:'left'


   
  }
})
export default BUS;
