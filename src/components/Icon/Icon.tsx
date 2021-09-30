import React from 'react';

import * as svg from './svg';

export type IconType = keyof typeof svg;

interface IconProps {
  name: IconType;
  className?: string;
  style?: React.CSSProperties;
}

function Icon({ name, className, style }: IconProps) {
  return React.createElement(svg[name], {
    className,
    style,
  });
}

export default Icon;
