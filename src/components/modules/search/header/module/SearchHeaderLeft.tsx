import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { searchStackProps } from '../../../../../@types/stacknav/screens/Search';

//? Color
import { lightGray } from '../../../../../../assets/colors/color';

const SearchHeaderLeft = () => {
  const navigation = useNavigation<searchStackProps>();

  const onPressOut = (): void => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPressOut={onPressOut}
        style={{ backgroundColor: 'transparent' }}>
        <Fontisto name="close-a" size={21} color={lightGray} />
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
