import { css } from '@emotion/react';
import React from 'react';

interface HorizontalScrollProps {
  children: React.ReactElement[];
}

function HorizontalScroll({ children }: HorizontalScrollProps) {
  const items = React.Children.map(children, (child) => {
    const { props } = child;
    console.log(child);
    return { ...child, props: { ...props, className: 'item' } };
  });

  return (
    <div css={wrapperStyle}>
      <div css={horizontalStyle}>{items}</div>
    </div>
  );
}

const wrapperStyle = css`
  min-width: 100%;
`;

const horizontalStyle = css`
  display: flex;
  padding: 1.5rem;
  min-width: 100%;

  .item:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;

export default HorizontalScroll;
