import {
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../_utils/Theme';
const {height, width} = Dimensions.get('window');

interface BottomSheetProps {
  pick: number;
  isActive: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
const BottomSheet = ({pick, isActive, children, onClose}: BottomSheetProps) => {
  const [modalVisibility, SetModalVisibility] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isActive) {
      SetModalVisibility(isActive);
    }
    Animated.timing(animation, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (!isActive) {
        SetModalVisibility(isActive);
      }
    });
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
    <Modal
      transparent
      visible={modalVisibility}
      onDismiss={onClose}
      onRequestClose={onClose}>
      <View style={styles.body}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.transparentContainer} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.container, bottomSheetTransform]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </View>
    </Modal>
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    backgroundColor: '#17171722',
  },
  transparentContainer: {
    flex: 1,
    width,
  },
  line: {},
});
