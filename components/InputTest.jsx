import React, { useState } from 'react'
import { Text, View,StyleSheet,TextInput, TouchableOpacity } from 'react-native'

function InputTest() {
    const [text,setText] = useState("");

    const printText = () => {
      if(text.length > 0){
      alert(text);
      setText("");
      }
    };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            InputTest
        </Text>
        <TextInput
        style={styles.input}
        placeholder="placeholder"
        keyboardType="default"
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={printText} >
        <Text>Yazdır</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width : '80%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor : '#F59C32',
        borderRadius : 5,
        width : '60%'
      },
      button: {
        alignItems: "center",
        backgroundColor: "#7A6FDC",
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
      },
      text :{
        color : 'white'
      }
  });
export default InputTest