import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//? Color
import {
  loseRed,
  lightGray,
} from '../../../../../../../../../../assets/colors/color';

const KdaContainer = (props: any) => {
  const { match } = props;

  return (
    <View style={styles.container}>
      <View style={styles.kdaTopContainer}>
        <Text style={styles.kdaTopText}>{match.myRecords.kills} / </Text>
        <Text style={styles.kdaDeathText}>{match.myRecords.deaths}</Text>
        <Text style={styles.kdaTopText}> / {match.myRecords.assists}</Text>
      </View>
      <View style={styles.kdaBottomContainer}>
        <Text style={styles.kdaBottomText}>
          킬 관여{' '}
          {Math.ceil(
            (match.myRecords.kills + match.myRecords.assists) /
              (match.totalTeamKills / 100),
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
    color: `${loseRed}`,
  },

  kdaBottomText: {
    color: `${lightGray}`,
  },
});

export default KdaContainer;
