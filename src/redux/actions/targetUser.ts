import {
  ADD_TARGETUSERINFO,
  UPDATE_TARGETUSERRANKINFO,
  UPDATE_TARGETUSERMATCHINFO,
} from '../../@types/models/targetUser';

export const addTargetUserInfo = (data: any) => {
  return {
    type: ADD_TARGETUSERINFO,
    payload: data,
  };
};

export const updateTargetUserRankInfo = (data: any) => {
  return {
    type: UPDATE_TARGETUSERRANKINFO,
    payload: data,
  };
};

export const updateTargetUserMatchInfo = (data: any) => {
  return {
    type: UPDATE_TARGETUSERMATCHINFO,
    payload: data,
  };
};
