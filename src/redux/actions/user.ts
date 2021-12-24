import { User } from './@types';

import {
  updateUserSearchListProps,
  updateUserBookMarkProps,
  updateUserSelfRegisterProps,
  DELETE_USERMATCHINFO,
} from '../../@types/models/user';

import {
  ADD_USERINFO,
  UPDATE_USERRANKINFO,
  UPDATE_USERBOOKMARK,
  UPDATE_USERSEARCHLIST,
  UPDATE_USERMATCHINFO,
  ADD_USERSELFREGISTER,
  DELETE_USERSELFREGISTER,
} from '../../@types/models/user';

export const addUserInfo = (data: User) => {
  return {
    type: ADD_USERINFO,
    payload: data,
  };
};

export const updateUserRankInfo = (data: any) => {
  return {
    type: UPDATE_USERRANKINFO,
    payload: data,
  };
};

export const updateUserBookMark = (data: updateUserBookMarkProps) => {
  return {
    type: UPDATE_USERBOOKMARK,
    payload: data,
  };
};

export const updateUserSearchList = (data: updateUserSearchListProps) => {
  return {
    type: UPDATE_USERSEARCHLIST,
    payload: data,
  };
};

export const updateUserMatchInfo = (data: any) => {
  return {
    type: UPDATE_USERMATCHINFO,
    payload: data,
  };
};

export const addUserSelfRegister = (data: any) => {
  return {
    type: ADD_USERSELFREGISTER,
    payload: data,
  };
};

export const deleteUserSelfRegister = (data: updateUserSelfRegisterProps) => {
  return {
    type: DELETE_USERSELFREGISTER,
    payload: data,
  };
};

export const deleteUserMatchInfo = (data: any) => {
  return {
    type: DELETE_USERMATCHINFO,
    payload: data,
  };
};
