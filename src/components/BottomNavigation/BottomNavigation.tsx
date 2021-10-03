import { css } from '@emotion/react';

import { IconLink } from '..';

interface BottomNavigationProps {
  active?: 'product' | 'bag' | 'user';
}

function BottomNavigation({ active = 'product' }: BottomNavigationProps) {
  const checkActive = (type: string) => (type === active ? 'primary' : 'none');

  return (
    <nav css={navStyle}>
      <IconLink iconName="product" buttonType={checkActive('product')} />
      <IconLink iconName="bag" buttonType={checkActive('bag')} />
      <IconLink iconName="user" buttonType={checkActive('user')} />
    </nav>
  );
}

const navStyle = css`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.25rem;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
`;

export default BottomNavigation;
