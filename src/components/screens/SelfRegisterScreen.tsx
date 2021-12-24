import React from 'react';
import { StyleSheet, View } from 'react-native';

//? My Components
import SelfRegisterHeader from '../modules/selfregister/header/SelfRegisterHeader';
import SelfRegisterBody from '../modules/selfregister/body/SelfRegisterBody';

const SelfRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <SelfRegisterHeader />
      <SelfRegisterBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelfRegisterScreen;
