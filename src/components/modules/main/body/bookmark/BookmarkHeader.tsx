import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BookmarkHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, color: 'black', fontWeight: '800' }}>
        즐겨찾기
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
});

export default BookmarkHeader;
