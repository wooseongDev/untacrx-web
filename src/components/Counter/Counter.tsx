import { css } from '@emotion/react';

import { IconButton } from '..';

interface CounterProps {
  count: number;
  decrease: () => void;
  increase: () => void;
}

function Counter({ count, decrease, increase }: CounterProps) {
  return (
    <div css={wrapperStyle}>
      <IconButton
        className="box"
        iconName="minus"
        buttonType="counter"
        size={3}
        onClick={decrease}
      />

      <div className="box">
        <p>{count}</p>
      </div>

      <IconButton
        className="box"
        iconName="plus"
        buttonType="counter"
        size={3}
        onClick={increase}
      />
    </div>
  );
}

const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9rem;
  height: 3rem;
  background-color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid #dde4f0;
  border-radius: 0.75rem;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
  }
`;

export default Counter;
