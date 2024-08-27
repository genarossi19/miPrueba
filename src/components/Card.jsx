import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    height: 100,
    width: 300,
    borderRadius: 6,
    backgroundColor: "white",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",

    // Propiedades para la sombra
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5, // Sombra para Android
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
