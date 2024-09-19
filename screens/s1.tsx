import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen1() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/bike1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("s2");
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    aspectRatio: 1, // This will make the container shorter
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE4E1",
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: "80%",
    height: "80%",
  },
  shopName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
