import React from 'react';
import { StyleSheet, View, Pressable, Alert } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

//? Multiple
import UserNameTitleComponent from '../../multiple/UserNameTitleComponent';
import UserSubTitleComponent from '../../multiple/UserSubTitleComponent';
import UserImageNameComponent from '../../multiple/UserImageNameComponent';

//? Redux
import { useDispatch } from 'react-redux';
import { updateUserBookMark } from '../../../redux/actions/user';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { resultScreenProp } from '../../../screens/RootStackParams';

const MainBodyBookMark = (props: any) => {
  const { user } = props;
  const navigation = useNavigation<resultScreenProp>();
  const dispatch = useDispatch();

  const onPressUpdateUserBookmark = () => {
    Alert.alert('알림', '즐겨찾기에서 삭제하시겠습니까?', [
      { text: '아니오' },
      {
        text: '예',
        style: 'destructive',
        onPress: async () => {
          await dispatch(updateUserBookMark({ id: user.id, bookmark: false }));
        },
      },
    ]);
  };

  const onPressResult = () => {
    navigation.navigate('Result', {
      user,
    });
  };

  return (
    <Pressable onPress={onPressResult} style={styles.container}>
      <View style={styles.leftContentContainer}>
        <View style={styles.imageContainer}>
          <UserImageNameComponent
            imageContainer={styles.imageWrapper}
            imageStyle={styles.profileImageStyle}
            textContainer={styles.imageTextWrapper}
            textStyle={styles.imageTextStyle}
            user={user}
          />
        </View>
        <View style={styles.contentContainer}>
          <UserNameTitleComponent
            containerStyle={styles.titleContainer}
            textStyle={styles.titleText}
            user={user}
          />
          <UserSubTitleComponent
            containerStyle={styles.subtitleContainer}
            imageStyle={styles.imageStyle}
            rankStyle={styles.rankStyle}
            pointStyle={styles.pointStyle}
            user={user}
          />
        </View>
      </View>
      <View style={styles.rightContentContainer}>
        <Pressable onPressOut={onPressUpdateUserBookmark}>
          <Ionicons name="star" size={13} color="#2196F3" />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '49%',
    borderRadius: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 7,
    shadowColor: '#a1a1a1',
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },

  leftContentContainer: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingVertical: 15,
  },

  rightContentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    marginRight: 10,
  },

  imageContainer: {
    flex: 6,
  },

  imageWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },

  profileImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  imageTextWrapper: {
    position: 'absolute',
    top: '80%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  imageTextStyle: {
    color: 'white',
  },

  contentContainer: {
    flex: 4,
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: 2,
  },

  titleText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },

  subtitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    width: 13,
    height: 13,
    marginRight: 5,
  },

  rankStyle: {
    fontSize: 13,
    marginRight: 5,
    color: '#717171',
  },

  pointStyle: {
    fontSize: 13,
    color: '#717171',
  },
});

export default MainBodyBookMark;
