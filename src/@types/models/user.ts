export const ADD_USERINFO = 'ADD_USERINFO';
export const UPDATE_USERRANKINFO = 'UPDATE_USERRANKINFO';
export const UPDATE_USERBOOKMARK = 'UPDATE_USERBOOKMARK';
export const UPDATE_USERSEARCHLIST = 'UPDATE_USERSEARCHLIST';
export const UPDATE_USERMATCHINFO = 'UPDATE_USERMATCHINFO';
export const ADD_USERSELFREGISTER = 'ADD_USERSELFREGISTER';
export const DELETE_USERSELFREGISTER = 'DELETE_USERSELFREGISTER';
export const DELETE_USERMATCHINFO = 'DELETE_USERMATCHINFO';

//? Action Props
export interface updateUserSearchListProps {
  id: string;
  searchList: boolean;
}

export interface updateUserBookMarkProps {
  id: string;
  bookmark: boolean;
}

export interface updateUserSelfRegisterProps {
  id: string;
  selfRegister: boolean;
}
