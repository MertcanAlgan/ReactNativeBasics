import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function NavButton() {
    const navigation = useNavigation();

  const Navigate = () => {
    navigation.navigate("Nav")
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={Navigate}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom :20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});
