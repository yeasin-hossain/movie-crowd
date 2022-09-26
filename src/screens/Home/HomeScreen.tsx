import {Text, View} from 'react-native';
import React from 'react';
import {genreInterface, useGetGenreQuery} from '../../redux/Genre';
import {colors} from '../../_utils/Theme';

const HomeDashboard = () => {
  const {data, isLoading, isSuccess} = useGetGenreQuery();
  console.log(data);
  return (
    <View>
      <Text>{isLoading && 'loading'}</Text>
      {isSuccess &&
        data?.genres?.map((genre: genreInterface) => (
          <Text
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: colors.blueGray(100),
              borderRadius: 5,
              color: colors.primary,
              fontWeight: 'bold',
            }}>
            {genre.name}
          </Text>
        ))}
    </View>
  );
};

export default HomeDashboard;
