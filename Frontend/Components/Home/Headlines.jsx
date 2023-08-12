import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'
import styles from './style'

const Headlines = () => {
  return (
    <View style={styles.Headlines}>
      <View style={styles.HeadlinesItems}>
        <Text>New Rivals</Text>
        <TouchableOpacity>
            <Ionicons name="ios-grid" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headlines