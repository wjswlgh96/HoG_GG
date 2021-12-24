import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

//? My Components
import UserImageNameComponent from '../../../../../../../@utils/UserImageNameComponent';
import UserNameTitleComponent from '../../../../../../../@utils/UserNameTitleComponent';
import UtilsButton from '../../../../../../../@utils/UtilsButton';

const UserProfileComponent = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <UserImageNameComponent
          imageContainer={styles.imageContainer}
          imageStyle={styles.imageStyle}
          textContainer={styles.textContainer}
          textStyle={styles.textStyle}
          user={user}
        />
      </View>
      <View style={styles.rightContainer}>
        <UserNameTitleComponent
          containerStyle={styles.nameContainer}
          textStyle={styles.nameText}
          user={user}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonContainer}>
            <UtilsButton styles="styleOne" content="전적갱신" />
            <UtilsButton styles="styleTwo" content="인게임" />
            <UtilsButton styles="styleTwo" content="전적캡쳐" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.92,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  leftContainer: {
    flex: 2.5,
  },

  imageContainer: {
    width: '100%',
  },

  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  textContainer: {
    position: 'absolute',
    top: '80%',
    left: '20%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
  },

  textStyle: {
    color: 'white',
  },

  rightContainer: {
    flex: 7.5,
  },

  nameContainer: {
    marginBottom: 10,
  },

  nameText: {
    color: 'black',
    fontSize: 26,
    fontWeight: '600',
  },

  buttonContainer: {
    flexDirection: 'row',
  },
});

export default UserProfileComponent;
