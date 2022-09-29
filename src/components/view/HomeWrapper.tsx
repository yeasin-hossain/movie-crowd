import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
interface HomeWrapperTypes {
  children: React.ReactNode;
}
const HomeWrapper = ({children}: HomeWrapperTypes) => {
  return <SafeAreaView style={styles.homeContainer}>{children}</SafeAreaView>;
};

export default HomeWrapper;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginBottom: -35,
  },
});
