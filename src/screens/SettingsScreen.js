import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from "../theme/theme";
import TabContainer from "../components/TabContainer";

const categories = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleCategoryPress = (category) => {
    console.log(`Pressed category: ${category}`);
    // Do something with the selected category, such as filtering the search results
  };

  return (
    <TabContainer>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchTerm}
        />
        <Text style={styles.text}>Search Screen</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryButton}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </TabContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },
  text: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.body,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryButtonText: {
    color: COLORS.body,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SearchScreen;
