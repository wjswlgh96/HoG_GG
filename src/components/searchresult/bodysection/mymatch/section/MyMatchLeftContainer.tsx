import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyMatchLeftContainer = (props: any) => {
  const { match } = props;
  return (
    <View
      style={{
        ...styles.leftContainer,
        backgroundColor: match.participants.win ? '#64B1E4' : '#D66C66',
      }}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          {match.participants.win ? '승' : '패'}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          {Math.floor(match.gameDuration / 60)}:
          {match.gameDuration % 60 > 9
            ? (match.gameDuration % 60) + 1
            : '0' + (match.gameDuration % 60)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  leftContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
  },

  topContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#c0c0c0',
  },

  bottomContainer: {
    marginTop: 10,
  },

  topText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  bottomText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyMatchLeftContainer;
