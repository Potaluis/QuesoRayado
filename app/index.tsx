import { Link } from "expo-router";
import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={styles.pantalla}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.enlace} href="./productos">Ir a productos</Link>
      <Link style={styles.enlace} href="./configuracion">Ir a configuracion</Link>
    </View>
  );
}
const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue'
    }
});
