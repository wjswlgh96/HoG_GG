//? Redux
import {
  addUserInfo,
  updateUserRankInfo,
  addUserSelfRegister,
} from '../../redux/actions/user';

//? Instance
import userInfoAPI from '../instance/user/userInfoAPI';
import userRankInfoAPI from '../instance/user/userRankInfoAPI';

//? uri
import { userInfoPath, userRankInfoPath } from '../uri/uri';

export const getUserInfoBySummonerName = async (
  dispatch: any,
  summonerName: string,
  navigation: any,
) => {
  userInfoAPI.get(`${userInfoPath}${summonerName}`).then(async result => {
    const initUser = {
      ...result.data,
      searchList: true,
    };
    dispatch(addUserInfo(initUser));

    await userRankInfoAPI
      .get(`${userRankInfoPath}${result.data.id}`)
      .then(rankInfo => {
        const newArr = rankInfo.data.filter((el: any) => {
          return el.queueType === 'RANKED_SOLO_5x5';
        })[0];

        if (newArr.length !== 0) {
          const { summonerId, wins, losses, tier, rank, leaguePoints } = newArr;

          let rankNum = 0;
          let bTier = false;
          if (
            tier === 'MASTER' ||
            tier === 'GRANDMASTER' ||
            tier === 'CHALLENGER'
          ) {
            bTier = true;
          }

          switch (rank) {
            case 'I': {
              rankNum = 1;
              break;
            }

            case 'II': {
              rankNum = 2;
              break;
            }

            case 'III': {
              rankNum = 3;
              break;
            }

            case 'IV': {
              rankNum = 4;
              break;
            }

            default:
              break;
          }

          const tierStr = `${tier[0]}${tier.slice(1).toLowerCase()}`;

          if (bTier) {
            const newObj = {
              id: summonerId,
              wins,
              losses,
              tier: tierStr,
              rank: 0,
              leaguePoints,
            };
            dispatch(updateUserRankInfo(newObj));
          } else {
            const newObj = {
              id: summonerId,
              wins,
              losses,
              tier: tierStr,
              rank: rankNum,
              leaguePoints,
            };
            dispatch(updateUserRankInfo(newObj));
          }
        } else {
          const newObj = {
            id: result.data.id,
            tier: 'Unranked',
          };
          dispatch(updateUserRankInfo(newObj));
        }
      })
      .catch(error => {
        console.log('에러 메시지: ', error);
      });

    navigation.navigate('UserTotalInfo', {
      user: { id: result.data.id, name: result.data.name },
    });
  });
};

export const getUserInfoBySelfRegister = async (
  dispatch: any,
  summonerName: string,
  navigation: any,
) => {
  userInfoAPI.get(`${userInfoPath}${summonerName}`).then(async result => {
    const initUser = {
      ...result.data,
      selfRegister: true,
    };
    dispatch(addUserSelfRegister(initUser));

    await userRankInfoAPI
      .get(`${userRankInfoPath}${result.data.id}`)
      .then(rankInfo => {
        const newArr = rankInfo.data.filter((el: any) => {
          return el.queueType === 'RANKED_SOLO_5x5';
        })[0];

        if (newArr.length !== 0) {
          const { summonerId, wins, losses, tier, rank, leaguePoints } = newArr;

          let rankNum = 0;
          let bTier = false;
          if (
            tier === 'MASTER' ||
            tier === 'GRANDMASTER' ||
            tier === 'CHALLENGER'
          ) {
            bTier = true;
          }

          switch (rank) {
            case 'I': {
              rankNum = 1;
              break;
            }

            case 'II': {
              rankNum = 2;
              break;
            }

            case 'III': {
              rankNum = 3;
              break;
            }

            case 'IV': {
              rankNum = 4;
              break;
            }

            default:
              break;
          }

          const tierStr = `${tier[0]}${tier.slice(1).toLowerCase()}`;

          if (bTier) {
            const newObj = {
              id: summonerId,
              wins,
              losses,
              tier: tierStr,
              rank: 0,
              leaguePoints,
            };
            dispatch(updateUserRankInfo(newObj));
          } else {
            const newObj = {
              id: summonerId,
              wins,
              losses,
              tier: tierStr,
              rank: rankNum,
              leaguePoints,
            };
            dispatch(updateUserRankInfo(newObj));
          }
        } else {
          const newObj = {
            id: result.data.id,
            tier: 'Unranked',
          };
          dispatch(updateUserRankInfo(newObj));
        }
      })
      .catch(error => {
        console.log('에러 메시지: ', error);
      });

    navigation.popToTop();
  });
};
