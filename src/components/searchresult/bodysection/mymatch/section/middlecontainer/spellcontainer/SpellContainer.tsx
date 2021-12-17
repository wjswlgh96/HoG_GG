import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';

const SpellContainer = (props: any) => {
  const { match } = props;
  const [spellArr, setSpellArr] = useState<any[]>([]);

  useEffect(() => {
    getSpellData();
  }, []);

  const getSpellData = () => {
    let spellStr_01 = '';
    let spellStr_02 = '';

    match.spellData.map((el: any) => {
      if (el.id === match.participants.summoner[0]) {
        spellStr_01 = el.name;
      } else if (el.id === match.participants.summoner[1]) {
        spellStr_02 = el.name;
      }
    });

    setSpellArr([spellStr_01, spellStr_02]);
  };

  return (
    <View style={styles.container}>
      {spellArr.map((el: any, idx: number) => {
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
