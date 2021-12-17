import React from 'react';
import { View, StyleSheet } from 'react-native';

//? My Components
import MyMatchLeftContainer from './section/MyMatchLeftContainer';
import MyMatchMiddleContainer from './section/MyMatchMiddleContainer';
import MyMatchRightContainer from './section/MyMatchRightContainer';

const MyMatchComponent = (props: any) => {
  const { match } = props;

  return (
    <View style={styles.container}>
      <MyMatchLeftContainer match={match} />
      <MyMatchMiddleContainer match={match} />
      <MyMatchRightContainer match={match} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
  },
});

export default MyMatchComponent;
