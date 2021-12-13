import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../screens/RootStackParams';

type searchScreenProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

const BodyInput = () => {
  const navigation = useNavigation<searchScreenProp>();

  const onPressOut = (): void => {
    navigation.navigate('Search');
  };

  return (
    <Pressable onPressOut={onPressOut} style={styles.inputView}>
      <Text style={{ fontSize: 20, color: '#a1a1a1' }}>소환사 검색</Text>
      <Fontisto name="search" size={24} color="#a1a1a1" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BodyInput;
