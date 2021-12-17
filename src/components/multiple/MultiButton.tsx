import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MultiButton = (props: any) => {
  const { content } = props;

  return props.styles === 'styleOne' ? (
    <View style={styles.styleOne}>
      <Text style={styles.styleOneText}>{content}</Text>
    </View>
  ) : (
    <View style={styles.styleTwo}>
      <Text style={styles.styleTwoText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleOne: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 20,
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },

  styleOneText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },

  styleTwo: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },

  styleTwoText: {
    color: '#2196f3',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default MultiButton;
