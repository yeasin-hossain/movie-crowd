import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React from 'react';
import BottomSheet from './BottomSheet';
import {hideError, useAppDispatch, useAppSelector} from '../../redux';
import {PrimaryButton} from '../button';
const {height, width} = Dimensions.get('window');
interface ErrorViewProps {
  onPress?: () => void;
}

const ErrorView = ({onPress}: ErrorViewProps) => {
  const {showError, details, title} = useAppSelector(state => state.error);
  const dispatch = useAppDispatch();
  // console.log(showError);
  const ErrorHideHandler = () => {
    dispatch(hideError());
    if (onPress) {
      onPress();
    }
  };
  return (
    <Modal transparent visible={showError}>
      <View style={styles.body}>
        <TouchableWithoutFeedback onPress={ErrorHideHandler}>
          <View style={{flex: 1, width}} />
        </TouchableWithoutFeedback>
        <BottomSheet isActive={showError} pick={380}>
          <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{details}</Text>
          </View>
          <PrimaryButton buttonText="ঠিক আছে" onPress={ErrorHideHandler} />
        </BottomSheet>
      </View>
    </Modal>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    backgroundColor: '#17171722',
  },
  container: {
    marginVertical: 8,
    alignItems: 'center',
  },
});
