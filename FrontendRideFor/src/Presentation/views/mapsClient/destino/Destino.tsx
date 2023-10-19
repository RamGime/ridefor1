import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { styles } from './Styles'; // Importa tus estilos
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el ícono que desees

export const ViajeScreen = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [ubicacionUsuario, setUbicacionUsuario] = useState(null);
  const [isOrigenFocused, setIsOrigenFocused] = useState(false);
  const [isDestinoFocused, setIsDestinoFocused] = useState(false);
  const [isAddingStop, setIsAddingStop] = useState(false);

  const handleSeleccionarMapa = () => {
    // Implementa la funcionalidad para abrir un mapa y seleccionar una ubicación
  };

  const handleGuardarUbicacion = () => {
    // Implementa la funcionalidad para guardar la ubicación seleccionada
  };

  const handleAgregarParada = () => {
    setIsAddingStop(true);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, isOrigenFocused && styles.focused]}>
        <View style={styles.iconContainer}>
          <Icon name="map-marker" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          value={origen}
          onChangeText={(text) => setOrigen(text)}
          placeholder="¿Donde te recogemos?"
          onFocus={() => setIsOrigenFocused(true)}
          onBlur={() => setIsOrigenFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, isDestinoFocused && styles.focused]}>
        <View style={styles.iconContainer}>
          <Icon name="map-marker" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          value={destino}
          onChangeText={(text) => setDestino(text)}
          placeholder="¿A donde quieres ir?"
          onFocus={() => setIsDestinoFocused(true)}
          onBlur={() => setIsDestinoFocused(false)}
        />
      </View>

      {/* <View style={styles.addButtonContainer}>
  <TextInput
    style={styles.input}
    placeholder="+"
    onFocus={handleAgregarParada}
  />
</View> */}

      <TouchableOpacity style={styles.button} onPress={handleSeleccionarMapa}>
        <Icon name="map" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Seleccionar en el Mapa</Text>
      </TouchableOpacity>

      {ubicacionUsuario && (
        <View>
          <Text>Ubicación del Usuario:</Text>
          {/* <Text>{ubicacionUsuario.latitude}, {ubicacionUsuario.longitude}</Text> */}
          <Button title="Guardar Ubicación" onPress={handleGuardarUbicacion} />
        </View>
      )}
    </View>
  );
};
