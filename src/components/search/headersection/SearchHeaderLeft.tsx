import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../screens/RootStackParams';

type searchScreenProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

const SearchHeaderLeft = () => {
  const navigation = useNavigation<searchScreenProp>();

  const onPressOut = (): void => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable onPressOut={onPressOut}>
        <Fontisto name="close-a" size={21} color="#a1a1a1" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 5,
  },
});

export default SearchHeaderLeft;
