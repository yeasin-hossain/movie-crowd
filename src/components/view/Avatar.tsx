import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../../assets/image';

interface AvatarProps {
  uri?: string;
  onPress?: () => void;
}

const Avatar = ({uri, onPress}: AvatarProps) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Image
        source={uri && uri.trim().length > 0 ? {uri: uri} : Images.ropanaSplash}
        style={styles.avatarView}
      />
    </TouchableOpacity>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatarView: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
    borderRadius: 32,
  },
});
