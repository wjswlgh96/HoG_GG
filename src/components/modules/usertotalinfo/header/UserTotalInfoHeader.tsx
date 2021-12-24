import React from 'react';
import { StyleSheet, View, Pressable, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//? Redux
import { useDispatch } from 'react-redux';
import { updateUserBookMark } from '../../../../redux/actions/user';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { userTotalInfoStackProps } from '../../../../@types/stacknav/screens/UserTotalInfo';

//? Color
import { lightGray, lightBlue } from '../../../../../assets/colors/color';

const UserTotalInfoHeader = (props: any) => {
  const { user } = props;

  const dispatch = useDispatch();
  const navigation = useNavigation<userTotalInfoStackProps>();

  const onPressGoback = () => {
    navigation.goBack();
  };

  const onPressBookMark = () => {
    dispatch(updateUserBookMark({ id: user.id, bookmark: !user.bookmark }));
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? 60 : 30,
      }}>
      <Pressable onPressOut={onPressGoback}>
        <Ionicons name="chevron-back" size={40} color={lightGray} />
      </Pressable>
      <Pressable onPressOut={onPressBookMark}>
        {user.selfRegister ? null : user.bookmark ? (
          <Ionicons name="star" size={25} color={lightBlue} />
        ) : (
          <Ionicons name="ios-star-outline" size={26} color={lightGray} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default UserTotalInfoHeader;
