import React, {useLayoutEffect} from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import NavBar from '../components/NavBar';
import {styles} from './styles';

const Home = ({users, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.push('AddUser')}
          title="+"
          color="#ffb366"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollview}>
          {users
            ? users.map(user => (
                <View style={styles.card} key={user.name}>
                  <Text style={styles.text}>{user.name}</Text>
                </View>
              ))
            : null}
        </ScrollView>
      </View>
      <NavBar {...navigation} />
    </View>
  );
};

export default Home;
