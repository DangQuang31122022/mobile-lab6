import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

type BikeType = "All" | "Roadbike" | "Mountain";

interface Bike {
  id: string;
  name: string;
  price: number;
  image: any;
  description?: string;
  type: BikeType;
}

const bikes: Bike[] = [
  {
    id: "1",
    name: "Pinarello",
    price: 1800,
    image: require("../assets/bike1.png"),
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
  {
    id: "2",
    name: "Pina Mountai",
    price: 1700,
    image: require("../assets/bike2.png"),
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
  {
    id: "3",
    name: "Pina Bike",
    price: 1500,
    image: require("../assets/bike3.png"),
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: "4",
    name: "Pinarello",
    price: 1900,
    image: require("../assets/bike4.png"),
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: "5",
    name: "Pinarello",
    price: 2700,
    image: require("../assets/bike5.png"),
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Roadbike",
  },
  {
    id: "6",
    name: "Pinarello",
    price: 1350,
    image: require("../assets/bike6.png"),
    description:
      "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    type: "Mountain",
  },
];

export default function Screen2() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [selectedType, setSelectedType] = useState<BikeType>("All");

  const filteredBikes =
    selectedType === "All"
      ? bikes
      : bikes.filter((bike) => bike.type === selectedType);

  const renderBikeItem = ({ item }: { item: Bike }) => (
    <TouchableOpacity
      style={styles.bikeCard}
      onPress={() => {
        navigation.navigate("s3", { bike: item });
      }}
    >
      <TouchableOpacity style={styles.favoriteButton}>
        <Text style={styles.favoriteIcon}>♡</Text>
      </TouchableOpacity>
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        {["All", "Roadbike", "Mountain"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.filterButton,
              selectedType === type && styles.selectedFilter,
            ]}
            onPress={() => setSelectedType(type as BikeType)}
          >
            <Text
              style={[
                styles.filterText,
                selectedType === type && styles.selectedFilterText,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredBikes}
        renderItem={renderBikeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.bikeList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6347",
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF6347",
  },
  selectedFilter: {
    backgroundColor: "#FF6347",
  },
  filterText: {
    color: "#FF6347",
  },
  selectedFilterText: {
    color: "#fff",
  },
  bikeList: {
    justifyContent: "space-between",
  },
  bikeCard: {
    width: "48%",
    backgroundColor: "#FFF5EE",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  favoriteButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1,
  },
  favoriteIcon: {
    fontSize: 24,
    color: "#FF6347",
  },
  bikeImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  bikeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  bikePrice: {
    fontSize: 16,
    color: "#FF6347",
    marginTop: 5,
  },
});
