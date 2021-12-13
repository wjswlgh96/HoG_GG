import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const BodyInput = () => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={{ fontSize: 19 }}
        autoCapitalize="none"
        placeholder="소환사 검색"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default BodyInput;
