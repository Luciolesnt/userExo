import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import {Button, View, Text} from 'react-native';
import LogoTitle from './components/LogoTitle';
import AddUser from './pages/AddUser';
import {users} from './data/users';

const App = () => {
  const [dataUsers, setDataUsers] = useState(users);

  // creation d'un stack
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => (
              <View>
                <Text style={{color: '#fff'}}>{dataUsers.length} users</Text>
                <LogoTitle />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#ff8829',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          {props => <Home {...props} users={dataUsers} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddUser"
          options={{
            headerStyle: {
              backgroundColor: '#a5c90f',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('Fill in the form to add a user')}
                title="Info"
                color="#ffb366"
              />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          {props => (
            <AddUser {...props} users={dataUsers} setUsers={setDataUsers} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
