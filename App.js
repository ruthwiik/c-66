import * as React from 'react';
import { Text, View, StyleSheet,TextInput,} from 'react-native';
import * as Speech from "expo-speech" ;
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, initialWindowMetrics, } from 
'react-native-safe-area-context';
import {Header} from "react-native-elements"

export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
  <View style={styles.textContainer1}>
  <Header
  backgroundColor={"grey"}
  centerComponent={{
    text:"Text to Speech Converter",
    style:{color:"blue",fontSize:15,fontWeight:700}
  }}
  />
  <Text style={styles.text2}>
  Enter The Word
  </Text>
  <TextInput style={styles.inputBox}
  />
  </View>
  </SafeAreaProvider>
 

  
  
  

  
  );
}

}
   const styles=StyleSheet.create({
     textContainer1:{
       backgroundColor:"white",
       flex:1,
       justifyContent:"center"
     },
     inputBox:{
       borderWidth:1,
       width:"80%",
       height:40,
       alignSelf:'center',
       textAlign:"center",
marginTop:20


     },
text2:{
  fontSize:20,
  textAlign:"center",
  fontStyle:"bold",
  alignSelf:"center",
  fontWeight:"bold",

}

   })



