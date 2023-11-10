import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

export default function CountUp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text>Azalt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text>Arttır</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color : 'white'
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});
