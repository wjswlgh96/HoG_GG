//? Key
import { headers } from '../../../key';

//? Redux
import { getSpellInfo } from '../../redux/actions/spell';

//? Interface
import spellInfoAPI from '../instance/spell/spellInfoAPI';

const url = `cdn/11.24.1/data/ko_KR/summoner.json`;

export const getSpellInfoAPI = async (dispatch: any) => {
  await spellInfoAPI
    .get(`${url}`, headers)
    .then(result => {
      const spellArr = [];
      const { data } = result.data;

      for (const key in data) {
        spellArr.push({ id: data[key].id, key: data[key].key });
      }

      dispatch(getSpellInfo(spellArr));
    })
    .catch(error => {
      console.log('에러: ', error);
    });
};
