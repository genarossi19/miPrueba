import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/MyImage.jpg")} style={styles.image} />
      <Text style={styles.title}>ProfileCard</Text>
      <Text style={styles.info}>Hi my name is PoiZone</Text>
      <Pressable
        style={styles.button}
        onPress={() => alert("Thanks for Simple Press!")}
        onLongPress={() => alert("Thanks for Long Press!")}
      >
        <Text style={styles.textButton}>Press me</Text>
      </Pressable>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 350,
    width: 400,
    gap: 15,
    padding: 10,

    // Propiedades para la sombra
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5, // Sombra para Android
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  info: {
    fontSize: 15,
    color: "grey",
    fontWeight: "light",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  button: {
    textAlign: "center",
    width: 150,
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    textAlign: "center",
  },
});
