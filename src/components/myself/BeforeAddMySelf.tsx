import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

//? Navigate
import { useNavigation } from '@react-navigation/native';
import { myselfScreenProp } from '../../screens/RootStackParams';

const BeforeAddMySelf = () => {
  const navigation = useNavigation<myselfScreenProp>();

  const onPressOut = (): void => {
    navigation.navigate('MySelf');
  };

  return (
    <Pressable style={styles.container} onPressOut={onPressOut}>
      <View style={styles.wrapper}>
        <Fontisto
          style={{ marginBottom: 20 }}
          name="plus-a"
          size={24}
          color="#c6c6c6"
        />
        <Text style={{ fontSize: 20, color: '#a1a1a1' }}>
          본인의 아이디를 등록해 주세요.
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#c6c6c6',
    borderRadius: 8,
    borderStyle: 'dashed',
  },
});

export default BeforeAddMySelf;
