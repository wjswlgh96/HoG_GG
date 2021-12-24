import React from 'react';
import { StyleSheet, View } from 'react-native';

//? My Components
import SearchHeader from '../modules/search/header/SearchHeader';
import SearchBody from '../modules/search/body/SearchBody';

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
    backgroundColor: 'white',
  },
});

export default SearchScreen;
