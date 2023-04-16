import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {List, text, FAB} from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/container';
import Body from '../components/Body';

import {getGastos} from '../services/GastosServiceDB';

import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

const Gastos = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [gastos,setGastos] = useState([]);

  useEffect(() => {
    getGastos().then((dados) =>{
      setGastos(dados);
    });
    
  }, [isFocused]);

  const renderItem = ({item}) => (
    <List.Item
      title={"R$" + item.valor.toFixed(2) + "( R$" + item.preco.toFixed(2)+ ")"}
      description={item.hodometro + ' km'}
      left={props => <List.Icon {...props} color={item.tipo == 0 ? 'red' : 'green' } icon="gas-station" />}
      right={props => <Text {...props} style={{alignSelf: 'center'}} > {item.data} </Text>}
      onPress={() => navigation.navigate('Abastecimento', {item})}
    />
  );

  return (
    <Container>
    <Header title={'Fuel Manager'} />
    <Body>
      <FlatList
        data={gastos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('Abastecimento')}
      />
    </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 8,
    right: 8,
    bottom: 8,
  },
});

export default Gastos;