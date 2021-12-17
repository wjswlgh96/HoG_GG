import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import axios from 'axios';

//? Key, Path
import { headers } from '../../../../key';
import { summonerInfoLink, userRankDataLink } from '../../../path/path';

//? Redux
import { useDispatch } from 'react-redux';
import { addUserMySelf, updateUserRankInfo } from '../../../redux/actions/user';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { myselfScreenProp } from '../../../screens/RootStackParams';

const MySelfBodyInput = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<myselfScreenProp>();
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeText = (e: any) => {
    setInputValue(e);
  };

  const onSubmitEditing = async (e: any) => {
    setInputValue('');

    await axios
      .get(`${summonerInfoLink}${inputValue}`, headers)
      .then(async res => {
        const addData = {
          ...res.data,
          bookmark: false,
          myself: true,
        };

        dispatch(addUserMySelf(addData));

        await axios
          .get(`${userRankDataLink}${res.data.id}`, headers)
          .then((rankInfo: any) => {
            const newArr = rankInfo.data.filter((el: any) => {
              return el.queueType === 'RANKED_SOLO_5x5';
            });

            if (newArr.length !== 0) {
              const { summonerId, wins, losses, tier, rank, leaguePoints } =
                newArr[0];

              let rankNum = 0;
              let tierValue = false;

              switch (tier) {
                case 'MASTER':
                  {
                    tierValue = true;
                  }
                  break;
                case 'GRANDMASTER':
                  {
                    tierValue = true;
                  }
                  break;
                case 'CHALLENGER':
                  {
                    tierValue = true;
                  }
                  break;
              }

              switch (rank) {
                case 'I':
                  {
                    rankNum = 1;
                  }
                  break;
                case 'II':
                  {
                    rankNum = 2;
                  }
                  break;
                case 'III':
                  {
                    rankNum = 3;
                  }
                  break;
                case 'IV':
                  {
                    rankNum = 4;
                  }
                  break;
                default:
                  break;
              }
              const str = `${tier[0]}${tier.slice(1).toLowerCase()}`;

              if (tierValue) {
                const newObj = {
                  id: summonerId,
                  wins,
                  losses,
                  tier: str,
                  rank: 0,
                  leaguePoints,
                };

                dispatch(updateUserRankInfo(newObj));
              } else {
                const newObj = {
                  id: summonerId,
                  wins,
                  losses,
                  tier: str,
                  rank: rankNum,
                  leaguePoints,
                };

                dispatch(updateUserRankInfo(newObj));
              }
            } else {
              const newObj = {
                id: res.data.id,
                tier: 'Unranked',
              };

              dispatch(updateUserRankInfo(newObj));
            }

            navigation.popToTop();
          })
          .catch(err => console.error(err));
      })
      .catch(err =>
        Alert.alert('알림', '입력하신 소환사는 존재하지 않는 소환사입니다.', [
          { text: '확인' },
        ]),
      );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        placeholder="소환사 검색"
        placeholderTextColor="#a1a1a1"
      />
      <TouchableOpacity style={styles.pressableStyle}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
          완료
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },

  textInput: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#a1a1a1',
    marginBottom: 30,
  },

  pressableStyle: {
    backgroundColor: '#2196F3',
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: 'center',
  },
});

export default MySelfBodyInput;
