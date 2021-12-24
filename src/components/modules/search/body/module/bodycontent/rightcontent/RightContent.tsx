import React from 'react';
import { View, Pressable, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

//? Redux
import { useDispatch } from 'react-redux';

//? Color
import { lightBlue, Gray } from '../../../../../../../../assets/colors/color';

import {
  updateUserSearchList,
  updateUserBookMark,
} from '../../../../../../../redux/actions/user';

const RightContent = (props: any) => {
  const { user } = props;
  const dispatch = useDispatch();

  const onPressUpdateUserSearchList = () => {
    dispatch(updateUserSearchList({ id: user.id, searchList: false }));
  };

  const onPressAddUserBookmark = () => {
    if (!user.bookmark) {
      dispatch(updateUserBookMark({ id: user.id, bookmark: true }));
    } else {
      Alert.alert('알림', '즐겨찾기에서 삭제하시겠습니까?', [
        { text: '아니오' },
        {
          text: '예',
          style: 'destructive',
          onPress: () => {
            dispatch(updateUserBookMark({ id: user.id, bookmark: false }));
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {!user.selfRegister && (
        <Pressable
          style={{ marginRight: 15 }}
          onPressOut={onPressAddUserBookmark}>
          {user.bookmark ? (
            <Ionicons name="star" size={25} color={lightBlue} />
          ) : (
            <Ionicons name="ios-star-outline" size={26} color={Gray} />
          )}
        </Pressable>
      )}
      <Pressable onPressOut={onPressUpdateUserSearchList}>
        <Fontisto name="close-a" size={15} color={Gray} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RightContent;
