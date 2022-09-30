/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  addToFavorite,
  movieInterface,
  removeFromFavorite,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import {ImageEndPoint} from '../../_utils';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {useNavigation} from '@react-navigation/native';
import {useOrientation} from '../../hooks';

interface movieProps {
  movie: movieInterface;
  onPress?: () => void;
  landscapeAble?: boolean;
}

const WIDTH = Dimensions.get('screen').width;

const MovieItem = ({movie, landscapeAble}: movieProps) => {
  const navigation = useNavigation();
  const orientation = useOrientation();
  const {watchList} = useAppSelector(state => state.watchList);
  const dispatch = useAppDispatch();

  const width = orientation === 'PORTRAIT' ? WIDTH / 2.2 : 170;
  return (
    <TouchableOpacity
      style={[styles.container, {width: landscapeAble ? width : 160}]}
      onPress={() => navigation.navigate('Movie', {movie})}>
      <View>
        <Image
          source={{uri: ImageEndPoint(movie.poster_path)}}
          style={styles.poster}
        />
        {watchList?.find(m => m.id === movie.id) ? (
          <TouchableOpacity
            style={styles.addToFevButton}
            onPress={() => dispatch(removeFromFavorite(movie))}>
            <Text
              style={{
                fontSize: 18,
                color: colors.text.light,
                fontWeight: 'bold',
              }}>
              X
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addToFevButton}
            onPress={() => dispatch(addToFavorite(movie))}>
            <Text
              style={{
                fontSize: 18,
                color: colors.primary,
                fontWeight: 'bold',
              }}>
              +
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    margin: HORIZONTAL_SPACE / 3,
    backgroundColor: colors.blueGray(100),
    padding: HORIZONTAL_SPACE / 2,
    borderRadius: HORIZONTAL_SPACE / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.primary,
    borderWidth: 0.5,
  },
  poster: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  title: {
    color: colors.blueGray(800),
    fontSize: 16,
    marginTop: HORIZONTAL_SPACE / 2,
  },
  addToFevButton: {
    paddingHorizontal: HORIZONTAL_SPACE,
    marginHorizontal: HORIZONTAL_SPACE * 2,
    marginTop: HORIZONTAL_SPACE / 2,
    backgroundColor: colors.yellow,
    borderRadius: HORIZONTAL_SPACE,
    alignSelf: 'flex-end',
  },
});
