import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import products_data from "./products_data.json"
import SearchBar from './SearchBar/SearchBar';
import ProductList from './ProductList/ProductList';

const App = () => {
  const [products, setProducts] = useState(products_data);


  const renderProducts = ({ item }) => <ProductList product={item} />

  const handleSearch = (text) => {
    const filteredList = products_data.filter(product => {
      const searchedText = text.toLowerCase()
      const currentTitle = product.title.toLowerCase()

      //searchedText currentTitle ın içinde varsa yani değeri -1 den büyükse döndürür
      return currentTitle.indexOf(searchedText) > -1
    })
    setProducts(filteredList)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATIKA STORE</Text>
      <SearchBar onChange={handleSearch}></SearchBar>
      <FlatList data={products} renderItem={renderProducts} numColumns={2}></FlatList>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  text: {
    fontSize: 30,
    color: "#7C33C2",
    fontWeight: "bold",
    paddingLeft: 13
  }

});
