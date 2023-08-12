import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style' 
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from 'react-native-vector-icons'

const ProductCard = ({data}) => {
  const navigation = useNavigation()
  return (
      <TouchableOpacity style={{width: '100%', height: 400, marginRight: 30}} onPress={() => navigation.navigate('detail', {name: data.name, img: data.image, desc: data.description})}>
              <Image source={data.image} style={styles.ProductImg} resizeMode='cover' />
              <View style={{marginTop: 5, zIndex: 999}}>
                <Text style={[styles.TextProduct]}>{data.name}</Text>
                <Text style={[styles.TextProduct, {fontSize: 12, color: 'grey'}]}>{data.name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={styles.TextProduct}>2000 $</Text>
                  <TouchableOpacity>
                    <Ionicons name="add-circle" size={35} color='green' />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
  )
}

export default ProductCard