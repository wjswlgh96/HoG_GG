import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//? My Component
import SearchBodyTitle from './bodysection/SearchBodyTitle';
import SearchBodyContent from './bodysection/SearchBodyContent';

const SearchBody = () => {
  return (
    <View style={styles.container}>
      <SearchBodyTitle />
      <SearchBodyContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '100%',
  },
});

export default SearchBody;
