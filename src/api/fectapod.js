const apiKey = "JdxfUJaW8P6CbEhFCGMpYVW3gQYGtR7YsyHG3GwB";
const api = "https://api.nasa.gov/planetary/apod";

export default fectapod = async (parametros) => {
  try {
    const dateMatch = parametros.match(/date=([\d-]+)/);
    if (dateMatch) {
      const fecha = new Date(dateMatch[1]);
      const limite = new Date("1995-06-16");
      if (fecha < limite) {
        throw new Error("La fecha es anterior al inicio del servicio APOD (16 de junio de 1995).");
      }
    }

    const response = await fetch(
      `${api}?api_key=${apiKey}${parametros.length > 0 ? parametros : ""}`
    );
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error en fectapod.js:", error.message);
    return { error: error.message }; // También lo devolvemos por si lo necesitás mostrar en pantalla
  }
};
