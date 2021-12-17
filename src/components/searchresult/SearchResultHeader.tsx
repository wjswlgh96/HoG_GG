import React from 'react';
import { StyleSheet, View, Pressable, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//? Redux
import { useDispatch } from 'react-redux';
import { updateUserBookMark } from '../../redux/actions/user';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { resultScreenProp } from '../../screens/RootStackParams';

const SearchResultHeader = (props: any) => {
  const { user } = props;

  const dispatch = useDispatch();
  const navigation = useNavigation<resultScreenProp>();

  const onPressGoback = () => {
    navigation.goBack();
  };

  const onPressBookMark = () => {
    dispatch(
      updateUserBookMark({ id: user[0].id, bookmark: !user[0].bookmark }),
    );
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? 60 : 30,
      }}>
      <Pressable onPressOut={onPressGoback}>
        <Ionicons name="chevron-back" size={40} color="#a1a1a1" />
      </Pressable>
      <Pressable onPressOut={onPressBookMark}>
        {user[0].myself ? null : user[0].bookmark ? (
          <Ionicons name="star" size={25} color="#2196F3" />
        ) : (
          <Ionicons name="ios-star-outline" size={26} color="#a1a1a1" />
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

export default SearchResultHeader;
