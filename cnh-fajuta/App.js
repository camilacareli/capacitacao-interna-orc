import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.span}>CNH - </Text>
        <Text style={styles.span}>C</Text>erteza que <Text style={styles.span}>N</Text>ão deveria estar{' '}
        <Text style={styles.span}>H</Text>abilitado
      </Text>
      <StatusBar style="auto" />

      <Image
        source={require('./assets/mesquita.jpg')}
        style={styles.profile}
      />

      <Text style={styles.description}>
      <Text style={styles.span}>Meliante:</Text> Mesquitão{'\n'}
      <Text style={styles.span}>Categoria:</Text> Doidão{'\n'}
      <Text style={styles.span}>Validade:</Text> Expulsão da Uber
      </Text>

      {/** Quando um usuário toca em um elemento envolvido por TouchableOpacity, o componente altera a opacidade para dar a impressão de feedback visual.  */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Baixar e deixar no bolso pois não tem carro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver link das corridas do carro alugado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fc67e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize:30,
  },
  span: {
    color: '#9659b5',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#9659b5',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  profile:{
    width:300,
    height:300,
    borderRadius:40,
    margin:10,
  }
});