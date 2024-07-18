import { theme } from '@/themes';
import { FontAwesome } from '@expo/vector-icons';

import { Pressable, Text } from 'react-native';

import { styles } from './styles';
import { MenuButtonProps } from './menu-button';

const MenuButton = ({ title, icon }: MenuButtonProps) => {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={theme.colors.white}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default MenuButton;
