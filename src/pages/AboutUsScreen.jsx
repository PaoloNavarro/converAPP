import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../components/Styles";

const AboutUsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Equipo de Desarrollo</Text>
      <DeveloperInfo
        name="Christian Armando Diaz López"
        imageUrl="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170501678/77402317-color-l%C3%A1piz-vista-frontal-hombre-morena-sin-rostro-con-gafas-ilustraci%C3%B3n-vectorial.jpg"
      />
      <DeveloperInfo
        name="Juan José Gómez Acuña"
        imageUrl="https://static.vecteezy.com/system/resources/previews/002/002/332/non_2x/ablack-man-avatar-character-isolated-icon-free-vector.jpg"
      />
      <DeveloperInfo
        name="Diego Esaú Hernández Magaña"
        imageUrl="https://c8.alamy.com/compes/2by6kcn/expresion-de-cara-de-joven-guapo-sonriendo-emocion-masculina-avatar-personaje-de-dibujos-animados-ilustracion-vectorial-aislada-sobre-fondo-blanco-2by6kcn.jpg"
      />
      <DeveloperInfo
        name="Paolo Isaac Navarro Rosales"
        imageUrl="https://i.pinimg.com/736x/58/93/53/5893538d2888dc4e6d82ecf0994b7d18.jpg"
      />
    </View>
  );
};

const DeveloperInfo = ({ name, imageUrl }) => {
  return (
    <View style={styles.developerContainer}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default AboutUsScreen;
