import React from 'react';
import { StyleSheet, View, TextInput, Text, TextInputBase } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const AddBodyBookMark = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        style={{ marginBottom: 20 }}
        name="plus-a"
        size={24}
        color="black"
      />
      <Text style={{ fontSize: 20 }}>본인의 아이디를 등록해 주세요.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    borderStyle: 'dashed',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 30,
  },
});

export default AddBodyBookMark;
