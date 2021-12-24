import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

//? Color
import { lightGray } from '../../../../../../../../../assets/colors/color';

const basePath = '../../../../../../../../../assets/images/ranked_emblems/';

const imagePath: any = {
  Iron: require(`${basePath}IRON.png`),
  Bronze: require(`${basePath}BRONZE.png`),
  Silver: require(`${basePath}SILVER.png`),
  Gold: require(`${basePath}GOLD.png`),
  Platinum: require(`${basePath}PLATINUM.png`),
  Diamond: require(`${basePath}DIAMOND.png`),
  Master: require(`${basePath}MASTER.png`),
  Grandmaster: require(`${basePath}GRANDMASTER.png`),
  Challenger: require(`${basePath}CHALLENGER.png`),
};

const UserTierRank = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      {user.tier === 'Unranked' ? (
        <Image
          style={{
            ...styles.imageStyle,
            opacity: 0.5,
            tintColor: 'black',
          }}
          source={require(`${basePath}MASTER.png`)}
        />
      ) : (
        <Image style={styles.imageStyle} source={imagePath[user.tier]} />
      )}
      {user.tier && <Text style={styles.tierText}>{user.tier}</Text>}
      {user.rank !== 0 && <Text style={styles.rankText}>{user.rank}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  imageStyle: {
    width: 15,
    height: 15,
    marginRight: 7,
  },

  tierText: {
    fontSize: 15,
    marginRight: 10,
    color: `${lightGray}`,
  },

  rankText: {
    fontSize: 15,
    color: `${lightGray}`,
  },
});

export default UserTierRank;
