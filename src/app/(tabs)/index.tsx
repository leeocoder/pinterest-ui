import Filters from '@/components/Filters';
import Posts from '@/components/Posts';
import { theme } from '@/themes';
import { FILTERS } from '@/utils/filters';
import { POSTS } from '@/utils/posts';

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  const [filter, setFilter] = useState<string>(FILTERS[0]);
  return (
    <View style={styles.container}>
      <Filters
        filters={FILTERS}
        filter={filter}
        onChange={setFilter}
      />

      <Posts posts={POSTS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 52,
  },
  title: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});

export default Home;
