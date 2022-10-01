import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useGetMovieVideosQuery} from '../../../redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import {TitleText} from '../../../components/text';
import {HORIZONTAL_SPACE} from '../../../_utils/Theme';

interface videosProps {
  movieId: number;
}

export interface videoInterface {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

const WIDTH = Dimensions.get('screen').width;

const Videos = ({movieId}: videosProps) => {
  const {data: movieVideos, isSuccess: movieVideoSuccess} =
    useGetMovieVideosQuery({movieId});
  return (
    <View>
      <TitleText text="Related Movies..." styleProp={styles.title} />
      {movieVideoSuccess && (
        <FlatList
          data={movieVideos?.results.filter(
            (m: videoInterface) => m.site === 'YouTube',
          )}
          renderItem={({item}) => (
            <View style={styles.trailerContainer}>
              <YoutubePlayer
                height={250}
                width={WIDTH - 50}
                play={false}
                videoId={item.key}
              />
            </View>
          )}
          horizontal
          keyExtractor={(item: videoInterface) => item.key}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  trailerContainer: {
    width: WIDTH - 50,
    margin: HORIZONTAL_SPACE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -40,
  },
  title: {
    textAlign: 'left',
    marginTop: HORIZONTAL_SPACE,
  },
});
