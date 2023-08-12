import { View, Text, Image, TouchableOpacity } from 'react-native'
import React,{useState, useContext} from 'react'
import styles from '../Components/Home/style'
import {Ionicons} from 'react-native-vector-icons'

const Detail = ({route}) => {
 const {name, img} = route.params
  return (
    <View>
      <View style={[styles.BackTitle, {position: 'absolute', top: 5,zIndex: 999}]}>
        <TouchableOpacity>
          <Ionicons name='chevron-back-circle' size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name='heart' size={25} />
        </TouchableOpacity>
      </View>
      <Image source={img} style={{width: '100%', height: 200}} />
      <View style={styles.ProductInfo}>
        <View style={{justifyContent: 'center', width: '90%', margin: 'auto', alignItems: 'center', marginTop: 15}}>
          <Text style={{color: 'white'}}>{name}</Text>
          <Text>2000 $</Text>
        </View>
        <View style={{justifyContent: 'center', width: '90%', margin: 'auto', alignItems: 'center', marginTop: 15}}>
          <Text style={{color: 'white'}}>{name}</Text>
          <Text>2000 $</Text>
        </View>
    </View>
    </View>
  )
}

export default Detail