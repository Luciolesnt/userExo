import React from 'react';
import {Image} from 'react-native';

const LogoTitle = () => {
  return (
    <Image
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 50, height: 50}}
      source={require('../assets/images/cap.png')}
    />
  );
};
export default LogoTitle;
