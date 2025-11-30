import Layout from "../layout/layout";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default Details = () => {
  const route = useRoute();
  const { datos } = route.params || {};

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        {datos?.url && <Image source={{ uri: datos.url }} style={styles.img} />}
        {datos?.title && <Text style={styles.title}>{datos.title}</Text>}
        {datos?.date && <Text style={styles.date}>{datos.date}</Text>}
        {datos?.explanation && <Text style={styles.exp}>{datos.explanation}</Text>}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    paddingBottom: 30,
  },
  img: {
    width: "100%",
    height: 280,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#ff6b35",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "white",
    textAlign: "center",
    lineHeight: 28,
  },
  date: {
    fontSize: 14,
    color: "#ff9966",
    fontWeight: "600",
    marginBottom: 20,
  },
  exp: {
    fontSize: 15,
    marginTop: 8,
    color: "#e0e0e0",
    textAlign: "justify",
    lineHeight: 24,
    backgroundColor: "rgba(255, 107, 53, 0.08)",
    padding: 14,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#ff6b35",
  },
  errorText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
