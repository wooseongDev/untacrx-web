import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';

import { Button, Counter, IconLink, TopNavigation } from '../../components';
import useCount from '../../hooks/useCounter';

const productList = [
  {
    id: 0,
    company: '케이세라',
    productName: '스트레스 나이트케어',
    description:
      '매일반복되는 스트레스로 인한 풀리지 않는 긴장 부드러운 이완으로 새로운 시작!',
    imageUrl: 'https://source.unsplash.com/random/240x200',
    price: 59800,
    discount: 0.2,
    liked: false,
  },
  {
    id: 1,
    company: '휴롬사이언스',
    productName: '리얼슬립',
    description:
      '자연유래 100% 제주 감태추출물을 주원료로 한 국내최초 식약처 개별인정 감태추출물!',
    imageUrl: 'https://source.unsplash.com/random/240x200',
    price: 29800,
    discount: 0.3,
    liked: false,
  },
];

function ProductItemPage() {
  const [count, increase, decrease] = useCount(1);
  const { id } = useParams<{ id: string }>();

  const { company, productName, price, discount } =
    productList.find((value) => value.id === Number(id)) || {};

  return (
    <div css={pageStyle}>
      <TopNavigation />

      <div css={imageStyle}>
        <img
          src="http://pngimg.com/uploads/dog/dog_png2399.png"
          alt={productName}
        />
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

        <Button disabled={count === 0}>바로구매</Button>
      </div>
    </div>
  );
}

const pageStyle = css`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  background-color: #f5f7fa;
`;

const imageStyle = css`
  flex: 1;
  width: 100vw;
  height: 100vw;

  img {
    width: 100%;
    height: 100%;
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
