import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Platform, Alert } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import axios from 'axios';

//? Key, Path
import { headers } from '../../../../key';
import { summonerInfoLink, userRankDataLink } from '../../../path/path';

//? Redux
import { addUser, updateUserRankInfo } from '../../../redux/actions/user';
import { useDispatch } from 'react-redux';

const SearchHeaderRight = (props: any) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: any): void => {
    setInputValue(e);
  };

  const onSubmit = async () => {
    setInputValue('');

    await axios
      .get(`${summonerInfoLink}${inputValue}`, headers)
      .then(async res => {
        const addData = {
          ...res.data,
          myself: false,
          bookmark: false,
          showList: true,
        };

        dispatch(addUser(addData));

        await axios
          .get(`${userRankDataLink}${res.data.id}`, headers)
          .then(async (rankInfo: any) => {
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
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        autoCapitalize="none"
        autoFocus={true}
        autoCorrect={false}
        style={{ flex: 9, fontSize: 17 }}
        placeholder="소환사 검색"
        placeholderTextColor="#717171"
      />
      <Fontisto
        style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : 12 }}
        name="search"
        size={24}
        color="#717171"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export default SearchHeaderRight;
