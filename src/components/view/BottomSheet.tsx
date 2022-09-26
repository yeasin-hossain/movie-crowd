import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {colors} from '../../_utils/Theme';
const {height, width} = Dimensions.get('screen');

interface BottomSheetProps {
  pick: number;
  isActive: boolean;
  children: React.ReactNode;
}
const BottomSheet = ({pick, isActive, children}: BottomSheetProps) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isActive, animation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [height, height - pick],
    extrapolate: 'clamp',
  });

  const bottomSheetTransform = {
    transform: [{translateY}],
  };

  return (
    <Animated.View style={[styles.container, bottomSheetTransform]}>
      <View style={styles.line} />
      {children}
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: colors.background_white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    height,
    position: 'absolute',
  },
  line: {},
});
