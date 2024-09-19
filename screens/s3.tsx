import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-paper";

export default function Screen3({ route }: any) {
  // get parameter from navigation
  const { bike } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 10 }}>
        <Image source={bike.image} style={styles.bikeImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.bikeName}>{bike.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discountPrice}>15% OFF 1350$</Text>
            <Text style={styles.originalPrice}>{bike.price}$</Text>
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{bike.description}</Text>
          <View style={styles.actionContainer}>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => setIsFavorite(!isFavorite)}
            >
              {/* <Heart
                stroke={isFavorite ? "#FF6347" : "#000"}
                fill={isFavorite ? "#FF6347" : "none"}
                strokeWidth={2}
                width={24}
                height={24}
              /> */}
              <Icon
                source="heart"
                color={isFavorite ? "#FF6347" : "#000"}
                size={40}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCardButton}>
              <Text style={styles.addToCardText}>Add to card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFF5EE",
  },
  bikeImage: {
    width: "100%",
    height: 320,
    resizeMode: "contain",
    backgroundColor: "#FFF5EE",
  },
  contentContainer: {
    padding: 16,
  },
  bikeName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6347",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 18,
    color: "#888",
    textDecorationLine: "line-through",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
    lineHeight: 20,
  },
  actionContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  favoriteButton: {
    padding: 8,
  },
  addToCardButton: {
    marginLeft: "auto",
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: "80%",
  },
  addToCardText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
