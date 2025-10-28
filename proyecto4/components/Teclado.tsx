import React from 'react'
import { View, StyleSheet } from 'react-native'
import Tecla from './Tecla'

type Props = {
  pulsarLetra: (letra: string) => void
  letrasUsadas: string
}

export default function Teclado({ pulsarLetra, letrasUsadas }: Props) {
  return (
    <View style={styles.contenedor}>
      
      <View style={styles.fila}>
        {"ABCDEFGHI".split("").map((letra) => (
          <Tecla
            key={letra}
            letra={letra}
            pulsarLetra={pulsarLetra}
            usada={letrasUsadas.includes(letra)}
          />
        ))}
      </View>

      <View style={styles.fila}>
        {"JKLMNOPQR".split("").map((letra) => (
          <Tecla
            key={letra}
            letra={letra}
            pulsarLetra={pulsarLetra}
            usada={letrasUsadas.includes(letra)}
          />
        ))}
      </View>

      <View style={styles.fila}>
        {"STUVWXYZ".split("").map((letra) => (
          <Tecla
            key={letra}
            letra={letra}
            pulsarLetra={pulsarLetra}
            usada={letrasUsadas.includes(letra)}
          />
        ))}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
})





