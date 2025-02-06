import { Link } from "expo-router";
import { Text, View, StyleSheet, ImageBackground, Pressable, StatusBar} from "react-native";

export default function Index() {
  return (
      <ImageBackground source={require('../assets/images/screamer.png')} style={styles.pantalla}>
       <StatusBar hidden={true} />
        <View style={styles.oscurecer}>
        </View>
        <View style={styles.linea1}>
          <View style={styles.esquinaRectangulo}></View>
          <View style={styles.esquinaRectangulo2}></View>
          </View>

          <View style={styles.linea2}>
          <View style={styles.esquinaRectangulo3}></View>
          <View style={styles.esquinaRectangulo4}></View>
          </View>

          <Pressable><Text style={styles.texto}>Muestra tu QR aquí</Text></Pressable>
          </ImageBackground>

    
  );
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: require('../assets/images/screamer.png'),
        height: '100%',
        width: '100%',
    },
    oscurecer:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.5,
      borderColor: 'black',
      borderWidth: 250,
      borderLeftWidth: -200,
      borderTopWidth: 140
    },
    
    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue'
    },
    texto:{
      backgroundColor: '#434CB2',
      paddingVertical: 10,
      paddingHorizontal: 25,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 50,
      fontSize: 30
    },
    linea1:{
      flexDirection: 'row'
    },
    linea2:{
      flexDirection: 'row'
    },
    esquinaRectangulo:{
      borderColor: 'white',
      borderLeftWidth: 5,
      borderTopWidth: 5,
      width: 50,
      height: 50,
      margin: 75
      },
      esquinaRectangulo2:{
        borderColor: 'white',
        borderLeftWidth: 5,
        borderTopWidth: 5,
        width: 50,
        height: 50,
        transform: [{rotate: '90deg'}],
        margin: 75
      },
      esquinaRectangulo3:{
        borderColor: 'white',
        borderLeftWidth: 5,
        borderTopWidth: 5,
        width: 50,
        height: 50,
        margin: 75,
        transform: [{rotate: '270deg'}],

        },
        esquinaRectangulo4:{
          borderColor: 'white',
          borderLeftWidth: 5,
          borderTopWidth: 5,
          width: 50,
          height: 50,
          transform: [{rotate: '180deg'}],
          margin: 75
        }
});
