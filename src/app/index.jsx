import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RandomUser from "../components/RandomUser";

const index = () => {
  return (
    <View>
      {/* <MyEffect /> */}
      {/* <DataFetching /> */}
      <RandomUser />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
