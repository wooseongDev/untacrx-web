import { css } from '@emotion/react';
import { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { Button, Counter, IconLink, TopNavigation } from '../../components';
import { useCounter } from '../../hooks';
import { data } from '../ProductPage/ProductPage';

function ProductItemPage() {
  const [count, increase, decrease] = useCounter(1);
  const [isPayment, setIsPayment] = useState(false);

  const { id } = useParams<{ id: string }>();

  const { company, imageUrl, productName, price, discount } =
    data.productList.find((value) => value.id === Number(id)) || {};

  const onClickPayment = () => {
    setIsPayment(true);
  };

  return (
    <div css={pageStyle}>
      <TopNavigation />

      <div css={imageStyle}>
        <img src={imageUrl} alt={productName} />
      </div>

      <div css={bottomDrawerStyle}>
        <div css={infoStyle}>
          <p>{company}</p>
          <div css={discountStyle}>
            <h3>{productName}</h3>
            {discount && discount > 0 && <h4>{`${discount * 100}% 할인`}</h4>}
          </div>
        </div>

        <div css={countStyle}>
          <p className="price">{`${price?.toLocaleString()}원`}</p>
          <Counter count={count} increase={increase} decrease={decrease} />
        </div>

        <div css={linkGroupStyle}>
          <IconLink iconName="product" buttonType="gray" label="상세설명" />
          <IconLink iconName="droplet" buttonType="gray" label="복용법" />
          <IconLink iconName="message" buttonType="gray" label="고객리뷰" />
          <IconLink iconName="heart" buttonType="gray" label="선물하기" />
        </div>

        {isPayment && <Redirect to="/payment" />}
        <Button onClick={onClickPayment} disabled={count === 0}>
          바로구매
        </Button>
      </div>
    </div>
  );
}

const pageStyle = css`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 100%;
  min-height: 100%;
  background-color: #f5f7fa;
`;

const imageStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100vw;

  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
  }
`;

const bottomDrawerStyle = css`
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 1.5rem 1.5rem 0 0;
  z-index: 2;
`;

const infoStyle = css`
  margin-bottom: 1rem;

  p {
    margin-bottom: 0.25rem;
    color: #888e9a;
    font-size: 1rem;
  }
`;

const discountStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    color: #f51e6b;
  }
`;

const countStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;

  .price {
    color: #686777;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const linkGroupStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.75rem;
`;

export default ProductItemPage;
