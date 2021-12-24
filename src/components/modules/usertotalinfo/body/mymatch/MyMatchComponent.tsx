import React from 'react';
import { View, StyleSheet } from 'react-native';

//? My Components
import MyMatchLeftContainer from './module/leftcontainer/MyMatchLeftContainer';
import MyMatchMiddleContainer from './module/middlecontainer/MyMatchMiddleContainer';
import MyMatchRightContainer from './module/rightcontainer/MyMatchRightContainer';

const MyMatchComponent = (props: any) => {
  const {
    match: { item },
  } = props;

  return (
    <View style={styles.container}>
      <MyMatchLeftContainer match={item} />
      <MyMatchMiddleContainer match={item} />
      <MyMatchRightContainer match={item} />
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
