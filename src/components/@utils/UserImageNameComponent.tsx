import React from 'react';
import { View, Text, Image, Platform } from 'react-native';

const UserImageNameComponent = (props: any) => {
  const { imageContainer, imageStyle, textContainer, textStyle, user } = props;

  return (
    <View style={imageContainer}>
      <Image
        style={imageStyle}
        source={{
          uri:
            Platform.OS === 'ios'
              ? `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIconId}.png`
              : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIconId}.png`,
        }}
      />
      <View style={textContainer}>
        <Text style={textStyle}>{user.summonerLevel}</Text>
      </View>
    </View>
  );
};

export default UserImageNameComponent;
