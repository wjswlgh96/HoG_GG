import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

//? My Components
import MainMySelfHeader from './mainmyselfsection/MainMySelfHeader';
import MainMySelfBody from './mainmyselfsection/MainMySelfBody';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { resultScreenProp } from '../../screens/RootStackParams';

const MainMySelf = (props: any) => {
  const { user } = props;
  const navigation = useNavigation<resultScreenProp>();

  const onPressOut = () => {
    navigation.navigate('Result', {
      user,
    });
  };

  return (
    <View style={styles.container}>
      <MainMySelfHeader user={user} />
      <Pressable onPressOut={onPressOut} style={styles.pressStyle}>
        <MainMySelfBody user={user} />
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
    shadowColor: '#a1a1a1',
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

export default MainMySelf;
