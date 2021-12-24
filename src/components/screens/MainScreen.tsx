import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

//? My Component
import MainHeader from '../modules/main/header/MainHeader';
import MainBody from '../modules/main/body/MainBody';

//? Axios
import { getSpellInfoAPI } from '../../action/api/spell';

//? Get User
import { getUser } from '../../redux/selector/user';

const MainScreen = () => {
  const dispatch = useDispatch();
  const user = getUser();

  useEffect(() => {
    getSpellAPI();
  }, []);

  const getSpellAPI = () => {
    getSpellInfoAPI(dispatch);
  };

  return (
    <View style={styles.container}>
      <MainHeader />
      <MainBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
