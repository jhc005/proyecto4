import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type Props={
    letra:string
    pulsarLetra:(letra:string)=> void
    usada:boolean
}


export default function Tecla({letra,pulsarLetra,usada=false}:Props) {
  return (
    

        <Pressable
            style={usada?styles.container:styles.containerDeshabilitado}
            disabled={true}
            onPress={()=>{
                
            }}
        
        >
        <Text style={styles.buttonText}>{letra}</Text>
        </Pressable>




  )
}

const styles = StyleSheet.create({


    container: {
        width:40,
        height:40,
        borderWidth:1,
        padding: 5,
        borderRadius:6,
        borderColor:"#ccc",
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        marginBottom: 20,
        fontSize: 22,
        color: '#333',
        fontWeight: '600',
    },
    containerDeshabilitado: {
        width:40,
        height:40,
        borderWidth:1,
        padding: 5,
        borderRadius:6,
        borderColor:"#999",
        backgroundColor: '#d3d3d3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    


})