import { View, Text, Button } from "react-native";
import { useReducer } from "react";

//useReducer es un hook de React que permite gestionar el estado de un componente. A diferencia del useState, useReducer permite gestionar el estado de un componente de forma dinámica y reutilizable.

const initalState = {
  count: 0,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initalState;
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <View>
      <Text>{state.count}</Text>
      <Button title="increment" onPress={increment} />
      <Button title="decrement" onPress={decrement} />
      <Button title="reset" onPress={() => dispatch({ type: "reset" })} />
    </View>
  );
};

export default Counter;
