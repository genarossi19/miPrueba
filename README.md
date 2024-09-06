# React Native

## useReducer

### Sintaxis basica del useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

Desglosemos los elementos:

1. `reducer`: Es una función que toma dos parámetros: el estado actual (state) y una acción (action). El reducer define cómo el estado cambia en función de la acción que se le envía.

2. `initialState`: Es el valor inicial del estado que usará el reducer. Este valor puede ser cualquier tipo de dato (objeto, array, número, string, etc.).

3. `state`: Es el valor del estado actual después de que el reducer haya procesado las acciones anteriores. Lo obtienes a través de la desestructuración al llamar a useReducer.

4. `dispatch`: Es la función que se usa para enviar una acción al reducer. Cuando llamas a dispatch, estás indicando que algo ha ocurrido (como un clic en un botón) y quieres que el reducer actualice el estado en consecuencia.

### Ejemplo Basico : contador

```jsx
import React, { useReducer } from "react";

// Definir el estado inicial
//El estado inicial es un objeto con una propiedad count que comienza en 0.
const initialState = { count: 0 };

// Reducer: una función que toma state y action

/*El reducer toma el estado actual y una acción.
Dependiendo del tipo de acción (INCREMENT o DECREMENT), actualiza el estado.
Siempre devuelve un nuevo estado. ¡Nunca muta el estado actual directamente!
Si no se reconoce la acción (default), simplemente devuelve el estado actual sin cambios.*/
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
//EN EL COMPONENTE
function Counter() {
  // state es el estado actual que el reducer maneja.
  // dispatch es la función que usas para enviar una acción al reducer.

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/*ENVIANDO ACCIONES*/}
      {/*Cada botón usa dispatch para enviar una acción al reducer. La acción es un objeto con una propiedad type que indica qué debe hacer el reducer.*/}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

### VARIANTES DE LA SINTAXIS

1. Con la funcion reducer directamente en e; `useReducer`

```jsx
const [state, dispatch] = useReducer(
  (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  },
  { count: 0 }
);
```

2. Acciones mas complejas

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    default:
      return state;
  }
}

// Dispatch de una acción con un payload
dispatch({ type: "ADD_TODO", payload: "Nueva tarea" });
```

### Resumen

- useReducer

* `useReducer` toma una función `reducer` (que define cómo actualizar el estado) y un `initialState`.
* La función `reducer` recibe dos parámetros: el `state` actual y una `action` (que define qué tipo de cambio debe ocurrir).
* `dispatch` se usa para enviar acciones al reducer. Las acciones son objetos que típicamente contienen un `type` y, a veces, un `payload`.
* `useReducer` es útil cuando tienes un estado más complejo o múltiples acciones que afectan el estado, en lugar de usar múltiples `useState`.
