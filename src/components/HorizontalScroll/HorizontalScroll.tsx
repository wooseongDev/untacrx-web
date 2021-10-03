import { css } from '@emotion/react';
import React from 'react';

interface HorizontalScrollProps {
  children: React.ReactElement[];
}

function HorizontalScroll({ children }: HorizontalScrollProps) {
  const items = React.Children.map(children, (child) => ({
    ...child,
    props: { ...child.props, className: 'item' },
  }));

  const getWidth = () => {
    const { width } = window.screen;

    if (width < 240) {
      return width * 0.7;
    }
    return 240;
  };

  const calcWidth = () => {
    const { length } = items;
    const width = getWidth() * length;
    const gap = 24 * (length + 1);

    return width + gap;
  };

  return (
    <div css={wrapperStyle}>
      <div css={horizontalStyle} style={{ width: calcWidth() }}>
        {items}
      </div>
    </div>
  );
}

const wrapperStyle = css`
  min-width: 100%;
  overflow: auto;
  flex: 1;
  z-index: 5;

  /* % hide scrollbar % */
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const horizontalStyle = css`
  display: flex;
  padding: 1.5rem;
  padding-bottom: 2rem;
  min-width: 100%;

  .item:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;

export default HorizontalScroll;
