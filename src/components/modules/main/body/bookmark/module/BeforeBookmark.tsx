import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BeforeBookmark = () => {
  return (
    <View style={styles.container}>
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

  bodyView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BeforeBookmark;
