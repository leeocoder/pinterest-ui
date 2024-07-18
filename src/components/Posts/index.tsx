import React from 'react';
import { ScrollView, View } from 'react-native';
import Post from '@/components/Post';

const Posts = ({ posts }: PostsProps) => {
  function possByColumn(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1;

    return posts
      .filter((_, index) => index % 2 === rest)
      .map(({ id, title, image }) => (
        <Post
          id={id}
          title={title}
          image={image}
        />
      ));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>{possByColumn('right')}</View>
      <View>{possByColumn('left')}</View>
    </ScrollView>
  );
};

export default Posts;
