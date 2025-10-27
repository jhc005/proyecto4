import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { generarCategoriaAleatoria, generarDisplayInicial, generarPalabraAleatoria, realizarIntento } from './helpers/Funciones'

const [Categoria,setCategoria]=useState("")
const [Palabra,setPalabra]=useState("")
const [LetrasUsadas,setLetrasUsadas]=useState("") 
const [Display,setDisplay]=useState("")
const [Victorias,setVictorias]=useState(0) 
const [Derrotas,setDerrotas]=useState(0)
const [Vidas,setVidas]=useState(6) 

function pulsarLetra(letra:string){
    setLetrasUsadas((e) => e + letra)

    const esta = realizarIntento(Palabra, Display, letra)

    if(esta.actualizado){
      setDisplay(esta.display)
      if(!esta.display.includes("-")){
        victoria()
      }

    } else {
      const nuevasVidas = Vidas - 1;
      setVidas(nuevasVidas);

      if (nuevasVidas <= 0) {
         derrota();
       }
    }
    console.log("Después:", esta.display);
}

function victoria(){
    setVictorias(Victorias+1)
    Alert.alert("Resultado","Has ganado",[{text:"Nueva Partida",onPress:()=>inicializarPartida()}])
}
function derrota(){
    setDerrotas(Derrotas+1)
    Alert.alert("Resultado",`Has perdido la palabra era:${Palabra}`,[{text:"Nueva Partida",onPress:()=>inicializarPartida()}])
}
function inicializarPartida(){
    const categoriaAleatoria=generarCategoriaAleatoria()
    const palabraAleatoria=generarPalabraAleatoria(categoriaAleatoria)
    setCategoria(categoriaAleatoria)
    setDisplay(generarDisplayInicial(palabraAleatoria))
    setLetrasUsadas("")
    setPalabra(palabraAleatoria)
    setVidas(6)



}









export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})


