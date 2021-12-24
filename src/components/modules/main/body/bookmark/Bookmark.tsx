import React from 'react';

import { StyleSheet, View } from 'react-native';

//? My Components
import BookmarkHeader from './BookmarkHeader';
import BookmarkBody from './module/BookmarkBody';
import BeforeBookmark from './module/BeforeBookmark';

const Bookmark = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <BookmarkHeader />
      {user &&
      user.filter((el: any) => {
        return el.bookmark === true;
      }).length > 0 ? (
        <View style={styles.bookmarkContainer}>
          {user.map((el: any) => {
            if (el.bookmark === true) {
              return <BookmarkBody key={el.id} user={el} />;
            }
          })}
        </View>
      ) : (
        <BeforeBookmark />
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

export default Bookmark;
