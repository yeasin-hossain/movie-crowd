import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';

const MovieSearch = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search by Name, Genre ETC..."
      />
    </View>
  );
};

export default MovieSearch;

const styles = StyleSheet.create({
  input: {
    borderColor: colors.primary,
    borderWidth: 0.5,
    borderRadius: HORIZONTAL_SPACE / 2,
    marginHorizontal: HORIZONTAL_SPACE,
    padding: HORIZONTAL_SPACE / 2,
  },
});
