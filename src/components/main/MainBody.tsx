import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

//? My Component
import BodyInput from './section/BodyInput';
import AddBodyBookMark from './section/AddBodyBookMark';
import BodyBookMark from './section/BodyBookMark';

const MainBody = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainLogo}
        source={require('../../images/Logo.png')}
      />
      <BodyInput />
      <AddBodyBookMark />
      <BodyBookMark />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainLogo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});

export default MainBody;
