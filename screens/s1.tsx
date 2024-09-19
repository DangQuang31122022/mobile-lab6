import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Screen1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        A premium online store for sporter and their stylish choice
      </Text>

      <Image
        source={{ uri: "https://example.com/path/to/your/bike/image.jpg" }} // Thay thế bằng đường dẫn thực tế tới ảnh của bạn
        style={styles.bikeImage}
      />

      <Text style={styles.shopName}>POWER BIKE SHOP</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f0f0", // Màu nền xám nhạt
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  bikeImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  shopName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff5722", // Màu cam đậm
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
