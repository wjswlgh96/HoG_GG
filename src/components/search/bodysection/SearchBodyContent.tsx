import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Pressable,
  Platform,
  Alert,
} from 'react-native';

//? Redux
import { useDispatch } from 'react-redux';
import {
  updateUserShowList,
  updateUserBookMark,
} from '../../../redux/actions/user';

//? My Component
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { resultScreenProp } from '../../../screens/RootStackParams';

const imagePath: any = {
  Iron: require('../../../images/ranked_emblems/IRON.png'),
  Bronze: require('../../../images/ranked_emblems/BRONZE.png'),
  Silver: require('../../../images/ranked_emblems/SILVER.png'),
  Gold: require('../../../images/ranked_emblems/GOLD.png'),
  Platinum: require('../../../images/ranked_emblems/PLATINUM.png'),
  Diamond: require('../../../images/ranked_emblems/DIAMOND.png'),
  Master: require('../../../images/ranked_emblems/MASTER.png'),
  Grandmaster: require('../../../images/ranked_emblems/GRANDMASTER.png'),
  Challenger: require('../../../images/ranked_emblems/CHALLENGER.png'),
};

const SearchBodyContent = (props: any) => {
  const { user } = props;
  const dispatch = useDispatch();
  const navigation = useNavigation<resultScreenProp>();

  const onPressUpdateUserShowList = async () => {
    await dispatch(updateUserShowList({ id: user.id, showList: false }));
  };

  const onPressAddUserBookmark = async () => {
    if (!user.bookmark) {
      await dispatch(updateUserBookMark({ id: user.id, bookmark: true }));
    } else {
      Alert.alert('알림', '즐겨찾기에서 삭제하시겠습니까?', [
        { text: '아니오' },
        {
          text: '예',
          style: 'destructive',
          onPress: async () => {
            await dispatch(
              updateUserBookMark({ id: user.id, bookmark: false }),
            );
          },
        },
      ]);
    }
  };

  const onPressResult = () => {
    navigation.navigate('Result', {
      user,
    });
  };

  return user ? (
    user.showList && (
      <Pressable onPress={onPressResult} style={styles.pressStyle}>
        <View key={user.id} style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.imageContainer}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                }}
                source={{
                  uri:
                    Platform.OS === 'ios'
                      ? `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIconId}.png`
                      : `http://ddragon.leagueoflegends.com/cdn/11.24.1/img/profileicon/${user.profileIconId}.png`,
                }}
              />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.contentLeftWrapper}>
                <Text style={{ fontSize: 20, marginBottom: 5, color: 'black' }}>
                  {user.name}
                </Text>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  {user.tier === 'Unranked' ? (
                    <Image
                      style={{
                        ...styles.tierImage,
                        opacity: 0.5,
                        tintColor: 'black',
                      }}
                      source={require(`../../../images/ranked_emblems/MASTER.png`)}
                    />
                  ) : (
                    <Image
                      style={{
                        ...styles.tierImage,
                      }}
                      source={imagePath[user.tier]}
                    />
                  )}
                  {user.tier && (
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: 10,
                        color: '#717171',
                      }}>
                      {user.tier}
                    </Text>
                  )}
                  {user.rank !== 0 && (
                    <Text style={{ fontSize: 15, color: '#717171' }}>
                      {user.rank}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.contentRightWrapper}>
                {!user.myself && (
                  <Pressable
                    style={{ marginRight: 15 }}
                    onPressOut={onPressAddUserBookmark}>
                    {user.bookmark ? (
                      <Ionicons name="star" size={25} color="#2196F3" />
                    ) : (
                      <Ionicons
                        name="ios-star-outline"
                        size={26}
                        color="#a1a1a1"
                      />
                    )}
                  </Pressable>
                )}
                <Pressable onPressOut={onPressUpdateUserShowList}>
                  <Fontisto name="close-a" size={15} color="#a1a1a1" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    )
  ) : (
    <ActivityIndicator style={styles.wrapper} />
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

  imageContainer: {
    flex: 2.5,
  },

  contentContainer: {
    flex: 7.5,
    flexDirection: 'row',
  },

  contentLeftWrapper: {
    flex: 7.5,
    flexDirection: 'column',
  },

  contentRightWrapper: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },

  tierImage: {
    width: 15,
    height: 15,
    marginRight: 7,
  },
});

export default SearchBodyContent;
