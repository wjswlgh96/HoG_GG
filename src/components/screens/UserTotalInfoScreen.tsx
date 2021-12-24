import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

//? My Components
import UserTotalInfoHeader from '../modules/usertotalinfo/header/UserTotalInfoHeader';
import UserTotalInfoBody from '../modules/usertotalinfo/body/UserTotalInfoBody';

//? Get Users
import { getUser } from '../../redux/selector/user';
import { getTargetUser } from '../../redux/selector/targetUser';
import { getSpell } from '../../redux/selector/spell';

//? Redux
import { useDispatch } from 'react-redux';
import { getTargetUserInfo } from '../../action/api/targetUser';

const UserTotalInfoScreen = (props: any) => {
  const dispatch = useDispatch();
  const [targetData, setTargetData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [matchStart, setMatchStart] = useState<number>(0);

  const {
    route: {
      params: { user },
    },
  } = props;

  const spellData = getSpell();
  const userState = getUser();
  const targetUser = getTargetUser();

  useEffect(() => {
    getTargetUserInfo(
      dispatch,
      user.name,
      spellData,
      matchStart,
      setMatchStart,
      setTargetData,
    );

    setTimeout(() => {
      setIsLoading(true);
    }, 1500);
  }, []);

  return isLoading ? (
    <View style={styles.container}>
      <UserTotalInfoHeader
        user={
          userState.filter(el => {
            return el.id === user.id;
          })[0]
        }
      />
      <UserTotalInfoBody
        targetUser={targetUser[0]}
        targetData={targetData}
        setTargetData={setTargetData}
        spellData={spellData}
        matchStart={matchStart}
        setMatchStart={setMatchStart}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserTotalInfoScreen;
