import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { IconButton, IconLink } from '..';

interface TopNavigationProps {
  badgeCount?: number;
}

function TopNavigation({ badgeCount = 1 }: TopNavigationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handlePrevClick = () => {
    if (history.location.state === 'product') {
      return history.goBack();
    }
    return history.replace('/product');
  };

  const scrollEvent = () => {
    if (!ref.current) return;

    const element = ref.current;
    const hasClass = element.classList.contains('bg');
    const { height } = element.getBoundingClientRect();

    if (window.scrollY > height / 2 && !hasClass) {
      element.classList.add('bg');
    }

    if (window.scrollY <= height / 2 && hasClass) {
      element.classList.remove('bg');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <div css={topNavStyle} ref={ref}>
      <IconButton iconName="prev" onClick={handlePrevClick} />

      <div css={rightStyle}>
        {badgeCount > 0 && <div className="badge">{badgeCount}</div>}
        <IconLink iconName="bag" />
      </div>
    </div>
  );
}

const topNavStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  z-index: 10;

  transition: all 0.15s ease-in-out;

  &.bg {
    background-color: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const rightStyle = css`
  display: flex;
  align-items: center;

  .badge {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f62c74;
    width: 1.25rem;
    height: 1.25rem;
    color: #ffffff;
    font-size: 0.75rem;
    border-radius: 0.5rem;
  }
`;

export default TopNavigation;
