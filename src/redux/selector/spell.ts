import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { Spell } from '../actions/@types';

export const getSpell = () => {
  const spell: Spell[] = useSelector((state: RootState) => state.spellReducer);

  return spell;
};
