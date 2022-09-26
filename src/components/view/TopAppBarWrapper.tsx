import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
interface TopAppBarProps {
  onPress?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const TopAppBarWrapper = ({onPress, title, children}: TopAppBarProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={onPress ? false : true}
          style={styles.buttonContainer}
          onPress={onPress}>
          {onPress && (
            <View style={styles.iconWrapper}>
              <Text>Back</Text>
            </View>
          )}
          <Text style={styles.titleStyle}>{title}</Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default TopAppBarWrapper;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.background_white,
    paddingHorizontal: HORIZONTAL_SPACE,
    borderBottomColor: colors.blueGray(200),
    borderBottomWidth: 1,

    shadowColor: colors.blueGray(200),
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.blueGray(900),
    fontSize: 22,
  },
  iconWrapper: {
    marginRight: 15,
  },
});
