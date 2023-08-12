import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';
import ProductCard from './ProductCard'

const Product = ({navigation, food}) => {


  return (
    <ScrollView style={{marginTop: 20}}>
          <View style={styles.Product}>
            <FlatList
             data={food}
             renderItem={({item}) => <ProductCard data={item} />}
             showsVerticalScrollIndicator={false}
             horizontal
             contentContainerStyle={{ columnGap: 20}}
             />
            
          </View>
    </ScrollView>
  )
}

export default Product