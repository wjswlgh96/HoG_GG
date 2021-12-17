import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import axios from 'axios';

//? Key, Path
import { headers } from '../../../key';
import {
  summonerInfoLink,
  userRankDataLink,
  userMatchHistoryLink,
  userMatchInfoLink,
} from '../../path/path';

//? Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  addResultUser,
  updateMyMatchResult,
  updateResultMatchhistory,
  updateResultUserRank,
} from '../../redux/actions/resultuser';
import { ResultUser, User } from '../../redux/actions/types';
import { RootState } from '../../redux/reducers';
import SearchResultHeader from './SearchResultHeader';
import SearchResultBody from './SearchResultBody';

const SearchResultScreen = (props: any) => {
  const dispatch = useDispatch();
  const [matchStart, setMatchStart] = useState(0);

  const {
    route: {
      params: { user },
    },
  } = props;

  const userState: User[] = useSelector(
    (state: RootState) => state.userReducer,
  );

  const resultUser: ResultUser[] = useSelector(
    (state: RootState) => state.resultUserReducer,
  );

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    await axios
      .get(`${summonerInfoLink}${user.name}`, headers)
      .then(async res => {
        const {
          data: { id, puuid, name, profileIconId, summonerLevel },
        } = res;

        const data = {
          id,
          puuid,
          name,
          profileIconId,
          summonerLevel,
        };

        dispatch(addResultUser(data));

        //? Spell Json 데이터 가져오기
        const spellData = await axios
          .get(
            Platform.OS === 'ios'
              ? 'https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/summoner.json'
              : 'http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/summoner.json',
          )
          .then(res => {
            const json = res.data;
            const arr = [];

            for (const key in json.data) {
              arr.push({
                id: Number(json.data[key].key),
                name: json.data[key].id,
              });
            }

            return arr;
          });

        //? 매치 히스토리
        await axios
          .get(
            `${userMatchHistoryLink}${data.puuid}/ids?start=${matchStart}&count=10`,
            headers,
          )
          .then(res => {
            dispatch(
              updateResultMatchhistory({ id: user.id, matchHistory: res.data }),
            );

            setMatchStart((prev: any) => prev + 10);

            //? 내 매치 업데이트 및 participatns 기록
            res.data.map(async (el: any) => {
              const Link = `${userMatchInfoLink}${el}`;

              await axios
                .get(`${Link}`, headers)
                .then(res => {
                  const { metadata, info } = res.data;

                  //? 나의 대전 기록만 가져오기
                  const myResult: any = {
                    matchId: metadata.matchId,
                    gameDuration: info.gameDuration,
                    gameMode: info.gameMode,
                    gameEndTimestamp: info.gameEndTimestamp,
                    participants: info.participants.filter((el: any) => {
                      return el.puuid === data.puuid;
                    })[0],
                    spellData: [],
                    teams: info.teams,
                  };

                  if (spellData.length > 0) {
                    myResult.spellData = spellData;
                  }

                  dispatch(updateMyMatchResult(myResult));
                })
                .catch(error => {
                  console.error(error);
                });
            });
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        console.error(err);
      });

    await axios
      .get(`${userRankDataLink}${user.id}`, headers)
      .then(res => {
        if (res.data.length === 0) {
          dispatch(updateResultUserRank(res.data));
        } else {
          const filterArr = res.data.filter((el: any) => {
            return el.queueType !== 'RANKED_TFT_PAIRS';
          });

          dispatch(
            updateResultUserRank(
              filterArr.map((el: any) => {
                let obj = {
                  queueType: '',
                  wins: el.wins,
                  losses: el.losses,
                  leaguePoints: el.leaguePoints,
                  tier: '',
                  rank: 0,
                };

                let rankNum = 0;
                let tierValue = false;
                let queueStr = '';

                if (el.queueType === 'RANKED_SOLO_5x5') {
                  queueStr = '솔랭';
                } else if (el.queueType === 'RANKED_FLEX_SR') {
                  queueStr = '자유 5:5 랭크';
                }
                switch (el.tier) {
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

                switch (el.rank) {
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
                const str = `${el.tier[0]}${el.tier.slice(1).toLowerCase()}`;

                if (tierValue) {
                  obj.tier = str;
                  obj.rank = 0;
                  obj.queueType = queueStr;
                } else {
                  obj.tier = str;
                  obj.rank = rankNum;
                  obj.queueType = queueStr;
                }

                return obj;
              }),
            ),
          );
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return resultUser[0] ? (
    resultUser[0].hasOwnProperty('rankInfo') &&
    resultUser[0].hasOwnProperty('myMatchResult') ? (
      <View style={styles.container}>
        <SearchResultHeader user={userState.filter(el => el.id === user.id)} />
        <SearchResultBody />
      </View>
    ) : (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    )
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2196F3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
});

export default SearchResultScreen;
