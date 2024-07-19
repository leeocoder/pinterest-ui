import { theme } from '@/themes';
import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import { Skeleton } from 'moti/skeleton';
import { router } from 'expo-router';

const Splash = () => {
  const logoZoomScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);
  const contentDisplayed = useSharedValue(0);

  const skeletonColor = [
    theme.colors.gray[700],
    theme.colors.gray[600],
    theme.colors.gray[700],
  ];

  const dimensions = useWindowDimensions();

  const logoAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { scale: logoZoomScale.value },
      { translateY: logoPositionY.value },
    ],
  }));

  const contentAnimatedStyles = useAnimatedStyle(() => ({
    display: contentDisplayed.value === 1 ? 'flex' : 'none',
  }));

  function filter() {
    return Array.from({ length: 10 }).map((_, index) => (
      <Skeleton
        key={index}
        width={60}
        height={26}
        radius={6}
        colors={skeletonColor}
      />
    ));
  }

  function boxes(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1;

    return Array.from({ length: 8 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === 'left' ? 0 : 1) ? 200 : 300;
        return (
          <Animated.View
            key={index}
            style={[styles.box, { height }]}
          >
            <Skeleton
              colors={skeletonColor}
              width={'100%'}
              height={height}
            />
          </Animated.View>
        );
      });
  }

  function logoAnimation() {
    logoZoomScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (isFinished) => {
        if (isFinished) {
          logoPositionY.value = withSequence(
            withTiming(50, undefined, () => {
              contentDisplayed.value = 1;
            }),
            withTiming(-dimensions.height, { duration: 400 })
          );
          runOnJS(onEndSplash)();
        }
      })
    );
  }

  function onEndSplash() {
    setTimeout(() => {
      router.push('/(tabs)');
    }, 2000);
  }

  React.useEffect(() => {
    logoAnimation();
    console.log({ contentDisplayed: contentDisplayed.value });
    console.log({ contentDisplayed });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, logoAnimatedStyles]}
        source={require('@/assets/images/splash.png')}
      />
      <Animated.View
        style={[styles.content, contentAnimatedStyles]}
        entering={SlideInDown.duration(700)}
      >
        <View style={styles.filters}>{filter()}</View>
        <View style={styles.boxes}>
          <View style={styles.column}>{boxes('left')}</View>
          <View style={styles.column}>{boxes('right')}</View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  logo: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginBottom: 24,
    alignSelf: 'center',
  },
  boxes: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
  },
  box: {
    width: '100%',
    borderRadius: 16,
    backgroundColor: theme.colors.gray[600],
  },
  content: {
    flex: 1,
    width: '100%',
  },
  column: {
    flex: 1,
    gap: 12,
  },
  filters: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 16,
    paddingBottom: 12,
  },
});
