import React from 'react';
import { View, StyleSheet } from 'react-native';

//? My Components
import MiddleTopComponent from './module/MiddleTopComponent';
import MiddleBottomComponent from './module/MiddleBottomComponent';

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
