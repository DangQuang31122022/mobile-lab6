import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./screens/s1";
import { createStaticNavigation } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Screen2 from "./screens/s2";
import Screen3 from "./screens/s3";

const RootStack = createNativeStackNavigator({
  screens: {
    s1: Screen1,
    s2: Screen2,
    s3: Screen3,
  },
});

const Navigation = createStaticNavigation(RootStack);
export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
