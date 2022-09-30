import React from 'react';
import Svg, {Circle, Path, Rect, Symbol} from 'react-native-svg';
import {colors} from '../../_utils/Theme';
import {SvgProps} from './MovieSvg';

export const AddIcon = ({size = 30, color = colors.primary}: SvgProps) => (
  <Svg width={size} height={size} viewBox="0 0 17 18" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.25 9C0.25 4.44365 3.94365 0.75 8.5 0.75C13.0564 0.75 16.75 4.44365 16.75 9C16.75 13.5564 13.0564 17.25 8.5 17.25C3.94365 17.25 0.25 13.5564 0.25 9ZM8.5 2.25C4.77208 2.25 1.75 5.27208 1.75 9C1.75 12.7279 4.77208 15.75 8.5 15.75C12.2279 15.75 15.25 12.7279 15.25 9C15.25 5.27208 12.2279 2.25 8.5 2.25ZM8.5 5.25C8.91421 5.25 9.25 5.58579 9.25 6V8.25H11.5C11.9142 8.25 12.25 8.58579 12.25 9C12.25 9.41421 11.9142 9.75 11.5 9.75H9.25V12C9.25 12.4142 8.91421 12.75 8.5 12.75C8.08579 12.75 7.75 12.4142 7.75 12V9.75H5.5C5.08579 9.75 4.75 9.41421 4.75 9C4.75 8.58579 5.08579 8.25 5.5 8.25H7.75V6C7.75 5.58579 8.08579 5.25 8.5 5.25Z"
      fill={color}
    />
  </Svg>
);

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
