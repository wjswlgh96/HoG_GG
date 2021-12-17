import { UserState } from '../actions/types';

export const initialState: UserState = [];

const userReducer = (state: UserState = initialState, action: any) => {
  const userState: UserState = state;

  switch (action.type) {
    case 'ADD_USER': {
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
          userState[currIdx].showList = true;

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

    case 'ADD_USERMYSELF': {
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
          userState[currIdx].myself = true;
          userState[currIdx].bookmark = false;

          return [...userState];
        } else {
          return [action.payload, ...userState];
        }
      } else {
        return [action.payload, ...userState];
      }
    }

    case 'DELETE_USERMYSELF': {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].myself = action.payload.myself;

      return [...userState];
    }

    case 'UPDATE_USERRANKINFO': {
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

    case 'UPDATE_USERBOOKMARK': {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].bookmark = action.payload.bookmark;

      return [...userState];
    }

    case 'UPDATE_USERSHOWLIST': {
      let currIdx = 0;

      userState.map((el, idx) => {
        if (el.id === action.payload.id) {
          currIdx = idx;
        }
      });

      userState[currIdx].showList = action.payload.showList;

      return [...userState];
    }

    default:
      return userState;
  }
};

export default userReducer;
