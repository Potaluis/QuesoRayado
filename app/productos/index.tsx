import { View, Text, StyleSheet, FlatList, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { peliculas } from '@/data/peliculas.data';

const ScreenProductos = () => {
  return (
    <View style={styles.pantalla}>
      <FlatList
        data={peliculas}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
            <View style={{paddingBottom: 16}}>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Link style={styles.enlace} href={`./productos/${item.id}`}>Ver detalles</Link>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        margin: 10
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',   
    },
    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue',
        alignSelf: 'flex-end'
    }
});
export default ScreenProductos