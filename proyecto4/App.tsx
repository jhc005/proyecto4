import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { generarCategoriaAleatoria, generarDisplayInicial, generarPalabraAleatoria, realizarIntento } from './helpers/Funciones'
import Teclado from './components/Teclado'
import Marcador from './components/Marcador'

export default function App() {
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

  return (
    <View style={styles.contenedor}>
      <Text style={styles.categoriaTexto}>{Categoria}</Text>
      <Teclado pulsarLetra={pulsarLetra} letrasUsadas={LetrasUsadas}/>
      <Text style={styles.displayTexto}>{Display}</Text>
      <Marcador victorias={Victorias} derrotas={Derrotas}/>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    justifyContent:"space-between",
    padding:20,
    backgroundColor:"#f0f4f8"
  },
  categoriaTexto:{
    textAlign:"center",
    fontSize:28,
    color:"#555",
    backgroundColor:"#e0e7ef",
    paddingVertical:8,
    paddingHorizontal:16,
    borderRadius:16,
    fontWeight:"500",
    borderColor:"#b0c4d8",
    borderWidth:1.5
  },
  displayTexto:{
    textAlign:"center",
    fontSize:42,
    color:"#1A1A1A",
    letterSpacing:10,
    fontWeight:"bold",
    paddingVertical:14,
    paddingHorizontal:24,
    borderRadius:12,
    borderWidth:2,
    borderColor:"#d0d7de"
  }
})


