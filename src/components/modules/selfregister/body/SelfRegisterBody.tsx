import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//? My Components
import SelfRegisterBodyHeader from './bodymodule/SelfRegisterBodyHeader';
import SelfRegisterBodyInput from './bodymodule/SelfRegisterBodyInput';

const SelfRegisterBody = () => {
  return (
    <View style={styles.container}>
      <SelfRegisterBodyHeader />
      <SelfRegisterBodyInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '90%',
  },
});

export default SelfRegisterBody;
