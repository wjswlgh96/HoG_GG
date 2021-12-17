import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//? My Components
import TierImageComponent from './section/TierImageComponent';
import RankInfoContent from './section/RankInfoContent';

const UserRankInfoComponent = (props: any) => {
  const [rankInfo, setRankInfo] = useState<any>([]);
  const { resultUser } = props;

  useEffect(() => {
    if (resultUser.rankInfo.length > 0) {
      if (
        typeof resultUser.rankInfo[0] === 'undefined' &&
        typeof resultUser.rankInfo[1] === 'undefined'
      ) {
        const newArr: any[] = [
          {
            queueType: '솔랭',
            tier: 'Unranked',
            rank: 0,
            leaguePoints: 0,
            wins: 0,
            losses: 0,
          },
          {
            queueType: '자유 5:5 랭크',
            tier: 'Unranked',
            rank: 0,
            leaguePoints: 0,
            wins: 0,
            losses: 0,
          },
        ];

        setRankInfo(newArr);
      } else if (
        resultUser.rankInfo[0].queueType === '솔랭' &&
        typeof resultUser.rankInfo[1] === 'undefined'
      ) {
        const newArr: any[] = [
          resultUser.rankInfo[0],
          {
            queueType: '자유 5:5 랭크',
            tier: 'Unranked',
            rank: 0,
            leaguePoints: 0,
            wins: 0,
            losses: 0,
          },
        ];

        setRankInfo(newArr);
      } else if (
        resultUser.rankInfo[0].queueType === '자유 5:5 랭크' &&
        typeof resultUser.rankInfo[1] === 'undefined'
      ) {
        const newArr: any[] = [
          {
            queueType: '솔랭',
            tier: 'Unranked',
            rank: 0,
            leaguePoints: 0,
            wins: 0,
            losses: 0,
          },
          resultUser.rankInfo[0],
        ];

        setRankInfo(newArr);
      } else if (
        resultUser.rankInfo[0].queueType === '솔랭' &&
        resultUser.rankInfo[1].queueType === '자유 5:5 랭크'
      ) {
        const newArr: any[] = [resultUser.rankInfo[0], resultUser.rankInfo[1]];

        setRankInfo(newArr);
      } else if (
        resultUser.rankInfo[0].queueType === '자유 5:5 랭크' &&
        resultUser.rankInfo[1].queueType === '솔랭'
      ) {
        const newArr: any[] = [resultUser.rankInfo[1], resultUser.rankInfo[0]];

        setRankInfo(newArr);
      }
    } else {
      const newArr: any[] = [
        {
          queueType: '솔랭',
          tier: 'Unranked',
          rank: 0,
          leaguePoints: 0,
          wins: 0,
          losses: 0,
        },
        {
          queueType: '자유 5:5 랭크',
          tier: 'Unranked',
          rank: 0,
          leaguePoints: 0,
          wins: 0,
          losses: 0,
        },
      ];

      setRankInfo(newArr);
    }
  }, []);

  return rankInfo.length > 0 ? (
    <ScrollView
      style={{ marginHorizontal: 15 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {rankInfo.map((el: any, idx: number) => {
        return (
          <Pressable key={idx}>
            <View style={styles.container}>
              <TierImageComponent
                imageContainer={styles.leftContainer}
                imageStyle={styles.imageStyle}
                tier={el.tier}
              />
              <RankInfoContent
                container={styles.middleContainer}
                rankInfo={el}
              />
              <View style={styles.rightContainer}>
                <View style={styles.buttonContainer}>
                  <Ionicons name="chevron-forward" size={24} color="#717171" />
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c1c1',
    borderRadius: 4,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 30,
  },

  leftContainer: {
    flex: 2.5,
    marginRight: 10,
    paddingVertical: 20,
  },

  imageStyle: {
    width: 50,
    height: 50,
  },

  middleContainer: {
    flex: 5,
    marginRight: 20,
  },

  rightContainer: {
    flex: 2.5,
  },

  buttonContainer: {
    backgroundColor: '#e1e1e1',
    borderRadius: 45,
    paddingHorizontal: 7,
    paddingVertical: 7,
  },
});

export default UserRankInfoComponent;
