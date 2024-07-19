import { theme } from '@/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    borderRadius: 22,
  },
  title: {
    fontSize: 16,
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
