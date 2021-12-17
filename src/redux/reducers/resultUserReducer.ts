import { ResultUserState } from '../actions/types';

export const initialState: ResultUserState = [];

const resultUserReducer = (
  state: ResultUserState = initialState,
  action: any,
) => {
  const userState: ResultUserState = state;

  switch (action.type) {
    case 'ADD_RESULTUSER': {
      const temp: any[] = [];

      const data = {
        ...action.payload,
        myMatchResult: temp,
      };

      return [data];
    }

    case 'UPDATE_RESULTUSERRANK': {
      const newState = [...userState];

      newState[0].rankInfo = action.payload;

      return [...newState];
    }

    case 'UPDATE_RESULTMATCHHISTORY': {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].matchHistory = action.payload.matchHistory;
      return [...userState];
    }

    case 'UPDATE_MYMATCHRESULT': {
      const {
        matchId,
        gameDuration,
        gameMode,
        gameEndTimestamp,
        teams,
        spellData,
      } = action.payload;

      const filterTeams = teams.filter((el: any) => {
        return el.win === action.payload.participants.win;
      });

      const participants = {
        win: action.payload.participants.win,
        kills: action.payload.participants.kills,
        deaths: action.payload.participants.deaths,
        assists: action.payload.participants.assists,
        championName: action.payload.participants.championName,
        largestMultiKill: action.payload.participants.largestMultiKill,
        totalTeamKills: filterTeams[0].objectives.champion.kills,
        items: [
          action.payload.participants.item0,
          action.payload.participants.item1,
          action.payload.participants.item2,
          action.payload.participants.item3,
          action.payload.participants.item4,
          action.payload.participants.item5,
          action.payload.participants.item6,
        ],
        summoner: [
          action.payload.participants.summoner1Id,
          action.payload.participants.summoner2Id,
        ],
      };

      const newData: any = {
        matchId,
        gameDuration,
        gameMode,
        gameEndTimestamp,
        spellData,
        participants,
      };

      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].myMatchResult.push(newData);

      return [...userState];
    }

    default:
      return userState;
  }
};

export default resultUserReducer;
