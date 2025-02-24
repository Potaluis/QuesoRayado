import { StyleSheet } from 'react-native'
import { Colores, Medidas, TamanoLetra, TipoLetra } from './Colores';


export const GlobalStyles = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },

  popUpContainer:{
    width: Medidas.m,
    height: (Medidas.m)/4,
    backgroundColor: Colores.white,
    position: 'absolute',
    borderRadius: 2000,
    flexDirection: "row",
    alignItems: "center",
    transform: [{ scale: 0 }]  
  },

  popUpIcon:{
    height: "100%",
    width: (Medidas.m)/4,
    justifyContent: "center",
    alignItems: "center",
  },

  popUpText:{
    fontFamily: "MontserratBold",
    fontSize: 25,
  },

  textContainer:{
    height: "100%",
    width: (Medidas.m)/2,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "MontserratBold",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  bloqueLargoOscuro: {
    width: '100%',
    height:'50%',
    backgroundColor: Colores.black,
    opacity: 0.3,
  },

  containerMedio:{
    flexDirection:'row',
    justifyContent: 'center',
    width:'100%',
    height:Medidas.m
  },

  bloquePequenioOscuro:{
    width: '50%',
    height: '100%',
    opacity: 0.3,
    backgroundColor: Colores.black
  },

  bloquePequenioTransparente:{
    width: Medidas.m,
    height: '100%',
  },

  permissionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: "Montserrat",
  },

  boton: {
    position: 'absolute',
    top: '10%',
    justifyContent: "center",
    alignItems: "center",

    height:70,
    width:420,     
    borderRadius: 35,
    backgroundColor: Colores.purple,
  },

  texto:{
    color: Colores.white,
    fontFamily: "MontserratBold",
    fontSize: 25,
  },

  containerEsquinas:{
    position: 'absolute',
    width: Medidas.m,
    height: Medidas.m,
  },
  esquinaRectangulo:{
    borderColor: Colores.white,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    width: 70,
    height: 70,
    position: 'absolute',
    top: -35,
    left: -35,
  },
  esquinaRectangulo2:{
    borderColor: Colores.white,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    width: 70,
    height: 70,
    transform: [{rotate: '90deg'}],
    position: 'absolute',
    right: -35,
    top: -35
  },
  esquinaRectangulo3:{
    borderColor: Colores.white,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    width: 70,
    height: 70,
    transform: [{rotate: '270deg'}],

    position:'absolute',
    bottom:-35,
    left:-35,
  },
  esquinaRectangulo4:{
    borderColor: Colores.white,
    borderLeftWidth: 5,
    borderTopWidth: 5,
    width: 70,
    height: 70,
    transform: [{rotate: '180deg'}],

    position:'absolute',
    bottom:-35,
    right:-35,

  }
})

export const media600 = StyleSheet.create({
 
  bloquePequenioTransparente:{
    width: Medidas.s,
    height: '100%',
  },

  containerMedio:{
    flexDirection:'row',
    justifyContent: 'center',
    width: '100%',
    height: Medidas.s,
  },

  containerEsquinas:{
    position: 'absolute',
    justifyContent: 'center',
    width: Medidas.s,
    height: Medidas.s,
  },

})