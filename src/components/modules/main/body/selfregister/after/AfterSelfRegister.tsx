import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

//? My Components
import AfterSelfRegisterHeader from './header/AfterSelfRegisterHeader';
import AfterSelfRegisterBody from './body/AfterSelfRegisterBody';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { userTotalInfoStackProps } from '../../../../../../@types/stacknav/screens/UserTotalInfo';

//? Color
import { Gray } from '../../../../../../../assets/colors/color';

const AfterSelfRegister = (props: any) => {
  const { user } = props;
  const navigation = useNavigation<userTotalInfoStackProps>();

  const onPressOut = () => {
    navigation.navigate('UserTotalInfo', {
      user,
    });
  };

  return (
    <View style={styles.container}>
      <AfterSelfRegisterHeader user={user} />
      <Pressable onPressOut={onPressOut} style={styles.pressStyle}>
        <AfterSelfRegisterBody user={user} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: `${Gray}`,
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },

  pressStyle: {
    flex: 9,
    flexDirection: 'row',
  },
});

export default AfterSelfRegister;
