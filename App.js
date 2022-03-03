import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text1]}>This is text example</Text>
      <Text style={[styles.text, styles.text2]}>This is text example</Text>
      <Text style={[styles.text, styles.text3]}>This is text example</Text>
      <Text style={[styles.text, styles.text4]}>This is text example</Text>
      <Text style={[styles.text, styles.text5]}>This is text example</Text>
      <Text style={[styles.text, styles.text6]}>This is text example</Text>
      <Text style={[styles.text, styles.text7]}>This is text example</Text>
      <Text style={[styles.text, styles.text8]}>This is text example</Text>
      <Text style={[styles.text, styles.text9]}>This is text example</Text>
      <Text style={[styles.text, styles.text10]}>This is text example</Text>
    </View>
  );
};

const styles = {
  container: {
    top: 20,
    marginLeft: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    marginBottom: 15,
  },
  text1: {
    color: 'yellow',
  },
  text2: {
    marginTop: 5,
    fontSize: 20,
    color: 'greenyellow',
  },
  text3: {
    fontWeight: 'bold',
  },
  text4: {
    fontStyle: 'italic',
  },
  text5: {
    textDecorationLine: 'underline',
  },
  text6: {},
  text7: {
    color: 'yellow',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  text8: {
    marginLeft: 20,
  },
  text9: {
    backgroundColor: 'yellow',
  },
  text10: {
    backgroundColor: 'rgba(154,205,50,0.08)',
    color: 'yellow',
  },
};

export default App;
