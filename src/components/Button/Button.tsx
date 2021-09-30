import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children = '버튼', ...props }: ButtonProps) {
  return (
    <button css={buttonStyle} type="button" {...props}>
      {children}
    </button>
  );
}

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c62ec;
  padding: 0.75rem 1.25rem;
  width: 100%;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 3rem;
`;

export default Button;
