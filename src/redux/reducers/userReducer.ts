import { UserState } from '../actions/@types';

import {
  ADD_USERINFO,
  UPDATE_USERRANKINFO,
  UPDATE_USERBOOKMARK,
  UPDATE_USERSEARCHLIST,
  ADD_USERSELFREGISTER,
  DELETE_USERSELFREGISTER,
} from '../../@types/models/user';

export const initialState: UserState = [];

const userReducer = (state: UserState = initialState, action: any) => {
  const userState: UserState = state;

  switch (action.type) {
    case ADD_USERINFO: {
      if (userState.length !== 0) {
        let currIdx = 0;
        let checkUser = false;

        userState.map((el, idx) => {
          if (el.id === action.payload.id) {
            currIdx = idx;
            checkUser = true;
          }
        });

        if (checkUser) {
          userState[currIdx].searchList = true;

          const newState = userState[currIdx];

          userState.splice(currIdx, 1);

          return [newState, ...userState];
        } else {
          return [action.payload, ...userState];
        }
      } else {
        return [action.payload, ...userState];
      }
    }

    case ADD_USERSELFREGISTER: {
      if (userState.length !== 0) {
        let currIdx = 0;
        let checkUser = false;

        userState.map((el, idx) => {
          if (el.id === action.payload.id) {
            currIdx = idx;
            checkUser = true;
          }
        });

        if (checkUser) {
          userState[currIdx].selfRegister = true;
          userState[currIdx].bookmark = false;

          return [...userState];
        } else {
          return [action.payload, ...userState];
        }
      } else {
        return [action.payload, ...userState];
      }
    }

    case DELETE_USERSELFREGISTER: {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].selfRegister = action.payload.selfRegister;

      return [...userState];
    }

    case UPDATE_USERRANKINFO: {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].tier = action.payload.tier;
      userState[currIdx].rank = action.payload.rank;
      userState[currIdx].leaguePoints = action.payload.leaguePoints;
      userState[currIdx].wins = action.payload.wins;
      userState[currIdx].losses = action.payload.losses;

      return [...userState];
    }

    case UPDATE_USERBOOKMARK: {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].bookmark = action.payload.bookmark;

      return [...userState];
    }

    case UPDATE_USERSEARCHLIST: {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].searchList = action.payload.searchList;

      return [...userState];
    }

    default:
      return userState;
  }
};

export default userReducer;
