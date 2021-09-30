import { css } from '@emotion/react';

import { Icon } from '..';
import type { IconType } from '../Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconType;
  size?: number;
  buttonType?: keyof typeof buttonTypeObj;
  label?: string;
  className?: string;
}

function IconButton({
  iconName,
  size = 3.5,
  buttonType = 'none',
  className,
  label,
  ...props
}: ButtonProps) {
  return (
    <div css={[className, wrapperStyle]}>
      <button
        css={[buttonStyle(size), buttonTypeObj[buttonType]]}
        type="button"
        {...props}
      >
        <Icon name={iconName} />
      </button>

      {label && <p css={labelStyle}>{label}</p>}
    </div>
  );
}

const buttonTypeObj = {
  primary: css`
    background-color: #2c62ec;
    padding: 1rem;
    color: #ffffff;
  `,
  gray: css`
    background-color: #f5f7fa;
    padding: 1rem;
    color: #24243f;
  `,
  none: css`
    background-color: transparent;
    padding: 1rem;
    color: #5a5a75;
  `,
  counter: css`
    background-color: transparent;
    padding: 0.75rem;
    color: #2c62ec;
  `,
};

const wrapperStyle = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const labelStyle = css`
  margin-top: 0.5rem;
  color: #24243f;
  font-size: 13px;
  font-weight: 400;
`;

const buttonStyle = (size: number) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 3.5rem;
  max-height: 3.5rem;
  width: ${size}rem;
  height: ${size}rem;
  border-radius: 1rem;
`;

export default IconButton;
