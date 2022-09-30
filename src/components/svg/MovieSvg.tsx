// import Svg, {Rect} from 'react-native-svg';
import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';
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

export const MovieCastAndCrewSvg = ({
  size = 500,
  color = colors.primary,
}: SvgProps) => (
  <ContentLoader
    width={size}
    height={100}
    viewBox="0 0 500 100"
    backgroundColor={color}>
    <Circle cx="46" cy="38" r="38" />
    <Rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
    <Rect x="547" y="222" rx="5" ry="5" width="220" height="10" />
    <Rect x="82" y="150" rx="5" ry="5" width="220" height="10" />
    <Circle cx="137" cy="38" r="38" />
    <Rect x="124" y="83" rx="5" ry="5" width="25" height="10" />
    <Circle cx="228" cy="38" r="38" />
    <Rect x="215" y="83" rx="5" ry="5" width="25" height="10" />
    <Circle cx="320" cy="38" r="38" />
    <Rect x="307" y="83" rx="5" ry="5" width="25" height="10" />
    <Circle cx="410" cy="38" r="38" />
    <Rect x="398" y="83" rx="5" ry="5" width="25" height="10" />
  </ContentLoader>
);
