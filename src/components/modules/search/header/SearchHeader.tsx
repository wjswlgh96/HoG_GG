import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

//? My Component
import SearchHeaderRight from './module/SearchHeaderRight';
import SearchHeaderLeft from './module/SearchHeaderLeft';

const SearchHeader = () => {
  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? 30 : 20,
      }}>
      <SearchHeaderLeft />
      <SearchHeaderRight />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
});

export default SearchHeader;
