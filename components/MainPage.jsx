import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NameTest from './NameTest';
import CountUp from './CountUp';
import AxiosTest from './AxiosTest';
import NavButton from './NavButton';

function MainPage() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>
      <StatusBar style="auto" />
      <NameTest name={"Mertcan"} />
      <CountUp/>
      <AxiosTest/>
      <NavButton/>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#121212'
    },
    text : {
      color : 'white'
    }
  });
  
export default MainPage