import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileCard from '../components/ProfileCard'

const index = () => {
  return (
    <View style={styles.body}>
      <ProfileCard />
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