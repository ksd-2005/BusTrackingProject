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
      },
      {id:6,
      name:'RICKSHAW6' 
      }
   ]
   
 return (
    <View style={styles.container}>
      <FlatList
   data={RICKSHAW}
   keyExtractor={(item)=>item.id.toString()}
   renderItem={({item})=>{
     return (
       
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <>
          <Text style={styles.box}>
          {item.name} 
           </Text>
        
         </>
        
         </ScrollView>
       
     );
     }}
     numColumns={3}
   />
   </View>
   
  );
 }
 const styles=StyleSheet.create({
  box:{
     backgroundColor:'white',
    fontSize:15,
    
    color:'black',
    padding:25,
    borderWidth:1,
    margin:5,
    borderColor:'white',
    

   
  }
})
 export default E_RICKSHAW;