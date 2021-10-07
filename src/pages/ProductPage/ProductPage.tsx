import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import product_0 from '../../assets/images/product_0.png';
import product_1 from '../../assets/images/product_1.png';
import {
  BottomNavigation,
  CardItem,
  HorizontalScroll,
  Icon,
} from '../../components';
import { randomResult } from '../../lib/randomResult';

export const data = {
  pharmacist: randomResult(['ABC', 'DEF', 'GHI']),
  user: randomResult(['abc', 'def', 'ghi']),
  reasons: [
    '스트레스로 숙면을 취하기어렵다',
    '자고 일어나도 개운하다는 느낌을 받지 못한다',
    '새벽에 자주 뒤척인다',
  ],
  productList: [
    {
      id: 0,
      company: '케이세라',
      productName: '스트레스 나이트케어',
      description:
        '매일반복되는 스트레스로 인한 풀리지 않는 긴장 부드러운 이완으로 새로운 시작!',
      imageUrl: product_0,
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
      imageUrl: product_1,
      price: 29800,
      discount: 0.3,
      liked: false,
    },
  ],
};

function ProductPage() {
  const { pharmacist, user, reasons, productList } = data;

  return (
    <div css={{ paddingBottom: '5.5rem' }}>
      <div css={contentStyle}>
        <h1>{pharmacist} 약사님의 추천</h1>
        <h4>{user} 고객님을 위한 약사님의 추천이유</h4>
        <div>
          {reasons.map((reason) => (
            <div css={reasonStyle} key={`${reason[0]}${reason.length}`}>
              <Icon name="check" className="check" />
              <p key={reason[0]}>{reason}</p>
            </div>
          ))}
        </div>
      </div>

      <HorizontalScroll>
        {productList.map((item) => (
          <Link
            key={item.id}
            to={{
              state: 'product',
              pathname: `/product/${item.id}`,
            }}
          >
            <CardItem
              imgSrc={item.imageUrl}
              subtitle={item.company}
              title={item.productName}
              description={item.description}
            >
              <div css={style}>
                <Icon name="heart" />

                <div css={priceStyle}>
                  <h4 className="discount">{`${item.discount * 100}% 할인`}</h4>
                  <h4 className="price">{`${item.price.toLocaleString()}원`}</h4>
                </div>
              </div>
            </CardItem>
          </Link>
        ))}
      </HorizontalScroll>

      <BottomNavigation />
    </div>
  );
}

const style = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #888e9a;
  padding: 1.25rem;
  padding-top: 0;
`;

const contentStyle = css`
  padding: 2rem 1.5rem 0;

  h1 {
    margin-bottom: 1.25rem;
  }

  h4 {
    margin-bottom: 0.75rem;
  }
`;

const reasonStyle = css`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #aeb2bf;
  font-weight: 600;

  .check {
    color: #554af0;
    margin-right: 0.25rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const priceStyle = css`
  display: flex;
  align-items: center;

  .discount {
    margin-right: 0.5rem;
    color: #f51e6b;
  }

  .price {
    color: #686777;
  }
`;

export default ProductPage;
