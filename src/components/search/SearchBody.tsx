import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//? My Component
import SearchBodyTitle from './bodysection/SearchBodyTitle';
import SearchBodyContent from './bodysection/SearchBodyContent';

//? Redux
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { User } from '../../redux/actions/types';

const SearchBody = () => {
  const user: User[] = useSelector((state: RootState) => state.userReducer);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}>
        <SearchBodyTitle />
        <View style={styles.contentContainer}>
          {user.length !== 0 ? (
            user.map(el => {
              if (el.myself && !el.showList) {
                return null;
              } else if (el.myself && el.showList) {
                return <SearchBodyContent key={el.id} user={el} />;
              } else if (!el.myself && el.showList) {
                return <SearchBodyContent key={el.id} user={el} />;
              }

              return null;
            })
          ) : (
            <>
              <Ionicons
                style={{ marginBottom: 20 }}
                name="warning-outline"
                size={40}
                color="#717171"
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
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
  },

  noneContentText: {
    color: '#717171',
    fontSize: 20,
  },
});

export default SearchBody;
