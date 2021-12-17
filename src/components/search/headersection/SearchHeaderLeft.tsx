import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

//? Navigate
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
      <Pressable
        onPressOut={onPressOut}
        style={{ backgroundColor: 'transparent' }}>
        <Fontisto name="close-a" size={21} color="#717171" />
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
