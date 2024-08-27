import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import MyButton from '../components/MyButton'

const index = () => {
  return (
    <View style={styles.body}>
      <Card>myName</Card>
      <Card>myAge</Card>
      <Card>myFav</Card>
      <MyButton/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

     body : {   
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        height : '100%',
        width : '100%'

        
     }
})