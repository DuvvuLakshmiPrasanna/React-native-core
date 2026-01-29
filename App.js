import react from "react";
import { View,Text,Button,TouchableOpacity,Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyImage from "./assets/favicon.png";
const App=()=>{
  return(
    // <View>
    //   <Text>Good Morning!</Text>
    // </View>
    <SafeAreaView>
      <Text style={{"color":"purple", "fontWeight":900}}>Hey Prasanna!</Text>
      <Button title="Click Me"/>
      <TouchableOpacity>
        <Text style={MyStyles.mytext}>Fade</Text>
      </TouchableOpacity>
      <Image source={MyImage}/>
      <Image source={{uri:"https://adityauniversity.in/static/media/naac.c2dc2d03caf809852f0a.webp"}} style={{"width": 200, "height": 200}}/>
    </SafeAreaView>
  )
}


export default App;
const MyStyles=StyleSheet.create({
  mytext:{
    color: 'blue',
    fontSize: 20
  }
})