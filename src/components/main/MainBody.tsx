import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

//? My Component
import BodyInput from './bodysection/BodyInput';
import BeforeAddMySelf from '../myself/BeforeAddMySelf';
import MainMySelf from '../myself/MainMySelf';
import MainBookMark from './MainBookMark';

//? Redux
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { User } from '../../redux/actions/types';

const MainBody = () => {
  const user: User[] = useSelector((state: RootState) => state.userReducer);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.mainLogo}
          source={require('../../images/Logo.png')}
        />
        <BodyInput />
        {user.filter(el => {
          return el.myself === true;
        }).length > 0 ? (
          user.map(el => {
            if (el.myself === true) {
              return <MainMySelf key={el.id} user={el} />;
            }

            return;
          })
        ) : (
          <BeforeAddMySelf />
        )}
        <MainBookMark />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '90%',
  },

  scrollView: {
    width: '100%',
    alignItems: 'center',
  },

  mainLogo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
});

export default MainBody;
