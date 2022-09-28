import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CastItem from './CastItem';
import {colors} from '../../../../_utils/Theme';
export interface castAndCrewsInterface {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null;
  credit_id: string;
  department: string;
  job: string;
}

interface CastAndCrewPropsType {
  cast: Array<castAndCrewsInterface>;
  crew: Array<castAndCrewsInterface>;
}
const CastAndCrew = ({cast, crew}: CastAndCrewPropsType) => {
  return (
    <View>
      <Text style={styles.text}>Cast...</Text>
      <FlatList
        data={cast}
        renderItem={({item}) => <CastItem cast={item} />}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.text}>Crew...</Text>
      <FlatList
        data={crew}
        renderItem={({item}) => <CastItem cast={item} />}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CastAndCrew;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.blueGray(700),
  },
});
