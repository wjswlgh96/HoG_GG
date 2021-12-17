import React from 'react';

import { StyleSheet, View } from 'react-native';

//? Redux
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { User } from '../../redux/actions/types';

//? My Components
import MainBookMarkHeader from './mainbookmark/MainBookMarkHeader';
import MainBodyBookMark from './mainbookmark/MainBookMarkContent';
import MainBodyNoneBookMark from './mainbookmark/MainNoneBookMark';

const MainBookMark = () => {
  const user: User[] = useSelector((state: RootState) => state.userReducer);

  return (
    <View style={styles.container}>
      <MainBookMarkHeader />
      {user &&
      user.filter(el => {
        return el.bookmark === true;
      }).length > 0 ? (
        <View style={styles.bookmarkContainer}>
          {user.map(el => {
            if (el.bookmark === true) {
              return <MainBodyBookMark key={el.id} user={el} />;
            }
          })}
        </View>
      ) : (
        <MainBodyNoneBookMark />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  bookmarkContainer: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default MainBookMark;
