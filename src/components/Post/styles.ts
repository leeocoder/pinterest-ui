import { theme } from '@/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 300,
    borderRadius: 22,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.white,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },
});
