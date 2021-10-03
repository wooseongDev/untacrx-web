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
  max-width: 15rem;
  box-shadow: rgba(196, 201, 211, 0.6) 0px 48px 100px 0px;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const imageStyle = css`
  width: 100%;
  max-height: 12.5rem;
  min-height: 4rem;
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
