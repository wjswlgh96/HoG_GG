import React from 'react';
import { StyleSheet, View, Text, Platform, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { myselfScreenProp } from '../../screens/RootStackParams';

const MySelfHeader = () => {
  const navigation = useNavigation<myselfScreenProp>();

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
          <Fontisto name="close-a" size={18} color="#a1a1a1" />
        </Pressable>
      </View>
      <View style={styles.regionContainer}>
        <Text
          style={{
            fontSize: 20,
            color: '#a1a1a1',
            textDecorationLine: 'underline',
            textDecorationColor: '#a1a1a1',
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

export default MySelfHeader;
