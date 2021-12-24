import React from 'react';
import { StyleSheet, View, Text, Platform, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { selfRegisterStackProps } from '../../../../@types/stacknav/screens/SelfRegister';

//? Color
import { lightGray } from '../../../../../assets/colors/color';

const SelfRegisterHeader = () => {
  const navigation = useNavigation<selfRegisterStackProps>();

  const onPressGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        ...styles.container,
        marginTop: Platform.OS === 'ios' ? 30 : 5,
      }}>
      <View style={styles.closeContainer}>
        <Pressable onPressOut={onPressGoBack}>
          <Fontisto name="close-a" size={18} color={lightGray} />
        </Pressable>
      </View>
      <View style={styles.regionContainer}>
        <Text
          style={{
            fontSize: 20,
            color: `${lightGray}`,
            textDecorationLine: 'underline',
            textDecorationColor: `${lightGray}`,
          }}>
          KR
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  closeContainer: {
    flex: 5,
    alignItems: 'flex-start',
  },

  regionContainer: {
    flex: 5,
    alignItems: 'flex-end',
  },
});

export default SelfRegisterHeader;
