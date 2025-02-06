import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, Redirect, useNavigation } from 'expo-router'
import { peliculas } from '@/data/peliculas.data';

const ScreenProducto= () => {

    const { id } = useLocalSearchParams();
    const navegacion = useNavigation();
 
    const pelicula = peliculas.find(peli => peli.id == id);

    useEffect(() => {
        navegacion.setOptions({
            title: pelicula?.title
        });
    },[pelicula]);

    if ( !pelicula ) {
        return <Redirect href="/"/>
    }

    return (
    <View style={styles.contenedor}> 
    <Image style={styles.imagen}  source={{uri: pelicula.poster}}></Image>
    <View style={{flex:1}}>      
      <Text style={styles.titulo}>{pelicula.title}</Text>
      <Text>{pelicula.description}</Text>
      <Text>{pelicula.rating}</Text></View>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    imagen: {
        width: 100,
        height: 170,
        borderRadius: 10,
        marginRight: 10
    },
    titulo: {
        fontSize: 22
    },
    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue',
        alignSelf: 'flex-end'
    }
});
export default ScreenProducto