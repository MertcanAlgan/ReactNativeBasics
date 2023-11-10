import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import InputTest from './InputTest';
import StyleTest from './StylesTest/StyleTest';

function TestPage() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Test Page
        </Text>
        <InputTest/>
        <StyleTest/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#121212'
    },
    text :{
      color : 'white'
    }
  });
export default TestPage