import React from "react";
import { View, Text,StyleSheet } from "react-native";

function NameTest(props) {
  return (
    <View>
      <Text style={styles.text}>İsim Propu: {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text : {
    color : 'white'
  }
});

export default NameTest;