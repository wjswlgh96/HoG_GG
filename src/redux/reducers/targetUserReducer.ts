import { TargetUserState } from '../actions/@types';

import {
  ADD_TARGETUSERINFO,
  UPDATE_TARGETUSERMATCHINFO,
  UPDATE_TARGETUSERRANKINFO,
} from '../../@types/models/targetUser';

export const initialState: TargetUserState = [];

const targetUserReducer = (
  state: TargetUserState = initialState,
  action: any,
) => {
  const userState: TargetUserState = state;

  switch (action.type) {
    case ADD_TARGETUSERINFO: {
      return [action.payload];
    }

    case UPDATE_TARGETUSERRANKINFO: {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].rankInfo = action.payload.rankInfo;

      return [...userState];
    }

    case UPDATE_TARGETUSERMATCHINFO: {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].matchInfo.push(action.payload.matchInfo);
      userState[currIdx].matchInfo.sort((a: any, b: any) => {
        return b.gameEndTimestamp - a.gameEndTimestamp;
      });

      return [...userState];
    }

    default:
      return userState;
  }
};

export default targetUserReducer;
