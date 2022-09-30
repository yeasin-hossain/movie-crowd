import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  clearRecentlyVisited,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {MovieItem} from '../../components/view';
import {TitleText} from '../../components/text';
import {HORIZONTAL_SPACE} from '../../_utils/Theme';
import {TextButton} from '../../components/button';

const RecentlyVisit = () => {
  const {recentlyVisitedMovies} = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  if (recentlyVisitedMovies.length < 1) {
    return null;
  }
  return (
    <View>
      <View style={styles.buttonContainer}>
        <TitleText text="Recently Visited..." styleProp={styles.title} />
        <TextButton
          text="Clear"
          onPress={() => dispatch(clearRecentlyVisited())}
        />
      </View>
      <FlatList
        data={recentlyVisitedMovies}
        renderItem={({item}) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentlyVisit;

const styles = StyleSheet.create({
  title: {
    padding: HORIZONTAL_SPACE,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
