import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable, StatusBar, Alert, Button} from "react-native";
import { Camera, useCameraPermissions,CameraView, CameraType} from 'expo-camera';
import { GlobalStyles } from "@/app/themes/GlobalStyles";
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

  const [scale, setScale] = useState(0); // Estado para manejar el scale
  const [scaleIncorrecto, setScaleIncorrecto] = useState(0); // Para el popUp de error

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
      await setUsuarios(datos.docs.map((doc) => ({...doc.data(), id: doc.id})));
      console.log(usuarios);
    }
  }
  useEffect(()=>{logIn()},[])
  useEffect(()=>{
    cargarDatos().then(()=>{
      if(scanned){
      comprobarQR()
    }
    }
    )
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
        setScale(1);
        // alert("correcto")
        setTimeout(() => {
          setScale(0); // Oculta después de 3 segundos
          setScanned(false); // Permite nuevos escaneos
        }, 3000);      }
      else
      {
        setScaleIncorrecto(1);
        // alert("incorrecto")
        setTimeout(() => {
          setScaleIncorrecto(0); // Oculta después de 3 segundos
          setScanned(false); // Permite nuevos escaneos
        }, 3000);      }
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

  useEffect(() => {
    if (scanned && usuarios.length > 0) {
      comprobarQR();
    }
  }, [scanned, usuarios]);

  const handleBarCodeScanned = async ({ type, data }: Prop) => {
    
    // setQr(data);
    // setScanned(true);
    
    setQr(data);

    if (usuarios.length > 0) {
      setScanned(true);
    } else {
      await cargarDatos(); 
      setScanned(true);
    }

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

        <View style={GlobalStyles.containerMedio}>
          <View style={GlobalStyles.bloquePequenioOscuro}></View>
          <View style={GlobalStyles.bloquePequenioTransparente}></View>
          <View style={GlobalStyles.bloquePequenioOscuro}></View>
        </View>
        <View style={GlobalStyles.bloqueLargoOscuro}></View>
        
        <View style={GlobalStyles.containerEsquinas}>
          <View style={GlobalStyles.esquinaRectangulo}></View>
          <View style={GlobalStyles.esquinaRectangulo2}></View>
          <View style={GlobalStyles.esquinaRectangulo3}></View>
          <View style={GlobalStyles.esquinaRectangulo4}></View>
        </View>

        
        <View style={[GlobalStyles.popUpContainer, { transform: [{ scale: scale }] }]}>
          <View style={GlobalStyles.popUpIcon}>
            <Ionicons name="checkmark-circle" size={120} color={"green"}></Ionicons>          
          </View>
          <View style={GlobalStyles.textContainer}>
            <Text style={GlobalStyles.popUpText}>QR válido</Text>
          </View>
        </View>

        <View style={[GlobalStyles.popUpContainerIncorrecto, { transform: [{ scale: scaleIncorrecto }] }]}>
          <View style={GlobalStyles.popUpIcon}>
            <Ionicons name="close-circle" size={120} color={"red"}></Ionicons>          
          </View>
          <View style={GlobalStyles.textContainer}>
            <Text style={GlobalStyles.popUpText}>QR no válido</Text>
          </View>
        </View>
        <Pressable style={GlobalStyles.boton}><Text style={GlobalStyles.texto}>Muestra tu QR aquí</Text></Pressable>

     </CameraView>
    
  );
}

