import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {linking} from './src/utils/linking';
import {
  requestUserPermission,
  handleForegroundNotification,
  handleBackgroundNotification,
} from './src/utils/notifications';
import Loader from './src/components/Loader';

export default function App() {
  useEffect(() => {
    requestUserPermission();
    handleForegroundNotification();
    handleBackgroundNotification();
  }, []);

  return (
    <NavigationContainer linking={linking} fallback={<Loader />}>
      <AppNavigator />
    </NavigationContainer>
  );
}
