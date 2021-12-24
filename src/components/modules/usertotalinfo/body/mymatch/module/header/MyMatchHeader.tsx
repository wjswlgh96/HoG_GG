import React from 'react';
import { StyleSheet, View } from 'react-native';

//? My Components
import UserProfileComponent from './userprofile/UserProfileComponent';
import UserRankInfoComponent from './userrankinfo/UserRankInfoComponent';

const MyMatchHeader = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <UserProfileComponent user={user} />
      <UserRankInfoComponent user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
});

export default MyMatchHeader;
