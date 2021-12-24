import { SpellState } from '../actions/@types';

import { GET_SPELLINFO } from '../../@types/models/spell';

export const initialState: SpellState = [];

const spellReducer = (state: SpellState = initialState, action: any) => {
  const spellState: SpellState = state;

  switch (action.type) {
    case GET_SPELLINFO: {
      return [...action.payload];
    }

    default:
      return spellState;
  }
};

export default spellReducer;
