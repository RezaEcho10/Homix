import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { Feather, Ionicons } from 'react-native-vector-icons'

const Welcome = ({handleSearch}) => {
  return (
    <View style={styles.Welcome}>
      <Text style={styles.Welcometxt}>Find the Most</Text>
      <Text style={[styles.Welcometxt, styles.WelcometxtColor]}>Luxurios Furniture</Text>
      <View style={styles.Search}>
        <View style={styles.SearchPlace}>
            <Feather style={styles.IconSearch} name="search" size={24} />
            <TextInput onChangeText={handleSearch} style={styles.InputSearch} placeholder='Enter Your Search' />
        </View>
        <View style={styles.Camera}>
            <Ionicons style={styles.IconCamera} name="camera-outline" size={24} />
        </View>
      </View>
    </View>
  )
}

export default Welcome