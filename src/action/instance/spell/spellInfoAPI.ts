import { Alert } from 'react-native';
import axios from 'axios';

//? Key
import { headers } from '../../../../key';

const baseURL = `https://ddragon.leagueoflegends.com/`;

const spellInfoAPI = axios.create({
  baseURL,
  headers,
  withCredentials: true,
});

spellInfoAPI.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error: ', error.response.data);
    if (error.response != null && error.response.data != null) {
      const { message, status_code } = error.response.data.status;

      switch (status_code) {
        default: {
          return Alert.alert('알림', `${message}`, [{ text: '확인' }]);
        }
      }
    }
    return Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    );
  },
);

export default spellInfoAPI;
