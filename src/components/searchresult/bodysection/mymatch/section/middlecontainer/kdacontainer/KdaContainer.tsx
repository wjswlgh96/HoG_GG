import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const KdaContainer = (props: any) => {
  const { match } = props;

  return (
    <View style={styles.container}>
      <View style={styles.kdaTopContainer}>
        <Text style={styles.kdaTopText}>{match.participants.kills} / </Text>
        <Text style={styles.kdaDeathText}>{match.participants.deaths}</Text>
        <Text style={styles.kdaTopText}> / {match.participants.assists}</Text>
      </View>
      <View style={styles.kdaBottomContainer}>
        <Text style={styles.kdaBottomText}>
          킬 관여{' '}
          {Math.ceil(
            (match.participants.kills + match.participants.assists) /
              (match.participants.totalTeamKills / 100),
          )}
          %
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  kdaTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  kdaBottomContainer: {},

  kdaTopText: {
    fontSize: 20,
    fontWeight: '600',
  },

  kdaDeathText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#D66C66',
  },

  kdaBottomText: {
    color: '#a1a1a1',
  },
});

export default KdaContainer;
