import {
  User,
  updateUserShowListProps,
  updateUserBookMarkProps,
  updateUserMyselfProps,
} from './types';

export const addUser = (data: User) => {
  return {
    type: 'ADD_USER',
    payload: data,
  };
};

export const addUserMySelf = (data: any) => {
  return {
    type: 'ADD_USERMYSELF',
    payload: data,
  };
};

export const deleteUserMySelf = (data: updateUserMyselfProps) => {
  return {
    type: 'DELETE_USERMYSELF',
    payload: data,
  };
};

export const updateUserRankInfo = (data: any) => {
  return {
    type: 'UPDATE_USERRANKINFO',
    payload: data,
  };
};

export const updateUserBookMark = (data: updateUserBookMarkProps) => {
  return {
    type: 'UPDATE_USERBOOKMARK',
    payload: data,
  };
};

export const updateUserShowList = (data: updateUserShowListProps) => {
  return {
    type: 'UPDATE_USERSHOWLIST',
    payload: data,
  };
};
