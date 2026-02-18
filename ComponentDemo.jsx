import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ComponentDemo = () => {
  const Results = useSafeAreaInsets();
  console.log(Results);
  return (
    <>
      <StatusBar barStyle="light-content" hidden />
      <View style={[Mystyles.MystatusBar, { paddingTop: Results.top }]}></View>
      <Text>Aditya university</Text>
    </>
  );
};
export default ComponentDemo;

const Mystyles = StyleSheet.create({
  MystatusBar: {
    backgroundColor: "green",
  },
});
