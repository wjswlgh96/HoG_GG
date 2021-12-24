//? Redux
import axios from 'axios';
import {
  addTargetUserInfo,
  updateTargetUserRankInfo,
  updateTargetUserMatchInfo,
} from '../../redux/actions/targetUser';

//? Instance
import targetUserInfoAPI from '../instance/targetuser/targetUserInfoAPI';
import targetUserMatchHistoryAPI from '../instance/targetuser/targetUserMatchHistoryAPI';
import targetUserMatchInfoAPI from '../instance/targetuser/targetUserMatchInfoAPI';
import targetUserRankInfoAPI from '../instance/targetuser/targetUserRankInfoAPI';

//? uri
import {
  userInfoPath,
  userRankInfoPath,
  userMatchHistoryPath,
  userMatchInfoPath,
} from '../uri/uri';

export const getTargetUserInfo = async (
  dispatch: any,
  summonerName: string,
  spellData: any,
  matchStart: number,
  setMatchStart: any,
  setTargetData: any,
) => {
  await targetUserInfoAPI
    .get(`${userInfoPath}${summonerName}`)
    .then(async result => {
      const initUser = {
        ...result.data,
        rankInfo: [],
        matchInfo: [],
      };

      dispatch(addTargetUserInfo(initUser));

      await targetUserRankInfoAPI
        .get(`${userRankInfoPath}${result.data.id}`)
        .then(rankInfo => {
          const rankFilter = rankInfo.data.filter((el: any) => {
            return el.queueType !== 'RANKED_TFT_PAIRS';
          });

          const rankArr = rankFilter.map((el: any) => {
            if (el.queueType === 'RANKED_SOLO_5x5') {
              el.queueType = '솔랭';
            } else if (el.queueType === 'RANKED_FLEX_SR') {
              el.queueType = '자유 5:5 랭크';
            }

            let bTier = false;
            let rankNum = 0;
            if (
              el.tier === 'MASTER' ||
              el.tier === 'GRANDMASTER' ||
              el.tier === 'CHALLENGER'
            ) {
              bTier = true;
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
            const tierStr = `${el.tier[0]}${el.tier.slice(1).toLowerCase()}`;

            if (bTier) {
              el.tier = tierStr;
              el.rank = 0;
            } else {
              el.tier = tierStr;
              el.rank = rankNum;
            }

            return el;
          });

          dispatch(
            updateTargetUserRankInfo({
              id: result.data.id,
              rankInfo: rankArr,
            }),
          );
        })
        .catch(error => {
          console.log('에러 메시지: ', error);
        });

      await targetUserMatchHistoryAPI
        .get(
          `${userMatchHistoryPath}${result.data.puuid}/ids?start=${matchStart}&count=10`,
        )
        .then(async match => {
          const matchArr = [...match.data];

          setMatchStart((prev: any) => prev + 10);

          let matchDataArr = matchArr.map(async matchId => {
            return await targetUserMatchInfoAPI
              .get(`${userMatchInfoPath}${matchId}`)
              .then(matchInfo => {
                const {
                  data: { info },
                } = matchInfo;

                //? 해당 유저의 대전기록
                const myRecords = info.participants.filter((item: any) => {
                  return item.puuid === result.data.puuid;
                })[0];

                //? 자신이 속한 팀의 총 킬수 가져오기
                const winTeam = info.teams.filter((team: any) => {
                  return team.win === myRecords.win;
                })[0];

                const totalTeamKills = winTeam.objectives.champion.kills;

                //? 해당 유저의 아이템 리스트
                const itemList = [
                  myRecords.item0,
                  myRecords.item1,
                  myRecords.item2,
                  myRecords.item3,
                  myRecords.item4,
                  myRecords.item5,
                  myRecords.item6,
                ];

                //? 해당 유저의 스펠 리스트
                const spellList: any = [];
                const spellOne = String(myRecords.summoner1Id);
                const spellTwo = String(myRecords.summoner2Id);

                spellData.map((spell: any) => {
                  if (spell.key === spellOne) {
                    spellList[0] = spell.id;
                  } else if (spell.key === spellTwo) {
                    spellList[1] = spell.id;
                  }
                });

                const myData = {
                  gameId: info.gameId,
                  gameMode: info.gameMode,
                  gameDuration: info.gameDuration,
                  gameEndTimestamp: info.gameEndTimestamp,
                  totalTeamKills,
                  myRecords: {
                    win: myRecords.win,
                    kills: myRecords.kills,
                    deaths: myRecords.deaths,
                    assists: myRecords.assists,
                    champLevel: myRecords.champLevel,
                    champName: myRecords.championName,
                    goldEarned: myRecords.goldEarned,
                    largestMultiKill: myRecords.largestMultiKill,
                    totalDamage: myRecords.totalDamageDealtToChampions,
                  },
                  itemList,
                  spellList,
                };

                const reqData = {
                  id: result.data.id,
                  matchInfo: myData,
                };

                dispatch(updateTargetUserMatchInfo(reqData));
                return reqData.matchInfo;
              })
              .catch(error => {
                console.log('에러 메시지: ', error);
              });
          });

          let returnData = await Promise.all(matchDataArr).then(result => {
            return result;
          });

          setTargetData(returnData);
        })
        .catch(error => {
          console.log('에러 메시지: ', error);
        });
    });
};

export const refreshTargetUserMatchInfo = async (
  dispatch: any,
  targetUser: any,
  spellData: any,
  matchStart: number,
  setIsLoading: any,
  setMatchStart: any,
  setTargetData: any,
) => {
  return await targetUserMatchHistoryAPI
    .get(
      `${userMatchHistoryPath}${targetUser.puuid}/ids?start=${matchStart}&count=10`,
    )
    .then(async match => {
      const matchArr = [...match.data];

      setMatchStart((prev: any) => prev + 10);

      let axiosArrData = matchArr.map(async matchId => {
        const returnData = await targetUserMatchInfoAPI
          .get(`${userMatchInfoPath}${matchId}`)
          .then(matchInfo => {
            const {
              data: { info },
            } = matchInfo;

            //? 해당 유저의 대전기록
            const myRecords = info.participants.filter((item: any) => {
              return item.puuid === targetUser.puuid;
            })[0];

            //? 자신이 속한 팀의 총 킬수 가져오기
            const winTeam = info.teams.filter((team: any) => {
              return team.win === myRecords.win;
            })[0];

            const totalTeamKills = winTeam.objectives.champion.kills;

            //? 해당 유저의 아이템 리스트
            const itemList = [
              myRecords.item0,
              myRecords.item1,
              myRecords.item2,
              myRecords.item3,
              myRecords.item4,
              myRecords.item5,
              myRecords.item6,
            ];

            //? 해당 유저의 스펠 리스트
            const spellList: any = [];
            const spellOne = String(myRecords.summoner1Id);
            const spellTwo = String(myRecords.summoner2Id);

            spellData.map((spell: any) => {
              if (spell.key === spellOne) {
                spellList[0] = spell.id;
              } else if (spell.key === spellTwo) {
                spellList[1] = spell.id;
              }
            });

            const myData = {
              gameId: info.gameId,
              gameMode: info.gameMode,
              gameDuration: info.gameDuration,
              gameEndTimestamp: info.gameEndTimestamp,
              totalTeamKills,
              myRecords: {
                win: myRecords.win,
                kills: myRecords.kills,
                deaths: myRecords.deaths,
                assists: myRecords.assists,
                champLevel: myRecords.champLevel,
                champName: myRecords.championName,
                goldEarned: myRecords.goldEarned,
                largestMultiKill: myRecords.largestMultiKill,
                totalDamage: myRecords.totalDamageDealtToChampions,
              },
              itemList,
              spellList,
            };

            const reqData = {
              id: targetUser.id,
              matchInfo: myData,
            };

            dispatch(updateTargetUserMatchInfo(reqData));
            return reqData.matchInfo;
          })
          .catch(error => {
            console.log('에러 메시지: ', error);
          });

        return returnData;
      });

      let promiseData: any[] = [];

      if (axiosArrData.length >= 10) {
        promiseData = await Promise.all(axiosArrData).then(async result => {
          return result;
        });

        return promiseData;
      }
    })
    .catch(error => {
      console.log('에러 메시지: ', error);
      setIsLoading(false);
    });
};
