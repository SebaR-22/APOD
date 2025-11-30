import { Image, StyleSheet, Text, View } from "react-native";

export default Header = (props) => {
  const { texto = "Home" } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.text}>{texto}</Text>
      </View>
      <View style={styles.logoBox}>
        <Image
          source={require("../../assets/image/nasalogo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: "transparent",
  },
  logoBox: {
    width: 70,
    height: 70,
    backgroundColor: "rgb(7, 26, 93)",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ff6b35",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  titulo: {
    flex: 1,
    alignItems: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});