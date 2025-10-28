import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

type props={
    vidas:number
}
export default function Horca({vidas}:props) {

    const getImageSource = () => {
    switch(vidas) {
      case 6: return require("../assets/ahorcado_0.png")
      case 5: return require("../assets/ahorcado_1.png")
      case 4: return require("../assets/ahorcado_2.png")
      case 3: return require("../assets/ahorcado_3.png")
      case 2: return require("../assets/ahorcado_4.png")
      case 1: return require("../assets/ahorcado_5.png")
      case 0: return require("../assets/ahorcado_6.png")
      default: return require("../assets/ahorcado_0.png")
    }
  }
  return (
    <Image
        source={getImageSource()}
        style={styles.imagenHorca}
        contentFit='contain'
    ></Image>
  )
}

const styles = StyleSheet.create({


    imagenHorca:{
        width:"70%",
        height:200,
    }


})