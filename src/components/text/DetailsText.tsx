import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {colors} from '../../_utils/Theme';
interface TitleTextProps extends TextProps {
  text: string;
  onPress?: () => void;
  styleProp?: TextStyle;
}

const DetailsText = (props: TitleTextProps) => {
  return (
    <Text
      style={[styles.textStyle, props?.styleProp]}
      onPress={props?.onPress}
      {...props}>
      {props.text}
    </Text>
  );
};

export default DetailsText;

const styles = StyleSheet.create({
  textStyle: {
    color: colors.blueGray(900),
    fontSize: 16,
    paddingHorizontal: 16,
  },
});
