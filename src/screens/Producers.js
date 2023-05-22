import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { loadProducers } from '../services/loadData';
import { FlatList } from 'react-native';
import Producer from './Producer';

export default function Producers({ top: Top}) {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const returnValue = loadProducers();
    setTitle(returnValue.title);
    setList(returnValue.list);
  }, []);

  const listTop = () => {
    return <>
      <Top></Top>
      <Text style={styles.title}>{ title }</Text>
    </>
  }

  return <FlatList
    data={list}
    renderItem={({ item }) => <Producer {...item}></Producer>}
    ListHeaderComponent={listTop}
  ></FlatList>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
    color: '#464646'
  }
});