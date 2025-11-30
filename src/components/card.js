import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import TextWhite from "./textWhite";

export default Card = ({ title, date, url, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.lcontainer}>
        <TextWhite texto={title} isBold />
        <TextWhite texto={date} />
        <TextWhite texto="Ver Detalle →" isBold />
      </View>
      <View style={styles.rcontainer}>
        <Image style={styles.img} source={{ uri: url }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 90,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ff6b35",
  },
  container: {
    marginTop: 12,
    flexDirection: "row",
    padding: 12,
    backgroundColor: "rgba(255, 107, 53, 0.06)",
    borderColor: "#ff6b35",
    borderWidth: 1.5,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#ff6b35",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  lcontainer: {
    flex: 0.7,
    alignItems: "flex-start",
    paddingRight: 8,
  },
  rcontainer: {
    flex: 0.3,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
