import { getSpellInfoProps } from '../../@types/models/spell';

import { GET_SPELLINFO } from '../../@types/models/spell';

export const getSpellInfo = (data: getSpellInfoProps[]) => {
  return {
    type: GET_SPELLINFO,
    payload: data,
  };
};
