import React from 'react';
import { StyleSheet, View, ActivityIndicator, Pressable } from 'react-native';

//? My Component
import ProfileImageComponent from './bodycontent/ProfileImageComponent';
import LeftContent from './bodycontent/leftcontent/LeftContent';
import RightContent from './bodycontent/rightcontent/RightContent';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { userTotalInfoStackProps } from '../../../../../@types/stacknav/screens/UserTotalInfo';

const SearchBodyContent = (props: any) => {
  const { user } = props;
  const navigation = useNavigation<userTotalInfoStackProps>();

  const onPressResult = () => {
    navigation.navigate('UserTotalInfo', {
      user,
    });
  };

  return (
    user.searchList && (
      <Pressable onPress={onPressResult} style={styles.pressStyle}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ProfileImageComponent user={user} />
            <View style={styles.contentContainer}>
              <LeftContent user={user} />
              <RightContent user={user} />
            </View>
          </View>
        </View>
      </Pressable>
    )
  );
};

const styles = StyleSheet.create({
  pressStyle: {
    width: '100%',
  },

  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  wrapper: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingVertical: 10,
  },

  contentContainer: {
    flex: 7.5,
    flexDirection: 'row',
  },
});

export default SearchBodyContent;
