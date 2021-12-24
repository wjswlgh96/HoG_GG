import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightBlue } from '../../../assets/colors/color';

const UtilsButton = (props: any) => {
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
    borderColor: `${lightBlue}`,
    borderRadius: 20,
    backgroundColor: `${lightBlue}`,
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
    borderColor: `${lightBlue}`,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },

  styleTwoText: {
    color: `${lightBlue}`,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default UtilsButton;
