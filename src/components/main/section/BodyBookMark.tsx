import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BodyBookMark = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={{ fontSize: 28, color: 'black', fontWeight: '800' }}>
          즐겨찾기
        </Text>
      </View>
      <View style={styles.bodyView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  headerView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  bodyView: {},
});

export default BodyBookMark;
