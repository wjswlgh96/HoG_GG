import { Alert } from 'react-native';
import axios from 'axios';

//? Key
import { headers } from '../../../../key';

const baseURL = `https://kr.api.riotgames.com`;

const targetUserInfoAPI = axios.create({
  baseURL,
  headers,
  withCredentials: true,
});

targetUserInfoAPI.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error: ', error.response.data);
    if (error.response != null && error.response.data != null) {
      const { message, status_code } = error.response.data.status;

      switch (status_code) {
        case 404: {
          return Alert.alert(
            '알림',
            '입력하신 소환사는 존재하지 않는 소환시입니다.',
            [{ text: '확인' }],
          );
        }

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

export default targetUserInfoAPI;
