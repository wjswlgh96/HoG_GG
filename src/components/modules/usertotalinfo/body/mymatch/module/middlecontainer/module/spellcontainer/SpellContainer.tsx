import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';

const SpellContainer = (props: any) => {
  const { match } = props;

  return (
    <View style={styles.container}>
      {match.spellList.map((el: any, idx: number) => {
        return (
          <View key={idx} style={styles.spellViewContainer}>
            <Image
              style={styles.spellImageStyle}
              source={{
                uri:
                  Platform.OS === 'ios'
                    ? `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${el}.png`
                    : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${el}.png`,
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },

  spellViewContainer: {
    marginVertical: 2,
  },

  spellImageStyle: {
    width: 22,
    height: 22,
    borderRadius: 4,
  },
});

export default SpellContainer;
