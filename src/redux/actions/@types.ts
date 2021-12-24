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
  searchList: boolean;
  bookmark: boolean;
  selfRegister: boolean;
}

export interface TargetUser {
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
  searchList: boolean;
  bookmark: boolean;
  selfRegister: boolean;
  matchInfo: any[];
  rankInfo: any[];
}

export interface Spell {
  id: string;
  key: string;
}

//? State Array Type
export type UserState = User[];
export type TargetUserState = TargetUser[];
export type SpellState = Spell[];
