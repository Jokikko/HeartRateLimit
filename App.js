
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [hrlow, setHrlow] = useState(0);
  const [hrhigh, setHrhigh] = useState(0);

  function calculate() {
    const resultlow = ((220 - age) * 0.65) ; // Replace comma with dot and parse as float
    setHrlow(resultlow);
    const resulthigh = ((220 - age) * 0.85) ; // Replace comma with dot and parse as float
    setHrhigh(resulthigh);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.inputField}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{hrlow.toFixed(0)}-{hrhigh.toFixed(0)}</Text>
      <Button onPress={calculate} title="Calculate" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});
