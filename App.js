import React from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import ComponentDemo from "./ComponentDemo";
import ImageDemo from "./ImageDemo";
import FormTask from "./FormTask";
import FlagListDemo from "./FlagListDemo";


   const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <FormTask/>
      </SafeAreaProvider>
    </>
  )
}

export default App;

// const Mystyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingTop: 10,
//     backgroundColor: "#fff",
//   },
//   parent: {
//     width: "100%",
//     flexDirection: "row",
//     marginVertical: 10,
//     backgroundColor: "#D9D9D9",
//     padding: 8,
//     borderRadius: 10,
//   },
//   Image_View: {
//     width: 100,
//     height: 100,
//   },
//   Image_Tag: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 25,
//   },
//   infoparent: {
//     justifyContent: "space-evenly",
//     marginLeft: 10,
//   },
//   SendName: {
//     fontSize: 24,
//   },
//   LastMsg: {
//     fontSize: 20,
//   },
// });

