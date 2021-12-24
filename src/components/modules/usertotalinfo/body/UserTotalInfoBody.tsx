import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

//? Redux
import { useDispatch } from 'react-redux';
import { refreshTargetUserMatchInfo } from '../../../../action/api/targetUser';

//? MyComponent
import MyMatchHeader from './mymatch/module/header/MyMatchHeader';
import MyMatchComponent from './mymatch/MyMatchComponent';

const UserTotalInfoBody = (props: any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    targetUser,
    targetData,
    setTargetData,
    spellData,
    matchStart,
    setMatchStart,
  } = props;

  const getData = () => {
    refreshTargetUserMatchInfo(
      dispatch,
      targetUser,
      spellData,
      matchStart,
      setIsLoading,
      setMatchStart,
      setTargetData,
    ).then((result: any) => {
      setIsLoading(false);
      setTargetData((prev: any) => [...prev, ...result]);
    });
  };

  const onRefresh = () => {
    if (isLoading) {
      return;
    } else {
      setIsLoading(true);
      getData();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={targetData}
        renderItem={item => {
          return <MyMatchComponent match={item} />;
        }}
        keyExtractor={(item: any, idx: number) => {
          return String(idx);
        }}
        onEndReached={onRefresh}
        onEndReachedThreshold={-0.2}
        scrollEventThrottle={300}
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={() => {
          return <MyMatchHeader user={targetUser} />;
        }}
        ListFooterComponent={() => {
          return isLoading ? (
            <View style={{ paddingVertical: 50 }}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          ) : null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    width: '100%',
  },
});

export default UserTotalInfoBody;
