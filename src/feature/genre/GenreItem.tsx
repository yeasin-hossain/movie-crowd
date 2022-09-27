import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {useAppSelector} from '../../redux';

interface genre {
  id: number;
  name: string;
}
interface GenreItemProps {
  onPress?: () => void;
  genre: genre;
}

const GenreItem = ({genre, onPress}: GenreItemProps) => {
  const name = useAppSelector(state => state.genre);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor:
            name.name === genre.name ? colors.primary_light : colors.primary,
        },
      ]}>
      <Text style={styles.name}>{genre.name}</Text>
    </TouchableOpacity>
  );
};

export default GenreItem;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.primary,
    margin: HORIZONTAL_SPACE / 3,
    padding: HORIZONTAL_SPACE / 1.5,
    borderRadius: HORIZONTAL_SPACE / 2,
    borderColor: colors.blueGray(300),
    borderWidth: 1,

    shadowColor: colors.blueGray(200),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.blueGray(900),
  },
});
