import React from "react";
import {Text,View,ScrollView,StyleSheet,FlatList} from "react-native";
 
 const E_RICKSHAW=()=>{
   const RICKSHAW=[
      {
        id:1,
      name:'RICKSHAW1'
      },
      {
        id:2,
        name:'RICKSHAW2'
      },
      {id:3,
      name:'RICKSHAW3'
      },
      {
        id:4,
      name:'RICKSHAW4'
      },
      {id:5,
      name:'RICKSHAW5'
      }
   ]
   
 return (
    <FlatList
   data={RICKSHAW}
   renderItem={({item})=>{
     return (
       
         <ScrollView>
         <>
          <Text style={styles.box}>
          {item.name} 
           </Text>
        
         </>
        
         </ScrollView>
       
     );
     }}
   
   />
   
     
   
  );
 }
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
    

   
  }
})
 export default E_RICKSHAW;