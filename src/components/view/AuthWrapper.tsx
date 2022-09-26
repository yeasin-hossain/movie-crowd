import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {colors} from '../../_utils/Theme';
import CustomStatusBar from './CustomStatusBar';
interface AuthWrapperTypes {
  children: React.ReactNode;
}
const AuthWrapper = ({children}: AuthWrapperTypes) => {
  return (
    <SafeAreaProvider style={styles.homeContainer}>
      <CustomStatusBar backgroundColor={colors.background} />
      {children}
    </SafeAreaProvider>
  );
};

export default AuthWrapper;
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
