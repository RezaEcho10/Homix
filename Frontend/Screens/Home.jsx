import { View, Text, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import HeaderTab from '../Navigation/HeaderTab'
import Welcome from '../Components/Home/Welcome'
import Headlines from '../Components/Home/Headlines'
import Product from '../Components/Home/Product'
import {Foods} from '../Constant'

const Home = () => {
  const [food, setFood] = useState(Foods)
  const handleSearch = (value) => {
    const filtered = Foods.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

    if(filtered.length){
      setFood(filtered)
    }else{
      setFood(Foods)
    }
  }
  return (
    <SafeAreaView>
      <HeaderTab />
      <Welcome handleSearch={handleSearch} />
      <Headlines />
      <Product food={food} />
    </SafeAreaView>
  )
}

export default Home
