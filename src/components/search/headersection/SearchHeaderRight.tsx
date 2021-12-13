import React from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchHeaderRight = () => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={{ flex: 9, fontSize: 17 }}
        placeholder="소환사 검색"
      />
      <Fontisto
        style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : 12 }}
        name="search"
        size={24}
        color="#a1a1a1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export default SearchHeaderRight;
