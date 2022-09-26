import {Dimensions} from 'react-native';

export const useGetScreenDimension = () => {
  const {height, width} = Dimensions.get('screen');
  return {
    height,
    width,
  };
};
export const useGetWindowDimension = () => {
  const {height, width} = Dimensions.get('window');
  return {
    height,
    width,
  };
};
