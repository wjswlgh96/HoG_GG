export const addResultUser = (data: any) => {
  return {
    type: 'ADD_RESULTUSER',
    payload: data,
  };
};

export const updateResultUserRank = (data: any) => {
  return {
    type: 'UPDATE_RESULTUSERRANK',
    payload: data,
  };
};

export const updateResultMatchhistory = (data: any) => {
  return {
    type: 'UPDATE_RESULTMATCHHISTORY',
    payload: data,
  };
};

export const updateMyMatchResult = (data: any) => {
  return {
    type: 'UPDATE_MYMATCHRESULT',
    payload: data,
  };
};
