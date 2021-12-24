import React from 'react';
import { View, Text, Image } from 'react-native';

const imagePath: any = {
  Iron: require('../../../assets/images/ranked_emblems/IRON.png'),
  Bronze: require('../../../assets/images/ranked_emblems/BRONZE.png'),
  Silver: require('../../../assets/images/ranked_emblems/SILVER.png'),
  Gold: require('../../../assets/images/ranked_emblems/GOLD.png'),
  Platinum: require('../../../assets/images/ranked_emblems/PLATINUM.png'),
  Diamond: require('../../../assets/images/ranked_emblems/DIAMOND.png'),
  Master: require('../../../assets/images/ranked_emblems/MASTER.png'),
  Grandmaster: require('../../../assets/images/ranked_emblems/GRANDMASTER.png'),
  Challenger: require('../../../assets/images/ranked_emblems/CHALLENGER.png'),
};

const UserSubTitleComponent = (props: any) => {
  const { containerStyle, imageStyle, rankStyle, pointStyle, user } = props;
  return user ? (
    <View style={containerStyle}>
      {user.tier === 'Unranked' ? (
        <Image
          style={{
            ...imageStyle,
            opacity: 0.5,
            tintColor: 'black',
          }}
          source={require(`../../../assets/images/ranked_emblems/MASTER.png`)}
        />
      ) : (
        <Image
          style={{
            ...imageStyle,
          }}
          source={imagePath[user.tier]}
        />
      )}
      {user.rank ? (
        <Text style={rankStyle}>
          {user.tier} {user.rank}
        </Text>
      ) : (
        <Text style={rankStyle}>{user.tier}</Text>
      )}
      {user.leaguePoints && (
        <Text style={pointStyle}>({user.leaguePoints}LP)</Text>
      )}
    </View>
  ) : null;
};

export default UserSubTitleComponent;
