import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Router from './router/routes';

const App = () => {
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  )
}

export default App

