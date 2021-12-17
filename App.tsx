/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/redux/reducers/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//? My Components
import MainScreen from './src/components/main/MainScreen';
import SearchScreen from './src/components/search/SearchScreen';
import MySelfScreen from './src/components/myself/MySelfScreen';
import SearchResultScreen from './src/components/searchresult/SearchResultScreen';

const Stack = createNativeStackNavigator();
const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Result" component={SearchResultScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="MySelf" component={MySelfScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
