import React from 'react';
import { View, StyleSheet } from 'react-native';

//? My Components
import UserName from './module/UserName';
import UserTierRank from './module/UserTierRank';

const LeftContent = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <UserName user={user} />
      <UserTierRank user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7.5,
    flexDirection: 'column',
  },
});

export default LeftContent;
