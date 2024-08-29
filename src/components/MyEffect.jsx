import { View, Text, Button } from "react-native";
import { useEffect, useState } from "react";

const MyEffect = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.warn("effect called ");
  }, [state]);
  return (
    <View>
      <Button title="Button" onPress={() => setState(state + 1)} />
      <Text>{state}</Text>
    </View>
  );
};

export default MyEffect;
