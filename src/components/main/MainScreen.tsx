import React from 'react';
import { StyleSheet, View } from 'react-native';

//? My Component
import MainHeader from './MainHeader';
import MainBody from './MainBody';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <MainBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
