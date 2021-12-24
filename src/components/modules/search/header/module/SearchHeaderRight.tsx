import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch } from 'react-redux';

//? Color
import { lightGray, lightWhite } from '../../../../../../assets/colors/color';
import { getUserInfoBySummonerName } from '../../../../../action/api/user';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { userTotalInfoStackProps } from '../../../../../@types/stacknav/screens/UserTotalInfo';

const SearchHeaderRight = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<userTotalInfoStackProps>();

  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: any): void => {
    setInputValue(e);
  };

  const onSubmit = () => {
    setInputValue('');

    getUserInfoBySummonerName(dispatch, inputValue, navigation);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        autoCapitalize="none"
        autoFocus={true}
        autoCorrect={false}
        style={styles.textInputStyle}
        placeholder="소환사 검색"
        placeholderTextColor={lightGray}
      />
      <Fontisto
        style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : 12 }}
        name="search"
        size={24}
        color={lightGray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: `${lightWhite}`,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },

  textInputStyle: {
    flex: 9,
    fontSize: 17,
  },
});

export default SearchHeaderRight;
