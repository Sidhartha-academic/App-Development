import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Details = ({ navigation, route }) => {

  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText} >Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  image: {
    width: '100%',
    height: 600,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    marginTop: 20,
  },
  quantity: {
    fontSize: 18,
  },
  addToCartButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Details;