import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type MarcadorProps={
    victorias:number
    derrotas:number
}

export default function Marcador({victorias,derrotas}:MarcadorProps) {
    const total = victorias + derrotas;
    const porcentajeVictorias = total > 0 ? ((victorias / total) * 100).toFixed(0) : "0";
    const porcentajeDerrotas = total > 0 ? ((derrotas / total) * 100).toFixed(0) : "0";
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>
        Victorias: {victorias} ({porcentajeVictorias}%)
      </Text>
      <Text style={styles.texto}>
        Derrotas: {derrotas} ({porcentajeDerrotas}%)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: "row",            
        justifyContent: "space-between",  
        alignItems: "center",
        width: "100%",                    
        paddingHorizontal: 16
    },
    texto: {
        fontSize: 18,                     
        color: "#333"
    }
})