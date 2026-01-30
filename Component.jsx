import react from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Component = () => {
  const Results = useSafeAreaInsets();
  console.log(Results);
  return (
    <>
      <StatusBar barStyle="light-content" hidden />
      <View style={[Mystyles.MystatusBar, { paddingTop: Results.top }]}></View>
      <Text>Aditya university</Text>
    </>const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Component />
      </SafeAreaProvider>
    </>
  )
}
  );
};
export default Component;

const Mystyles = StyleSheet.create({
  MystatusBar: {
    backgroundColor: "green",
  },
});
