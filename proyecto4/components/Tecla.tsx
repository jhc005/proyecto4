import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TeclaProps {
  letra: string;
  pulsarLetra: (letra: string) => void;
  usada: boolean;
}

export default function Tecla({ letra, pulsarLetra, usada }: TeclaProps) {
  const handlePress = () => {
    if (!usada) {
      pulsarLetra(letra);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.contenedor,usada && styles.contenedorDeshabilitado]}
      onPress={handlePress}
      disabled={usada}
      activeOpacity={usada ? 1 : 0.7}
    >
      <Text style={styles.textoLetra}>
        {letra}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: 40,
    height: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorDeshabilitado: {
    borderColor: '#999',
    backgroundColor: '#d3d3d3',
  },
  textoLetra: {
    textAlign: 'center',
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
  },
});

