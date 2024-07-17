import React from 'react';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [isFontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!isFontLoaded) {
    SplashScreen.hideAsync();
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Slot />
    </GestureHandlerRootView>
  );
};

export default Layout;
