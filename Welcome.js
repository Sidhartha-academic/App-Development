import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import ProductCard from "./ProductCard";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Welcome = ({ navigation, route }) => {
  const { userData } = route.params;
  const [data, setData] = useState([
    { id: 1, name: "T-shirt Black", price: 250, image: require("./assets/T-shirtBlack.jpg") },
    { id: 2, name: "Jacket Black", price: 200, image: require("./assets/black.jpg") },
    { id: 3, name: "T-shirt Blue", price: 300, image: require("./assets/blue.jpg") },
    { id: 4, name: "Denim Jacket", price: 250, image: require("./assets/jacket.jpg") },
    { id: 5, name: "T-shirt White", price: 150, image: require("./assets/white.jpg") },
    { id: 6, name: "T-shirt Red", price: 150, image: require("./assets/red.jpg") }
  ]);

  return (
      <View style={styles.container}>
        <Header />
        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
          <Text style={styles.styleText}>Street Style</Text>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <FontAwesome5 name="shopping-cart" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { userData })}>
              <MaterialCommunityIcons name="account-circle" size={34} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <AntDesign name="search1" size={24} color="black" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              placeholderTextColor="#AAAAAA"
            />
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ProductCard
              item={item}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
  },
  styleText: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  inputWrapper: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
  },
  icon: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
});

export default Welcome;