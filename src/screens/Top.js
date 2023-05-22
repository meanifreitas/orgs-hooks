import React  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/logo.png';
import { loadTop } from '../services/loadData.js';

class Top extends React.Component {
  state = {
    top: {
      title: '',
      subtitle: ''
    }
  };

  refreshTop() {
    const returnValue = loadTop();
    this.setState({top: returnValue});
  }

  componentDidMount() {
    this.refreshTop();
  }

  render() {
    return <View style={styles.top}>
      <Image source={logo} style={styles.image}/>
      <Text style={styles.title}>{ this.state.top.title }</Text>
      <Text style={styles.subtitle}>{ this.state.top.subtitle }</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    marginTop: 30
  },
  image: {
    width: 70,
    height: 28
  },
  title: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  }, 
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  }
});

export default Top;