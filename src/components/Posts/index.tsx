import React from 'react';
import { ScrollView, View } from 'react-native';
import Post from '@/components/Post';
import { styles } from './styles';

const Posts = ({ posts }: PostsProps) => {
  function possByColumn(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1;

    return posts
      .filter((_, index) => index % 2 === rest)
      .map(({ id, title, image }) => (
        <Post
          key={id}
          id={id}
          title={title}
          image={image}
        />
      ));
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{possByColumn('right')}</View>
        <View style={styles.column}>{possByColumn('left')}</View>
      </View>
    </ScrollView>
  );
};

export default Posts;
