import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//? My Components
import SearchHeader from './SearchHeader';
import SearchBody from './SearchBody';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchBody />
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

export default SearchScreen;
