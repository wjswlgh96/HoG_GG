import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';

//? My Components
import KdaContainer from './kdacontainer/KdaContainer';
import SpellContainer from './spellcontainer/SpellContainer';

const MiddleTopComponent = (props: any) => {
  const { match } = props;

  return (
    <View style={styles.container}>
      <View style={styles.champContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              Platform.OS === 'ios'
                ? `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/${match.myRecords.champName}.png`
                : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/${match.myRecords.champName}.png`,
          }}
        />
      </View>
      <SpellContainer match={match} />
      <KdaContainer match={match} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },

  champContainer: {
    marginRight: 10,
  },

  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default MiddleTopComponent;
