import { Link } from "expo-router";
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


  useEffect(()=>{
    (async()=>{
      const {status} = await Camera.requestCameraPermissionsAsync()

      if(status  !== 'granted'){
        alert('No tienes permisos');
      }

    })()
  },[])


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


if (!permission?.granted) {
  return (
    <View style={styles.container}>
      <Text style={styles.permissionText}>Permiso aceptado</Text>
      <Button title="Solicitar Permiso" onPress={requestPermission} />
    </View>
  );
}

  return (
  <CameraView
      style={styles.pantalla}
      facing={facing}
      onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
    >       <StatusBar hidden={true} />
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
    </CameraView>
    
  );
}

const styles = StyleSheet.create({
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
    oscurecer:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.5,
      borderColor: 'black',
      borderLeftWidth: 375,
      borderTopWidth: 165,
      borderRightWidth: 375,
      borderBottomWidth: 225
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
      fontSize: 25,
      transform: [{translateY: -50}],
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
