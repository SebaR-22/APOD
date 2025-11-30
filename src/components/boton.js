import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, StyleSheet } from "react-native";

export default Boton = ({ text = "Detalles", datos }) => {
  const navigation = useNavigation();

  const handlerClik = () => {
    navigation.navigate("Detalles", { datos });
  };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={() => handlerClik()}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff6b35",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ff8555",
  },
  buttonPressed: {
    backgroundColor: "#e55a25",
    opacity: 0.8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});