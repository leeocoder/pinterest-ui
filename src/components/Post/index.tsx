import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { theme } from '@/themes';

const Post = ({ title, image }: PostProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <Feather
          name='more-horizontal'
          size={16}
          color={theme.colors.white}
        />
      </View>
    </View>
  );
};

export default Post;
