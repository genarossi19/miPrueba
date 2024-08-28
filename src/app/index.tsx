import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListData from '../components/ListData'
import ArrayOfObjects from '../components/ArrayOfObject'
import HugeList from '../components/HugeList'

const index = () => {
  return (
    <View style={styles.body}>
    
      <HugeList />
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