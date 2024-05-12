import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../components/Styles';
import exportObj from '../logic/Optiones';
import convertirUnidades from '../logic/convertirUnidades';
import Toast from 'react-native-toast-message'; // Importa la biblioteca de mensajes
const { options, optionsLongitud, optionsMasa, optionsTemperatura, optionsTiempo, optionsVelocidad } = exportObj;

const HomeScreen = () => {
  const [historial, setHistorial] = useState([]);
  const [unidadSeleccionada, setUnidadSeleccionada] = useState(null);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState(options);
  const [inputValue, setInputValue] = useState('');
  const [desdeSeleccionado, setDesdeSeleccionado] = useState(null); // Nuevo estado para el picker "Desde"
  const [hastaSeleccionado, setHastaSeleccionado] = useState(null);

  const generateToastMessage = (text2) => {
    Toast.show({
      type: 'error',
      text1: 'Formato inválido',
      text2: text2,
      position: 'center', 
      visibilityTime: 4000,
    });
  };
  const handleConversion = () => {
    // Verifica si el inputValue es un número válido y no es negativo
    if (!isNaN(inputValue) && inputValue >= 0 && unidadSeleccionada && desdeSeleccionado && hastaSeleccionado) {
      if (desdeSeleccionado === hastaSeleccionado) {
        generateToastMessage('Las unidades de origen y destino son las mismas.');
      } else {
        const resultado = convertirUnidades(unidadSeleccionada, desdeSeleccionado, hastaSeleccionado, inputValue);
        const respuestafinal = `La conversión de ${inputValue} ${desdeSeleccionado} a ${hastaSeleccionado} es: ${resultado}`;
        setHistorial(prevHistorial => [{ id: Math.random().toString(), value: respuestafinal }, ...prevHistorial]);
      }
    } else {
      // Genera un mensaje personalizado según la condición
      if (!isNaN(inputValue) && inputValue < 0) {
        generateToastMessage('Por favor, ingrese un número válido y no negativo.');
      } else if (!unidadSeleccionada) {
        generateToastMessage('Por favor, seleccione una unidad para convertir.');
      }  else if (!desdeSeleccionado) {
        generateToastMessage('Por favor, seleccione la unidad de origen para convertir.');
      } else if (!hastaSeleccionado) {
        generateToastMessage('Por favor, seleccione la unidad de destino para convertir.');
      }
    }
  };

  const handleChangePicker = (value) => {
    setUnidadSeleccionada(value);
    switch (value) {
      case 'longitud':
        setOpcionesSeleccionadas(optionsLongitud);
        break;
      case 'masa':
        setOpcionesSeleccionadas(optionsMasa);
        break;
      case 'temperatura':
        setOpcionesSeleccionadas(optionsTemperatura);
        break;
      case 'tiempo':
        setOpcionesSeleccionadas(optionsTiempo);
        break;
      case 'velocidad':
        setOpcionesSeleccionadas(optionsVelocidad);
        break;
      default:
        setOpcionesSeleccionadas(options);
        break;
    }
  };
  const handleClearHistory = () => {
    setHistorial([]); // Vacía el historial
  };

  const handleConversionButtonPress = () => {
    handleConversion(); // Realiza la conversión cuando se presiona el botón
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.title}>Conversor de unidades</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Selecciona la unidad:", value: null }}
          onValueChange={(value) => handleChangePicker(value)}
          items={options}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Ingrese cantidad a convertir"
          keyboardType="numeric"
          returnKeyType="done" 
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
          minLength={0}
        />
      </View>
    
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Desde:", value: null }}
          onValueChange={(value) => setDesdeSeleccionado(value)}
          items={opcionesSeleccionadas}
          disabled={!unidadSeleccionada}
        />
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Hasta:", value: null }}
          onValueChange={(value) => setHastaSeleccionado(value)}
          items={opcionesSeleccionadas}
          disabled={!unidadSeleccionada}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Convertir"
          onPress={handleConversionButtonPress}
        />
        <Button
          title="Limpiar Historial"
          onPress={handleClearHistory}
          color={'red'}
        />
      </View>
      <Text style={styles.resultText}>Resultado</Text>
      
      <FlatList
        data={historial}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.resultText}>{item.value}</Text>}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
