import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';

const ItemImageComponent = (props: any) => {
  const { image } = props;

  return (
    <View style={styles.container}>
      {image > 0 && (
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              Platform.OS === 'ios'
                ? `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${image}.png`
                : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${image}.png`,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    borderRadius: 4,
    marginRight: 2,
    backgroundColor: '#a1a1a1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    width: 26,
    height: 26,
    borderRadius: 4,
  },
});

export default ItemImageComponent;
