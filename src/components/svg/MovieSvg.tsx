// import Svg, {Rect} from 'react-native-svg';
import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {colors} from '../../_utils/Theme';

export interface SvgProps {
  color?: string;
  size?: number;
}

export const MovieSvg = ({size = 180, color = colors.primary}: SvgProps) => (
  <ContentLoader
    width={size}
    height="260"
    viewBox="0 0 160 290"
    fill="none"
    backgroundColor={color}
    foregroundColor={color}>
    <Rect width="160" height="290" rx="16" fill="#D9D9D9" />
    <Rect
      x="14.4262"
      y="20.7143"
      width="129.836"
      height="154.667"
      rx="8"
      fill="#C5C0C0"
    />
    <Rect
      x="98.3607"
      y="194.714"
      width="45.9016"
      height="20.7143"
      rx="6"
      fill="#C5C0C0"
    />
    <Rect
      x="14.4262"
      y="227.857"
      width="129.836"
      height="6.90476"
      rx="3"
      fill="#C5C0C0"
    />
    <Rect
      x="14.4262"
      y="238.905"
      width="129.836"
      height="6.90476"
      rx="3"
      fill="#C5C0C0"
    />
    <Rect
      x="14.4262"
      y="249.952"
      width="129.836"
      height="6.90476"
      rx="3"
      fill="#C5C0C0"
    />
    <Rect
      x="14.4262"
      y="261"
      width="129.836"
      height="6.90476"
      rx="3"
      fill="#C5C0C0"
    />
  </ContentLoader>
);
