import Avatar from '@/components/Avatar';
import Menu from '@/components/Menu';
import { theme } from '@/themes';
import { Ionicons } from '@expo/vector-icons';

import BottomSheet from '@gorhom/bottom-sheet';

import { Tabs } from 'expo-router';
import { useRef } from 'react';
import { View } from 'react-native';

const TabLayout = () => {
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons
                color={color}
                name='home'
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                color={color}
                name='search'
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='menu'
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                color={color}
                name='add-outline'
                size={size}
              />
            ),
          }}
          listeners={({}) => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen();
            },
          })}
        />
        <Tabs.Screen
          name='messages'
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                color={color}
                name='chatbubble-ellipses'
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ focused }) => (
              <Avatar
                selected={focused}
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/37962036?v=4',
                }}
              />
            ),
          }}
        />
      </Tabs>
      <Menu
        ref={bottomSheetRef}
        onClose={handleBottomSheetClose}
      />
    </View>
  );
};

export default TabLayout;
