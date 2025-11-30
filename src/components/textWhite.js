import { Text, StyleSheet } from "react-native";

export default TextWhite = ({ texto, isBold = false }) => {
  return (
    <Text style={[styles.text, isBold && styles.bold]}>
      {texto}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#e0e0e0",
    padding: 6,
    fontSize: 14,
    fontWeight: "400",
  },
  bold: {
    fontWeight: "600",
    color: "white",
    fontSize: 15,
  },
});