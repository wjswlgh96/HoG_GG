import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { User } from '../actions/@types';

export const getUser = () => {
  const user: User[] = useSelector((state: RootState) => state.userReducer);

  return user;
};
