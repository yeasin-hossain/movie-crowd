import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../_utils/Theme';
import {useState} from 'react';
import Options, {optionProps} from './Options';
import {ErrorText} from '../../text';

interface DropDownProps {
  iconName: string;
  placeholder?: string;
  value?: string | number;
  options: optionProps[];
  onChange: (value: string | number) => void;
  error?: string;
}

const DropDown = ({
  placeholder = '',
  value = '',
  options,
  onChange,
  error,
}: DropDownProps) => {
  const [selectedValue, SelectValue] = useState(value);
  const [showingOptions, ShowOption] = useState(false);
  useEffect(() => {
    ShowOption(false);
    SelectValue(options.filter(data => data.value === value)?.[0]?.label || '');
  }, [options, value]);
  const isError =
    error && error.trim().length > 0 ? {borderColor: colors.error(600)} : {};
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, isError]}
        onPress={() => ShowOption(!showingOptions)}>
        <View style={styles.iconContainer}>
          <Text>Up</Text>
        </View>
        <Text style={styles.text}>
          {selectedValue && selectedValue.toString().length > 0
            ? selectedValue
            : placeholder}
        </Text>

        <View style={styles.iconContainer}>
          <Text>Down</Text>
        </View>
        <Options
          visibility={showingOptions}
          onClose={() => ShowOption(false)}
          data={options}
          value={value}
          onChange={onChange}
        />
      </TouchableOpacity>
      {error && error.trim().length > 0 && <ErrorText text={error} />}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    backgroundColor: colors.background_white,
    marginVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: colors.blueGray(300),
  },
  iconContainer: {
    marginHorizontal: 4,
    padding: 4,
  },
  text: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 17,
    color: colors.blueGray(600),
  },
});
