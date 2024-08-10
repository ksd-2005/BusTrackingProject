
import React, { useRef } from 'react';
import { ScrollView, Text,FlatList,StyleSheet,View } from 'react-native';

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
      },
      {id:6,
      name:'AUTO6'
      }

      ]
  
  return (
    <View style={styles.container}>
      <FlatList
   data={AUTO}
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
};
const styles=StyleSheet.create({
  box:{
     backgroundColor:'white',
    fontSize:15,

    color:'black',
    padding:25,
    borderWidth:1,
    margin:5,
    borderColor:'white',
    

   
  },
  container:{
    flex:1,
    padding:10
  }
})

export default E_AUTO;