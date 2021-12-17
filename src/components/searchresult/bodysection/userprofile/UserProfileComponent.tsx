import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

//? My Components
import UserImageNameComponent from '../../../multiple/UserImageNameComponent';
import UserNameTitleComponent from '../../../multiple/UserNameTitleComponent';
import MultiButton from '../../../multiple/MultiButton';

const UserProfileComponent = (props: any) => {
  const { resultUser } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <UserImageNameComponent
          imageContainer={styles.imageContainer}
          imageStyle={styles.imageStyle}
          textContainer={styles.textContainer}
          textStyle={styles.textStyle}
          user={resultUser}
        />
      </View>
      <View style={styles.rightContainer}>
        <UserNameTitleComponent
          containerStyle={styles.nameContainer}
          textStyle={styles.nameText}
          user={resultUser}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonContainer}>
            <MultiButton styles="styleOne" content="전적갱신" />
            <MultiButton styles="styleTwo" content="인게임" />
            <MultiButton styles="styleTwo" content="전적캡쳐" />
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

  textStyle: { color: 'white' },

  rightContainer: { flex: 7.5 },

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
