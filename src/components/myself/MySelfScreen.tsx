import React from 'react';
import { StyleSheet, View } from 'react-native';

//? My Components
import MySelfHeader from './MySelfHeader';
import MySelfBody from './MySelfBody';

const MySelfScreen = () => {
  return (
    <View style={styles.container}>
      <MySelfHeader />
      <MySelfBody />
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

export default MySelfScreen;
