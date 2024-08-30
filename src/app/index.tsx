import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyEffect from '../components/MyEffect'
import DataFetching from '../components/DataFetching'

const index = () => {
  return (
    <View style={styles.body}>
    
      {/* <MyEffect /> */}
      <DataFetching />
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