import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Fontisto } from 'react-native-vector-icons'
import styles from './Navigation'

const HeaderTab = () => {
  return (
    <View style={styles.Header}>
        <View>
            <View style={styles.HeaderTab}>
                <Ionicons
                    name="location-outline"
                    size={24}
                 />
                 <Text>Newyork USA</Text>
                 <View>
                    <View style={styles.CartCounter}>
                        <Text style={styles.Carttxt}> 8 </Text>
                    </View>
                    <TouchableOpacity>
                        <Fontisto name="shopping-bag" size={24} />
                    </TouchableOpacity>
                 </View>
            </View>
        </View>
    </View>
  )
}

export default HeaderTab