import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

//? My Component
import BodyInput from './bodysection/BodyInput';
import AddBodyBookMark from './bodysection/AddBodyBookMark';
import BodyBookMark from './bodysection/BodyBookMark';

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
    flex: 9,
    width: '90%',
    alignItems: 'center',
  },

  mainLogo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});

export default MainBody;
