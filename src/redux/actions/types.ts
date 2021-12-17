//? Interface Type
export interface User {
  accountId: string;
  profileIconId: number;
  revisionDate: bigint;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: bigint;
  tier: string;
  rank: number;
  leaguePoints: number;
  wins: number;
  losses: number;
  showList: boolean;
  bookmark: boolean;
  myself: boolean;
}

export interface ResultUser {
  id: string;
  puuid: string;
  name: string;
  profileIconId: number;
  summonerLevel: bigint;
  rankInfo: [];
  matchHistory: [];
  myMatchResult: any[];
  participatns: [];
}

//? Action Props
export interface updateUserShowListProps {
  id: string;
  showList: boolean;
}

export interface updateUserBookMarkProps {
  id: string;
  bookmark: boolean;
}

export interface updateUserMyselfProps {
  id: string;
  myself: boolean;
}

//? State Array Type
export type UserState = User[];
export type ResultUserState = ResultUser[];
