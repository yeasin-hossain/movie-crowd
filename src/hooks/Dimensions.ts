import {useEffect, useState} from 'react';
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

export const useOrientation = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window: {width, height}}) => {
        if (width < height) {
          setOrientation('PORTRAIT');
        } else {
          setOrientation('LANDSCAPE');
        }
      },
    );
    return () => subscription?.remove();
  }, []);

  return orientation;
};
