import BottomSheet from '@gorhom/bottom-sheet';
import React, { forwardRef } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            style={styles.close}
            name='close'
            size={24}
            onPress={onClose}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
      </View>
    </BottomSheet>
  );
});

export default Menu;
