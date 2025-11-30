import Layout from "../layout/layout";
import Header from "../components/header";
import Visor from "../components/visor";
import Card from "../components/card";
import { useEffect, useState } from "react";
import fectapod from "../api/fectapod";
import { FlatList, StyleSheet, TouchableOpacity, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Home = () => {
  const [imagen, setImagen] = useState({}); 
  const [muchasImagenes, setMuchasImagenes] = useState([]);

  useEffect(() => {
    const getimagen = async () => {
      const imagendeldia = await fectapod("");
      setImagen(imagendeldia);
    };

    const getMuchasImagenes = async () => {
      const hoy = new Date();
      const sieteDiasAntes = new Date(hoy);
      sieteDiasAntes.setDate(hoy.getDate() - 6);

      const format = (fecha) => fecha.toISOString().split("T")[0];

      const start = format(sieteDiasAntes);
      const end = format(hoy);

      const imagenes = await fectapod(`&start_date=${start}&end_date=${end}`);
      setMuchasImagenes(imagenes.reverse());
    };

    getimagen();
    getMuchasImagenes();
  }, []);

  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        
        <TouchableOpacity onPress={() => navigation.navigate("Detalles", { datos: imagen })}>
          <Visor
            title={imagen.title}
            date={imagen.date}
            url={imagen.url}
            explanation={imagen.explanation}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.birthdayButton}
          onPress={() => navigation.navigate("Cumple")}
        >
          <Text style={styles.birthdayButtonText}>Imagen de tu cumple</Text>
        </TouchableOpacity>

        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Últimos 7 días</Text>
        </View>

        <FlatList
          data={muchasImagenes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              date={item.date}
              url={item.url}
              onPress={() => navigation.navigate("Detalles", { datos: item })}
            />
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  birthdayButton: {
    backgroundColor: "#ff6b35",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 18,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ff8555",
    shadowColor: "#ff6b35",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  birthdayButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  listHeader: {
    marginTop: 12,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  listTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
});
