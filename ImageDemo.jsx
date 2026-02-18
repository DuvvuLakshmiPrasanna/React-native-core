import react from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import MyImage from "./assets/favicon.png";

const ImageDemo=()=>{
  return(
    // <View>
    //   <Text>Good Morning!</Text>
    // </View>
    <SafeAreaView>
      <Text style={{"color":"purple", "fontWeight":900}}>Hey Prasanna!</Text>
      <Button title="Click Me"/>
      <TouchableOpacity>
        <Text style={Mystyles.mytext}>Fade</Text>
      </TouchableOpacity>
      <Image source={MyImage}/>
      <Image source={{uri:"https://adityauniversity.in/static/media/naac.c2dc2d03caf809852f0a.webp"}} style={{"width": 200, "height": 200}}/>
    </SafeAreaView>
  )
}

export default ImageDemo;

const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  parent: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#D9D9D9",
    padding: 8,
    borderRadius: 10,
  },
  Image_View: {
    width: 100,
    height: 100,
  },
  Image_Tag: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  infoparent: {
    justifyContent: "space-evenly",
    marginLeft: 10,
  },
  SendName: {
    fontSize: 24,
  },
  LastMsg: {
    fontSize: 20,
  },
});

