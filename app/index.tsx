import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable, StatusBar, Alert, Button} from "react-native";
import { Camera, useCameraPermissions,CameraView, CameraType} from 'expo-camera';


type Prop = {
  type: string;
  data: string;
};

export default function Index() {

  const [permission,requestPermission] = useCameraPermissions();
  const [scanned,setScanned] = useState(false);
  const [facing] = useState<CameraType>('front');
  /*

  useEffect(()=>{
    (async()=>{
      const {status} = await Camera.requestCameraPermissionsAsync()

      if(status  !== 'granted'){
        const {status} = await Camera.requestCameraPermissionsAsync()
      }

    })()
  },[])
*/

  const handleBarCodeScanned = ({ type, data }: Prop) => {
    setScanned(true);
    Alert.alert(
      `Código ${type} Scaneado`, 
      `Datos: ${data}`,      
      [
        {
          text: 'OK',      
          onPress: () => setScanned(false),  
        }
      ],
      { cancelable: false } 
    );
};

/*
if (!permission?.granted) {
  return (
    <View style={styles.container}>
      <Text style={styles.permissionText}>Permiso aceptado</Text>
      <Button title="Solicitar Permiso" onPress={requestPermission} />
    </View>
  );
}*/

  return (
  <CameraView
      style={styles.pantalla}
      facing={facing}
      onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}>       
      <StatusBar hidden={true} />

      <View style={styles.overlay}>

        <View style={styles.oscuro} />

      <View style={styles.filacentral}>
      <View style={styles.oscuro} />
      <View style={styles.ventana}>

        <View style={styles.linea1}>
          <View style={styles.esquinaRectangulo}></View>
          <View style={styles.esquinaRectangulo2}></View>
          </View>

          <View style={styles.linea2}>
          <View style={styles.esquinaRectangulo3}></View>
          <View style={styles.esquinaRectangulo4}></View>
          </View>
          </View>
          <View style={styles.oscuro} />

          </View>
          <View style={styles.oscuro} />
          </View>

          <Pressable style={styles.boton}><Text style={styles.texto}>Muestra tu QR aquí</Text></Pressable>
    </CameraView>
    
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  oscuro: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Fondo semi-transparente
  },
  filacentral: {
    flexDirection: 'row',
    height: 230, // Altura de la ventana
  },
  ventana: {
    width: 230, // Ancho de la ventana
    height: '100%',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
    pantalla: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        width: '100%',
    },
    oscurecer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      borderColor: 'red',
      borderWidth: 1,
      backgroundColor: 'green',
      overflow: 'hidden'
    },

    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue'
    },
    boton: {
      marginTop: 450
    },
    texto:{
      backgroundColor: '#434CB2',
      paddingVertical: 10,
      paddingHorizontal: 25,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 50,
      fontSize: 25,
    },
    linea1:{
      flexDirection: 'row',
      marginTop: -100,
      transform: [{translateX: (-85)}, {translateY: (14)}]
    },
    linea2:{
      flexDirection: 'row',
      transform: [{translateX: (-85)}, {translateY: (14)}]
    },
    esquinaRectangulo:{
      borderColor: 'red',
      borderLeftWidth: 5,
      borderTopWidth: 5,
      width: 50,
      height: 50,
      margin: 75
      },
      esquinaRectangulo2:{
        borderColor: 'red',
        borderLeftWidth: 5,
        borderTopWidth: 5,
        width: 50,
        height: 50,
        margin: 75,
        transform: [{rotate: '90deg'}],
      },
      esquinaRectangulo3:{
        borderColor: 'red',
        borderLeftWidth: 5,
        borderTopWidth: 5,
        width: 50,
        height: 50,
        margin: 75,
        transform: [{rotate: '270deg'}],

        },
        esquinaRectangulo4:{
          borderColor: 'red',
          borderLeftWidth: 5,
          borderTopWidth: 5,
          width: 50,
          height: 50,
          transform: [{rotate: '180deg'}],
          margin: 75
        }
});
