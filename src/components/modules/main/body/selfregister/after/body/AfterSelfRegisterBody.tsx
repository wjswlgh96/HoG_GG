import React from 'react';
import { View, StyleSheet } from 'react-native';

//? Multiple
import UserNameTitleComponent from '../../../../../../@utils/UserNameTitleComponent';
import UserSubTitleComponent from '../../../../../../@utils/UserSubTitleComponent';
import UserImageNameComponent from '../../../../../../@utils/UserImageNameComponent';

//? Color
import { Gray } from '../../../../../../../../assets/colors/color';

const AfterSelfRegisterBody = (props: any) => {
  const { user } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <UserImageNameComponent
          imageContainer={styles.imageContainer}
          imageStyle={styles.profileImageStyle}
          textContainer={styles.imageTextContainer}
          textStyle={styles.imageTextStyle}
          user={user}
        />
      </View>
      <View style={styles.rightContainer}>
        <UserNameTitleComponent
          containerStyle={styles.titleContainer}
          textStyle={styles.titleText}
          user={user}
        />
        <UserSubTitleComponent
          containerStyle={styles.subtitleContainer}
          imageStyle={styles.imageStyle}
          rankStyle={styles.rankStyle}
          pointStyle={styles.pointStyle}
          user={user}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 3,
  },

  imageContainer: {},

  profileImageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  imageTextContainer: {
    position: 'absolute',
    width: '45%',
    top: '68%',
    left: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
  },

  imageTextStyle: {
    color: 'white',
  },

  rightContainer: {
    flex: 7,
    justifyContent: 'center',
  },

  titleContainer: {
    marginBottom: 8,
  },

  titleText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 22,
  },

  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageStyle: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  rankStyle: {
    fontSize: 16,
    marginRight: 5,
    color: `${Gray}`,
  },

  pointStyle: {
    fontSize: 16,
    color: `${Gray}`,
  },
});

export default AfterSelfRegisterBody;
