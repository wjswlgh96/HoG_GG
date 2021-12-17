import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//? My Components
import MySelfBodyHeader from './bodysection/MySelfBodyHeader';
import MySelfBodyInput from './bodysection/MySelfBodyInput';

const MySelfBody = () => {
  return (
    <View style={styles.container}>
      <MySelfBodyHeader />
      <MySelfBodyInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '90%',
  },
});

export default MySelfBody;
