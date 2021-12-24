import React from 'react';
import { View, Image, Platform, StyleSheet } from 'react-native';

const ProfileImageComponent = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{
          uri:
            Platform.OS === 'ios'
              ? `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIconId}.png`
              : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIconId}.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
  },

  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default ProfileImageComponent;
