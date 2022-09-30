import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../redux';
import {MovieItem, NotFound} from '../../components/view';
import {TitleText} from '../../components/text';
import {HORIZONTAL_SPACE} from '../../_utils/Theme';

const RecentlyVisit = () => {
  const {recentlyVisitedMovies} = useAppSelector(state => state.movies);
  return (
    <View>
      <TitleText text="Recently Visited..." styleProp={styles.container}/>
      <FlatList
        data={recentlyVisitedMovies}
        renderItem={({item}) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<NotFound />}
      />
    </View>
  );
};

export default RecentlyVisit;

const styles = StyleSheet.create({
  container: {
    padding: HORIZONTAL_SPACE,
  },
});
