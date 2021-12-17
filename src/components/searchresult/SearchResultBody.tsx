import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

//? Redux
import { ResultUser } from '../../redux/actions/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

//? My Components
import UserProfileComponent from './bodysection/userprofile/UserProfileComponent';
import UserRankInfoComponent from './bodysection/userrankinfo/UserRankInfoComponent';
import MyMatchComponent from './bodysection/mymatch/MyMatchComponent';

const SearchResultBody = () => {
  const resultUser: ResultUser[] = useSelector(
    (state: RootState) => state.resultUserReducer,
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <UserProfileComponent resultUser={resultUser[0]} />
        <UserRankInfoComponent resultUser={resultUser[0]} />
        <View style={{ flex: 6, width: '100%' }}>
          {resultUser[0].myMatchResult
            .sort((a: any, b: any) => {
              return b.gameEndTimestamp - a.gameEndTimestamp;
            })
            .map(el => {
              return <MyMatchComponent key={el.matchId} match={el} />;
            })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchResultBody;
