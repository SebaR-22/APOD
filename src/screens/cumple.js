// Search by birthday
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import fectapod from "../api/fectapod";
import Layout from "../layout/layout";

export default Cumple = () => {
  const [fecha, setFecha] = useState("");
  const [imagen, setImagen] = useState(null);

  const buscarImagen = async () => {
    if (!fecha) return;
    const resultado = await fectapod(`&date=${fecha}`);
    setImagen(resultado);
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Buscá la imagen de tu cumple</Text>

        <TextInput
          placeholder="Escribí una fecha (YYYY-MM-DD)"
          placeholderTextColor="#999"
          value={fecha}
          onChangeText={setFecha}
          style={styles.input}
        />

        <TouchableOpacity 
          style={styles.searchButton}
          onPress={buscarImagen}
        >
          <Text style={styles.searchButtonText}>Buscar imagen</Text>
        </TouchableOpacity>

        {imagen && (
          <View style={styles.resultado}>
            <Text style={styles.imagenTitulo}>{imagen.title}</Text>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: imagen.url }}
                style={styles.resultImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.descripcion}>{imagen.explanation}</Text>
          </View>
        )}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 28,
    color: "white",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ff6b35",
    padding: 14,
    width: "100%",
    borderRadius: 12,
    marginBottom: 16,
    color: "white",
    backgroundColor: "rgba(255, 107, 53, 0.08)",
    fontSize: 16,
    fontWeight: "500",
  },
  searchButton: {
    backgroundColor: "#ff6b35",
    paddingVertical: 14,
    paddingHorizontal: 30,
    width: "100%",
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ff8555",
    shadowColor: "#ff6b35",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  resultado: {
    marginTop: 28,
    width: "100%",
    padding: 18,
    backgroundColor: "rgba(255, 107, 53, 0.08)",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#ff6b35",
  },
  imagenTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 14,
    textAlign: "center",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 14,
  },
  resultImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#ff6b35",
  },
  descripcion: {
    marginTop: 16,
    fontSize: 15,
    textAlign: "justify",
    color: "#e0e0e0",
    lineHeight: 24,
    backgroundColor: "rgba(255, 107, 53, 0.04)",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#ff6b35",
  },
});
