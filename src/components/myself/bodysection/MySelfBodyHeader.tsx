import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MySelfBodyHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`본인의 소환사 아이디를
등록해 주세요.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 40,
  },

  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default MySelfBodyHeader;
