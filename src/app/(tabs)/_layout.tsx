import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/themes';
import Avatar from '@/components/Avatar';

const TabLayout = () => {
  return (
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
  );
};

export default TabLayout;
