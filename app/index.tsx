import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable, StatusBar, Alert, Button} from "react-native";
import { Camera, useCameraPermissions,CameraView, CameraType} from 'expo-camera';
import { GlobalStyles, media600 } from "@/app/themes/GlobalStyles";




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
      facing={"front"}
      onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
    // <View
        style={GlobalStyles.pantalla}>       
        <StatusBar hidden={true} />

        <View style={GlobalStyles.bloqueLargoOscuro}></View>

        <View style={media600.containerMedio}>
          <View style={GlobalStyles.bloquePequenioOscuro}></View>
          <View style={media600.bloquePequenioTransparente}></View>
          <View style={GlobalStyles.bloquePequenioOscuro}></View>
        </View>
        <View style={GlobalStyles.bloqueLargoOscuro}></View>

        <View style={media600.containerEsquinas}>
          <View style={GlobalStyles.esquinaRectangulo}></View>
          <View style={GlobalStyles.esquinaRectangulo2}></View>
          <View style={GlobalStyles.esquinaRectangulo3}></View>
          <View style={GlobalStyles.esquinaRectangulo4}></View>
        </View>

        <Pressable style={GlobalStyles.boton}><Text style={GlobalStyles.texto}>Muestra tu QR aquí</Text></Pressable>
      
     </CameraView>
    
  );
}

