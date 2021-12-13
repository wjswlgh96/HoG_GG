import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

//? My Component

const SearchBodyContent = () => {
  return (
    <View
      style={{
        ...styles.container,
        flex: Platform.OS === 'ios' ? 9.4 : 9.2,
      }}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
});

export default SearchBodyContent;
