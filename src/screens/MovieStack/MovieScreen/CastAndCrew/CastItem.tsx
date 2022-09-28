import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {castAndCrewsInterface} from './CastAndCrew';
import {ImageEndPoint} from '../../../../_utils';
import {colors, HORIZONTAL_SPACE} from '../../../../_utils/Theme';

interface castProp {
  cast: castAndCrewsInterface;
}
const CastItem = ({cast}: castProp) => {
  return (
    <Image
      source={{uri: ImageEndPoint(cast?.profile_path || '')}}
      style={styles.image}
    />
  );
};

export default CastItem;

const styles = StyleSheet.create({
  image: {
    borderRadius: 99999,
    borderColor: colors.blueGray(500),
    borderWidth: 1,
    padding: HORIZONTAL_SPACE / 2,
    height: 50,
    width: 50,
    margin: HORIZONTAL_SPACE / 3,
  },
});
