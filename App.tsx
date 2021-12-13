/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

//? My Components
import MainHeader from './src/components/main/MainHeader';
import MainBody from './src/components/main/MainBody';

const App = () => {
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

export default App;
