import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DropDown} from '../../components/input';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {GenreList} from '../../feature';
import {setSort, useAppDispatch, useAppSelector} from '../../redux';

const option = [
  {
    label: 'Popularity ASC',
    value: 'popularity.asc',
    id: 1,
    key: 1,
  },
  {
    label: 'Popularity DESC',
    value: 'popularity.desc',
    id: 2,
    key: 2,
  },
  {
    label: 'Release date ASC',
    value: 'release_date.asc',
    id: 3,
    key: 3,
  },
  {
    label: 'Release date DESC',
    value: 'release_date.desc',
    id: 4,
    key: 4,
  },
  {
    label: 'Vote average ASC',
    value: 'vote_average.asc',
    id: 5,
    key: 5,
  },
  {
    label: 'Vote average DESC',
    value: 'vote_average.desc',
    id: 6,
    key: 6,
  },
  {
    label: 'revenue ASC',
    value: 'revenue.asc',
    id: 7,
    key: 7,
  },
  {
    label: 'revenue DESC',
    value: 'revenue.desc',
    id: 8,
    key: 8,
  },
];
const SortMovie = () => {
  const {sort} = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <GenreList />
      <View style={styles.dropDownContainer}>
        <DropDown
          options={option}
          value={sort}
          onChange={v => dispatch(setSort(v.toString()))}
          placeholder="Sort"
        />
      </View>
    </View>
  );
};

export default SortMovie;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.blueGray(700),
    padding: HORIZONTAL_SPACE,
    paddingBottom: HORIZONTAL_SPACE / 4,
  },
  dropDownContainer: {
    width: 70,
    marginRight: 16,
  },
});
