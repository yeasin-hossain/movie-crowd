import {Dimensions, StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {colors} from '../../_utils/Theme';
const {width} = Dimensions.get('screen');
interface TitleTextProps {
  text: string;
  onPress?: () => void;
  styleProp?: TextStyle;
}

const TitleText = ({text, onPress, styleProp}: TitleTextProps) => {
  return (
    <Text style={[styles.title, styleProp]} onPress={onPress}>
      {text}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.blueGray(700),
    maxWidth: width - 32,
  },
});
