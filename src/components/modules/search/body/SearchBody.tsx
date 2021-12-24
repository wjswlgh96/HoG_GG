import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//? My Component
import SearchBodyHeader from './module/SearchBodyHeader';
import SearchBodyContent from './module/SearchBodyContent';

//? Redux
import { getUser } from '../../../../redux/selector/user';

//? Color
import { lightGray, lightWhite } from '../../../../../assets/colors/color';

const SearchBody = () => {
  const user = getUser();

  const searchBodyContent = () => {
    return user.map(el => {
      if (el.selfRegister && !el.searchList) {
        return null;
      } else if (el.selfRegister && el.searchList) {
        return <SearchBodyContent key={el.id} user={el} />;
      } else if (!el.selfRegister && el.searchList) {
        return <SearchBodyContent key={el.id} user={el} />;
      }

      return null;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}>
        <SearchBodyHeader />
        <View style={styles.contentContainer}>
          {user.length !== 0 ? (
            searchBodyContent()
          ) : (
            <>
              <Ionicons
                style={{ marginBottom: 20 }}
                name="warning-outline"
                size={40}
                color={lightGray}
              />
              <Text style={styles.noneContentText}>
                최근 검색 내역이 없습니다.
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: '100%',
  },

  contentContainer: {
    flex: 9.3,
    backgroundColor: `${lightWhite}`,
    alignItems: 'center',
  },

  noneContentText: {
    color: `${lightGray}`,
    fontSize: 20,
  },
});

export default SearchBody;
