import { css } from '@emotion/react';
import React from 'react';

interface CardItemProps {
  imgSrc: string;
  subtitle?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

function CardItem({
  imgSrc,
  subtitle,
  title,
  description,
  children,
  className,
}: CardItemProps) {
  return (
    <div css={wrapperStyle} className={className}>
      <div css={imageStyle}>
        <img src={imgSrc} alt={title} />
      </div>

      <div css={contentStyle}>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>

      {children && <div>{children}</div>}
    </div>
  );
}

const wrapperStyle = css`
  position: relative;
  width: 70vw;
  max-width: 15rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const imageStyle = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-color: #e5e5e5;
  overflow: hidden;
`;

const contentStyle = css`
  padding: 1.25rem;

  .subtitle {
    margin-bottom: 0.25rem;
    color: #888e9a;
    font-size: 1rem;
  }

  .title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .description {
    color: #888e9a;
    font-size: 1rem;
  }
`;

export default CardItem;
