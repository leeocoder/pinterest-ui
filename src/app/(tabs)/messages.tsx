import { theme } from '@/themes';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  title: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});

export default Messages;
