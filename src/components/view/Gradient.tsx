import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface GreenGradientProps {
  children: React.ReactNode;
}

export const GreenGradient = ({children}: GreenGradientProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      locations={[0, 0.5, 1]}
      style={styles.container}
      colors={['#041E1500', '#01150E80', '#00130D']}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
