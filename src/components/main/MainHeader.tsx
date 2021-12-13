import React from 'react';
import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const MainHeader = () => {
  return (
    <>
      <View
        style={{
          ...styles.container,
          marginTop: Platform.OS === 'ios' ? 60 : 20,
        }}>
        <Pressable style={styles.leftView}>
          <Text>
            <Fontisto name="home" size={22} color="#a1a1a1" />
          </Text>
        </Pressable>
        <View style={styles.middleView}>
          <Text style={{ fontSize: 20 }}>리그 오브 레전드</Text>
        </View>
        <View style={styles.rightView}>
          <Text style={{ fontSize: 20, color: '#a1a1a1' }}>KR</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftView: {
    flex: 1,
    alignItems: 'flex-start',
  },

  middleView: {
    flex: 2,
    alignItems: 'center',
  },

  rightView: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default MainHeader;
