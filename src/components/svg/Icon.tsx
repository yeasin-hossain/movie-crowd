import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../_utils/Theme';

interface SvgProps {
  size?: number;
  color?: string;
}

export const RemoveIcon = ({size = 30, color = colors.primary}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Path
      d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"
      stroke={color}
    />
    <Path
      d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"
      stroke={color}
    />
  </Svg>
);

export const IconAdd = ({size = 24, color = colors.primary}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1Z"
      fill={color}
      fillOpacity={0.85}
    />
  </Svg>
);
