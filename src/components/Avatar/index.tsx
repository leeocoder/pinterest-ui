import React from 'react';
import { Image, ImageProps } from 'react-native';
import { styles } from './styles';

const Avatar = ({ selected, ...rest }: AvatarProps & ImageProps) => {
  return (
    <Image
      style={[styles.container, selected && styles.selected]}
      {...rest}
    ></Image>
  );
};

export default Avatar;
