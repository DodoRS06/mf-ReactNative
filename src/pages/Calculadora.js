import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

import Container from '../components/container'
import Header from '../components/Header'
import Body from '../components/Body'
import Input from '../components/Input'

const Calculadora = () => {
  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  return (
    <Container>
      <Header title={'Calculadora Flex'} />
      <Body>
        <Input
          label="Preço da gasolina"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        <Input
          label="Preço do Etanol"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Calcular
        </Button>
        <Text style={styles.text}>{gas}</Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    margin: 8
  }
});

export default Calculadora;
