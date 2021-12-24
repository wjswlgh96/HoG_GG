import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

const SearchBodyHeader = () => {
  return (
    <View
      style={{ ...styles.container, flex: Platform.OS === 'ios' ? 0.7 : 1 }}>
      <Text style={styles.titleText}>최근 검색</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },

  titleText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
  },
});

export default SearchBodyHeader;
