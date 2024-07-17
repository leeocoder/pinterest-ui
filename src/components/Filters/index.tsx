import Filter from '@/components/Filter';

import { FlatList } from 'react-native';

import { styles } from './styles';

const Filters = ({ filters, filter, onChange }: FiltersProps) => {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      style={styles.flatList}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
    ></FlatList>
  );
};

export default Filters;
