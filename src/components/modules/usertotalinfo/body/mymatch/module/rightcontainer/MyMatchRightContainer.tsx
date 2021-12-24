import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//? Color
import {
  lightGray,
  loseRed,
} from '../../../../../../../../assets/colors/color';

const MyMatchRightContainer = (props: any) => {
  const { match } = props;
  const [matchInfo, setMatchInfo] = useState<string>('');
  const [matchMulti, setMatchMulti] = useState<string>('');
  const time = new Date().getTime();

  useEffect(() => {
    getMatchInfo();
  }, []);

  const getMatchInfo = () => {
    let matchInfoStr = '';
    let matchMultiStr = '';

    switch (match.gameMode) {
      case 'ARAM': {
        matchInfoStr = '무작위 총력전';
        setMatchInfo(matchInfoStr);
        break;
      }

      case 'CLASSIC': {
        matchInfoStr = '소환사의 협곡';
        setMatchInfo(matchInfoStr);
        break;
      }
    }

    switch (match.myRecords.largestMultiKill) {
      case 1: {
        return;
      }

      case 2: {
        matchMultiStr = '더블킬';
        setMatchMulti(matchMultiStr);

        break;
      }

      case 3: {
        matchMultiStr = '트리플킬';
        setMatchMulti(matchMultiStr);

        break;
      }

      case 4: {
        matchMultiStr = '쿼드라킬';
        setMatchMulti(matchMultiStr);

        break;
      }

      case 5: {
        matchMultiStr = '펜타킬';
        setMatchMulti(matchMultiStr);

        break;
      }
    }
  };

  return (
    <View style={styles.rightContiner}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>{matchInfo}</Text>
        <Text style={styles.topText}>
          {Math.ceil((time - match.gameEndTimestamp) / 1000 / 60 / 60) < 24
            ? Math.ceil((time - match.gameEndTimestamp) / 1000 / 60 / 60) +
              '시간 전'
            : `${new Date(match.gameEndTimestamp).getFullYear()}. ${
                new Date(match.gameEndTimestamp).getMonth() + 1
              }. ${new Date(match.gameEndTimestamp).getDate()}`}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        {matchMulti.length > 0 && (
          <Text style={styles.bottomText}>{matchMulti}</Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rightContiner: {
    flex: 2.5,
    backgroundColor: 'white',
    paddingRight: 10,
  },

  topContainer: {
    flex: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  bottomContainer: {
    flex: 5,

    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  topText: {
    color: `${lightGray}`,
  },

  bottomText: {
    borderWidth: 1,
    borderColor: `${loseRed}`,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    color: `${loseRed}`,
  },
});

export default MyMatchRightContainer;
