import { StyleSheet, Text, View, Image } from "react-native";
import TextWhite from "./textWhite";
import Boton from "./boton";

export default Visor = ({ title, url, date, explanation }) => {
  const datosImagen = { title, url, date, explanation };
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
      <Image source={{ uri: url }} style={styles.img} />
      <Text style={styles.texto}>{date}</Text>
      <Boton datos={datosImagen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "rgba(255, 107, 53, 0.08)",
    borderColor: "#ff6b35",
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
  },
  img: {
    alignSelf: "center",
    width: 200,
    height: 150,
    borderRadius: 12,
    marginVertical: 12,
    borderWidth: 2,
    borderColor: "#ff6b35",
  },
  texto: {
    paddingVertical: 8,
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});