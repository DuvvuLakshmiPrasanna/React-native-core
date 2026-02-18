import react from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

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

const FlagListDemo = () => {

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

export default FlagListDemo;

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

