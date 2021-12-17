import React from 'react';
import { View, StyleSheet } from 'react-native';

//? My Components
import ItemImageComponent from '../ItemImageComponent';
import ItemLastImageComponent from '../ItemLastImageComponent';

const MiddleBottomComponent = (props: any) => {
  const { match } = props;
  return (
    <View style={styles.container}>
      {match.participants.items.map((el: any, idx: number) => {
        if (idx === match.participants.items.length - 1) {
          return <ItemLastImageComponent key={idx} image={el} />;
        } else {
          return <ItemImageComponent key={idx} image={el} />;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    marginLeft: 20,
  },
});

export default MiddleBottomComponent;
