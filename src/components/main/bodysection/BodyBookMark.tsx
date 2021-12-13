import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BodyBookMark = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={{ fontSize: 28, color: 'black', fontWeight: '800' }}>
          즐겨찾기
        </Text>
      </View>
      <View style={styles.bodyView}>
        <Text style={{ fontSize: 18, color: '#a1a1a1' }}>
          {`아직 즐겨찾기한 소환사가 없습니다.
☆을 클릭하여 편리하게 이용하세요.`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  headerView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
  },

  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BodyBookMark;
