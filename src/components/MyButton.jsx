import React from "react";
import { Button, View, Pressable, Text } from "react-native";

const MyButton = () => {
  return (
    <View>
      <Button
        title="MyButton"
        color={"red"}
        onPress={() => alert("MyButton")}
      />

      <Button
        title="disabledbutton"
        color={"red"}
        onPress={() => alert("MyButton")}
        disabled
      />
      <Pressable
        title="Pressable Button"
        color={"red"}
        onPress={() => alert("Pressable Button")}
        onLongPress={() => alert("Long Press")}
        onPressIn={() => console.log("Pressing")}
        onPressOut={() => console.log("Press Out")}
      >
        <Text>Pressable Button</Text>
      </Pressable>
    </View>
  );
};

export default MyButton;
