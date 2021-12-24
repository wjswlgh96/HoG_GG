import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

//? My Component
import MainBodyInput from './module/MainBodyInput';
import BeforeSelfRegister from './selfregister/before/BeforeSelfRegister';
import AfterSelfRegister from './selfregister/after/AfterSelfRegister';
import Bookmark from './bookmark/Bookmark';

//? Get User
import { getUser } from '../../../../redux/selector/user';

const MainBody = (props: any) => {
  const user = getUser();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.mainLogo}
          source={require('../../../../../assets/images/Logo.png')}
        />
        <MainBodyInput />
        {user.filter((el: any) => {
          return el.selfRegister === true;
        }).length > 0 ? (
          user.map((el: any) => {
            if (el.selfRegister === true) {
              return <AfterSelfRegister key={el.id} user={el} />;
            }
          })
        ) : (
          <BeforeSelfRegister />
        )}
        <Bookmark user={user} />
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
