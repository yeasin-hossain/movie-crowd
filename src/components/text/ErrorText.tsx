import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {colors} from '../../_utils/Theme';
interface TitleTextProps extends TextProps {
  text: string;
  onPress?: () => void;
  styleProp?: TextStyle;
}

const ErrorText = (props: TitleTextProps) => {
  return (
    <Text
      style={[styles.textStyle, props?.styleProp]}
      onPress={props?.onPress}
      {...props}>
      {props.text}
    </Text>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  textStyle: {
    color: colors.error(600),
    fontSize: 14,
    paddingHorizontal: 16,
  },
});
