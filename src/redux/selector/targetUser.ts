import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { TargetUser } from '../actions/@types';

export const getTargetUser = () => {
  const targetuser: TargetUser[] = useSelector(
    (state: RootState) => state.targetUserReducer,
  );

  return targetuser;
};
