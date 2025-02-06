import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ScreenConfiguracion = () => {
  return (
    <View style={styles.pantalla}>
      <Text>Configuración</Text>

    <Link style={styles.enlace} href="/">Menú principal</Link>

    </View>
  )
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue'
    }
});

export default ScreenConfiguracion