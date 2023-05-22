import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Producer({ name, image, distance, stars }) {
  return <View style={styles.card}>
    <Image source={image} accessibilityLabel={name} style={styles.image}></Image>
    <View style={styles.info}>
      <Text style={styles.name}>{ name }</Text>
      <Text style={styles.distance}>{ distance }</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',

    //Android
    elevation: 4,
    
    //iOS:
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62
  }, 
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16
  }, 
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19
  }
});