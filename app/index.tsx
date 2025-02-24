import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable, StatusBar, Alert, Button} from "react-native";
import { Camera, useCameraPermissions,CameraView, CameraType} from 'expo-camera';
import { GlobalStyles, media600 } from "@/app/themes/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "@/Firebaseconfig";
import { collection, getDoc, getDocs, query } from "firebase/firestore";




type Prop = {
  type: string;
  data: string;
};

export default function Index() {
  const coleccionUsuarios = collection(db,'Usuarios');
  const [permission,requestPermission] = useCameraPermissions();
  const [scanned,setScanned] = useState(false);
  const [qr,setQr] = useState("");
  const [facing] = useState<CameraType>('front');
  const[email,setEmail]= useState('adminuser@test.com');
  const[password,setPassword]= useState('password');
  const[usuarios,setUsuarios]= useState<any>([]);
  const logIn = async ()=>{
    try{
      const user = await (signInWithEmailAndPassword(auth,email,password))
    }catch(error:any){
      console.log(error);
      Alert.alert("Ha ocurrido un error al iniciar sesión",error.message)
    }
  }
  const cargarDatos = async () => {
    if (auth.currentUser) {
      const q = query (coleccionUsuarios);
      const datos = await getDocs(q);
      setUsuarios(datos.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(usuarios);
    }
  }
  useEffect(()=>{logIn()},[])
  useEffect(()=>{
    cargarDatos()
    if(scanned){
      comprobarQR()
    }
    setInterval(()=>{setScanned(false);},5000)
  },[scanned])

  const comprobarQR=()=>{
    let correcto:boolean=false;
    console.log(qr)

    usuarios.forEach(function(element:any) {
      if(qr==element.email){
        correcto=true;
        console.log(qr)
        console.log(element.email);
      }
    });
    if(correcto)
      {
        alert("correcto")
      }
      else
      {
        alert("incorrecto")
      }
  }

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
    
    setQr(data);
    setScanned(true);
    
    //Reinicaimos los valores para el próximo escaneo

    
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
        
        <View style={GlobalStyles.popUpContainer}>
          <View style={GlobalStyles.popUpIcon}>
            <Ionicons name="checkmark-circle" size={80} color={"green"}></Ionicons>          
          </View>
          <View style={GlobalStyles.textContainer}>
            <Text style={GlobalStyles.popUpText}>QR válido</Text>
          </View>
        </View>

        <View style={GlobalStyles.popUpContainer}>
          <View style={GlobalStyles.popUpIcon}>
            <Ionicons name="close-circle" size={80} color={"red"}></Ionicons>          
          </View>
          <View style={GlobalStyles.textContainer}>
            <Text style={GlobalStyles.popUpText}>QR no válido</Text>
          </View>
        </View>

     </CameraView>
    
  );
}

