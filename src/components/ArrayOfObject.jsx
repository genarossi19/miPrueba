import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ArrayOfObject = () => {
  const locations = [
    {
      id: 1,
      name: "Buenos Aires",
    },
    {
      id: 2,
      name: "Paris",
    },
    {
      id: 3,
      name: "Londres",
    },
    {
      id: 4,
      name: "New York",
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={locations}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default ArrayOfObject;

const styles = StyleSheet.create({});
