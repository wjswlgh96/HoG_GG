import React from 'react';
import { View, Text } from 'react-native';

const UserNameTitleComponent = (props: any) => {
  const { containerStyle, textStyle, user } = props;

  return user ? (
    <View style={containerStyle}>
      <Text style={textStyle}>{user.name}</Text>
    </View>
  ) : null;
};

export default UserNameTitleComponent;
