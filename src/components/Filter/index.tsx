import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { styles } from './styles';

const Filter = ({
  filter,
  selected,
  ...rest
}: FilterProps & PressableProps) => {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
};

export default Filter;
