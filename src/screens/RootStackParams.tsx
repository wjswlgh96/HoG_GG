import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Search: undefined;
  MySelf: undefined;
  Result: {};
};

export type myselfScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'MySelf'
>;

export type searchScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Search'
>;

export type resultScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Result'
>;
