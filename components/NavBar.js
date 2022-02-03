import React from 'react';

import {View, Button} from 'react-native';

const NavBar = navigation => {
  const {navigate} = navigation;
  return (
    <View style={{padding: 20, backgroundColor: 'beige'}}>
      <Button
        color="#a5c90f"
        accessibilityLabel="Add a user"
        title="Go to Add User..."
        onPress={() => {
          navigate('AddUser'), {mot: 'Add User'};
        }}
      />
    </View>
  );
};

export default NavBar;
