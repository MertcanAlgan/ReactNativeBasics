import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import axios from 'axios'

function AxiosTest() {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setUser(res.data)})
        .catch((err)=>console.log(err))
    },[])

  return (
    user.map((user)=>(<View key={user.id} style={styles.main}>
        <Text style={styles.text}>{user.name}</Text>
        <Text style={styles.text}>{user.username}</Text>
    </View>))
    
  )
}
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 5,
    margin: 'auto',
    padding : 5,
    marginBottom : 10,
    width: '90%',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: { width: 12, height: 32 },
        shadowOpacity: 1,
        shadowRadius: 80,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text : {
    textAlign : "center"
  }
});

export default AxiosTest