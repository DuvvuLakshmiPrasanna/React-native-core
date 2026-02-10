import React from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyImage from "./assets/favicon.png";
import { StatusBar } from "react-native";
import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";
// const App=()=>{
//   return(
//     // <View>
//     //   <Text>Good Morning!</Text>
//     // </View>
//     <SafeAreaView>
//       <Text style={{"color":"purple", "fontWeight":900}}>Hey Prasanna!</Text>
//       <Button title="Click Me"/>
//       <TouchableOpacity>
//         <Text style={MyStyles.mytext}>Fade</Text>
//       </TouchableOpacity>
//       <Image source={MyImage}/>
//       <Image source={{uri:"https://adityauniversity.in/static/media/naac.c2dc2d03caf809852f0a.webp"}} style={{"width": 200, "height": 200}}/>
//     </SafeAreaView>
//   )
// }
const Person_1 = require("./assets/favicon.png");
const Person_2 = require("./assets/icon.png");
const Person_3 = require("./assets/splash-icon.png");
const Person_4 = require("./assets/adaptive-icon.png");
const Person_5 = require("./assets/favicon.png");

const MyData = [
  {
    id: 1,
    Img: Person_1,
    Name: "Durga",
    Msg: "Hai Hello",
  },
  {
    id: 2,
    Img: Person_2,
    Name: "Madhu",
    Msg: "Coming or not ?",
  },
  {
    id: 3,
    Img: Person_3,
    Name: "Hanumanth",
    Msg: "Single ?",
  },
  {
    id: 4,
    Img: Person_4,
    Name: "Girish",
    Msg: "Sitting when ?",
  },
  {
    id: 5,
    Img: Person_5,
    Name: "Gangadhar",
    Msg: "Kishore ni chudu ?",
  },
  {
    id: 6,
    Img: Person_1,
    Name: "Durga",
    Msg: "Hai Hello",
  },
  {
    id: 7,
    Img: Person_2,
    Name: "Madhu",
    Msg: "Coming or not ?",
  },
  {
    id: 8,
    Img: Person_3,
    Name: "Hanumanth",
    Msg: "Single ?",
  },
  {
    id: 9,
    Img: Person_4,
    Name: "Girish",
    Msg: "Sitting when ?",
  },
  {
    id: 10,
    Img: Person_5,
    Name: "Gangadhar",
    Msg: "Kishore ni chudu ?",
  },
];

const App = () => {
  // return (
  //   <>
  //     <SafeAreaProvider>
  //       <Component />
  //     </SafeAreaProvider>
  //   </>
  // )

  return (
    <SafeAreaView style={Mystyles.container}>
      <FlatList
        data={MyData}
        renderItem={({ item }) => (
          <View style={Mystyles.parent}>
            <View style={Mystyles.Image_View}>
              <Image style={Mystyles.Image_Tag} source={item.Img} />
            </View>
            <View style={Mystyles.infoparent}>
              <Text style={Mystyles.SendName}>{item.Name}</Text>
              <Text style={Mystyles.LastMsg}>{item.Msg}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default App;

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

