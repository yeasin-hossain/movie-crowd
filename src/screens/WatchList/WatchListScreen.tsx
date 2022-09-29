import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../redux';
import {MovieItem} from '../../feature';
import {TitleText} from '../../components/text';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {NotFound} from '../../components/view';

const WatchListScreen = () => {
  const navigation = useNavigation();
  const {watchList} = useAppSelector(state => state.watchList);
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <TitleText text="Your Favorites Movies..." styleProp={styles.title} />
        }
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
        showsVerticalScrollIndicator={false}
        keyExtractor={(kye, index) => `${kye.title}${index}`}
        numColumns={10000}
        ListEmptyComponent={<NotFound />}
      />
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    padding: HORIZONTAL_SPACE,
    color: colors.text.light,
  },
  wrapStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
