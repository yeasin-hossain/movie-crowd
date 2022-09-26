import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {bottomNavigationData} from '../../_utils';
import {colors} from '../../_utils/Theme';

const CustomBottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  // console.log(state, descriptors, navigation);
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {label, iconName, selectedIcon} = bottomNavigationData[index];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            onPress={onPress}
            style={styles.tabItem}
            key={route.key}>
            <View style={isFocused && styles.selectedBackground}>
              <Text>Ok</Text>
            </View>

            <Text style={isFocused ? styles.textSelected : styles.text}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.3,
    paddingBottom: 16,
  },
  tabItem: {
    flex: 1,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBackground: {
    width: 64,
    height: 32,
    backgroundColor: '#E0F9F4',
    borderRadius: 20,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.blueGray(500),
  },
  textSelected: {
    fontSize: 12,
    color: colors.primary,
  },
});
