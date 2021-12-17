import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

//? Redux
import { useDispatch } from 'react-redux';
import { deleteUserMySelf } from '../../../redux/actions/user';

const MainMySelfHeader = (props: any) => {
  const { user } = props;
  const dispatch = useDispatch();

  const onPressOut = () => {
    Alert.alert('알림', '즐겨찾기에서 삭제하시겠습니까?', [
      { text: '아니오' },
      {
        text: '예',
        style: 'destructive',
        onPress: async () => {
          await dispatch(deleteUserMySelf({ id: user.id, myself: false }));
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Pressable onPressOut={onPressOut}>
        <Fontisto name="close-a" size={13} color="#a1a1a1" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default MainMySelfHeader;
