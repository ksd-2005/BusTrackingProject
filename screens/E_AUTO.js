
import React, { useRef } from 'react';
import { ScrollView, Text,FlatList,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const E_AUTO = () => {
   const AUTO=[
      {id:1,
      name:'AUTO1'
      },
      {
        id:2,
        name:'AUTO2'
      },
      {id:3,
      name:'AUTO3'
      },
      {id:4,
      name:'AUTO4'
      },
      {id:5,
      name:'AUTO5'
      }

      ]
  
  return (
    <FlatList
   data={AUTO}
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
    

   
  }
})

export default E_AUTO;
