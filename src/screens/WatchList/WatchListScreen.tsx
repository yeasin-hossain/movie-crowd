import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getWatchListLocalInitialData,
  setDataFromLocalStore,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {MovieItem} from '../../feature';

const WatchListScreen = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const {watchList} = useAppSelector(state => state.watchList);

  useEffect(() => {
    (async () => {
      const data = await getWatchListLocalInitialData();
      console.log(data);
      dispatch(setDataFromLocalStore(data));
    })();
  }, [dispatch]);
  return (
    <View>
      <FlatList
        data={watchList}
        renderItem={({item}) => (
          <MovieItem
            movie={item}
            onPress={() => navigation.navigate('Movie', {movie: item})}
            landscapeAble={true}
          />
        )}
        columnWrapperStyle={styles.wrapStyle}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0}
        keyExtractor={(kye, index) => `${kye.title}${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={10000}
      />
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  wrapStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
