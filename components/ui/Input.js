import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../../constants/styles';

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    paddingVertical: 8,
    paddingHoriaontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
});
