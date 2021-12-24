import React from 'react';
import { Text } from 'react-native';

const UserName = (props: any) => {
  const { user } = props;

  return (
    <Text style={{ fontSize: 20, marginBottom: 5, color: 'black' }}>
      {user.name}
    </Text>
  );
};

export default UserName;
