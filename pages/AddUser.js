import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';

const AddUser = ({navigation, users, setUsers}) => {
  const [user, setUser] = useState('');
  const onSubmit = e => {
    if (user !== '') {
      setUsers([...users, {name: user}]);
      navigation.navigate('Home');
    }
  };
  return (
    <View>
      <TextInput
        onChangeText={setUser}
        value={user}
        placeholder="Nouvel Utilisateur"
        onSubmitEditing={onSubmit}
        style={{textAlign: 'center', marginVertical: 25}}
      />
    </View>
  );
};

export default AddUser;
