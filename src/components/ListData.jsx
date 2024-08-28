import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = ["apple", "banana", "orange"];
  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item}
        renderItem={({ item: fruit }) => <Text>{fruit}</Text>}
      />
      {/* similar a un map pero no me permite poner otro nombre que no sea item salvo que lo nombremos como se ve arriba. Las FlastList scrollean por defecto, no hay necesidad de agregar el ScrollView */}
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({});
