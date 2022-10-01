import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../_utils/Theme';
import {useState} from 'react';
import Options, {optionProps} from './Options';

interface DropDownProps {
  placeholder?: string;
  value?: string | number;
  options: optionProps[];
  onChange: (value: string | number) => void;
}

const DropDown = ({
  placeholder = '',
  value = '',
  options,
  onChange,
}: DropDownProps) => {
  const [showingOptions, ShowOption] = useState(false);
  useEffect(() => {
    ShowOption(false);
  }, [options, value]);
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => ShowOption(!showingOptions)}>
        <Text style={styles.text}>{placeholder}</Text>
        <Options
          visibility={showingOptions}
          onClose={() => ShowOption(false)}
          data={options}
          value={value}
          onChange={onChange}
        />
      </TouchableOpacity>
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
    borderRadius: 8,
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
