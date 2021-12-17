import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RankInfoContent = (props: any) => {
  const { container, rankInfo } = props;

  return (
    <View style={container}>
      <View>
        <Text style={styles.queueType}>{rankInfo.queueType}</Text>
      </View>
      <View>
        {rankInfo.rank ? (
          <Text style={styles.tierText}>
            {rankInfo.tier} {rankInfo.rank}
          </Text>
        ) : (
          <Text style={styles.tierText}>{rankInfo.tier}</Text>
        )}
      </View>
      <View>
        <Text style={styles.pointText}>{rankInfo.leaguePoints} LP</Text>
      </View>
      <View>
        <Text style={styles.winsText}>
          {rankInfo.wins}승 {rankInfo.losses}패 (
          {isNaN(
            Math.ceil(
              (rankInfo.wins / (rankInfo.wins + rankInfo.losses)) * 100,
            ),
          )
            ? 0
            : Math.ceil(
                (rankInfo.wins / (rankInfo.wins + rankInfo.losses)) * 100,
              )}
          %)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  queueType: {
    color: '#2196F3',
    marginBottom: 3,
  },

  tierText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 3,
  },

  pointText: {
    color: '#717171',
    marginBottom: 3,
  },

  winsText: {
    color: '#a1a1a1',
  },
});

export default RankInfoContent;
