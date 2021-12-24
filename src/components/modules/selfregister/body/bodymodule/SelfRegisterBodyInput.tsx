import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

//? Redux
import { useDispatch } from 'react-redux';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { selfRegisterStackProps } from '../../../../../@types/stacknav/screens/SelfRegister';

//? Color
import { lightBlue, lightGray } from '../../../../../../assets/colors/color';
import { getUserInfoBySelfRegister } from '../../../../../action/api/user';

const SelfRegisterBodyInput = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<selfRegisterStackProps>();
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeText = (e: any) => {
    setInputValue(e);
  };

  const onSubmitEditing = async (e: any) => {
    setInputValue('');

    getUserInfoBySelfRegister(dispatch, inputValue, navigation);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="소환사 검색"
        placeholderTextColor="#a1a1a1"
        style={styles.textInput}
        value={inputValue}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.pressableStyle}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
          완료
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },

  textInput: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: `${lightGray}`,
    marginBottom: 30,
  },

  pressableStyle: {
    backgroundColor: `${lightBlue}`,
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: 'center',
  },
});

export default SelfRegisterBodyInput;
