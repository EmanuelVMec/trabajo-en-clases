import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0); // Estado para el contador
  const [backgroundColor, setBackgroundColor] = useState('#f5f5f5'); // Color de fondo inicial

  const increaseCount = () => {
    setCount(count + 1);
  };

  const changeBackgroundColor = () => {
    // Cambia el color de fondo a un color aleatorio
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <Text style={styles.counter}>Contador: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseCount}>
        <Text style={styles.buttonText}>Aumentar Contador</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changeBackgroundColor}>
        <Text style={styles.buttonText}>Cambiar Color de Fondo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default App;
