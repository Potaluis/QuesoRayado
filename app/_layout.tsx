import { Slot, Stack } from "expo-router";
import ScreenConfiguracion from './configuracion/index';
import ScreenProductos from './productos/index';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf')
  });
  
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'yellow'
        }, 
        headerTintColor: 'blue',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Menú principal',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="productos/index"
        options={{
          title: 'Listado de productos'
        }}
      />
      <Stack.Screen
        name="configuracion/index"
        options={{
          title: 'Pantalla de ajustes',
          animation:'simple_push'
        }}
      />
    </Stack>
);}
