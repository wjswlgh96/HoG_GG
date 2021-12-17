import React from 'react';
import { View, StyleSheet } from 'react-native';

//? Path

//? My Components
import MiddleTopComponent from './middlecontainer/MiddleTopComponent';
import MiddleBottomComponent from './middlecontainer/MiddleBottomComponent';

const MyMatchMiddleContainer = (props: any) => {
  const { match } = props;

  return (
    <View style={styles.middleContainer}>
      <MiddleTopComponent match={match} />
      <MiddleBottomComponent match={match} />
    </View>
  );
};
const styles = StyleSheet.create({
  middleContainer: {
    flex: 6,
    backgroundColor: 'white',
  },
});

export default MyMatchMiddleContainer;
