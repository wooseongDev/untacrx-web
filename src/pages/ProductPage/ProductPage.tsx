import { css } from '@emotion/react';

import { BottomNavigation, CardItem, Icon } from '../../components';

const data = {
  pharmacist: 'ABC',
  user: 'DEF',
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
      imageUrl: 'https://source.unsplash.com/random/240x200',
      price: 59800,
      discount: 0.2,
      liked: false,
    },
    // {
    //   id: 1,
    //   company: '휴롬사이언스',
    //   productName: '리얼슬립',
    //   description:
    //     '자연유래 100% 제주 감태추출물을 주원료로 한 국내최초 식약처 개별인정 감태추출물!',
    //   imageUrl: 'https://source.unsplash.com/random/240x200',
    //   price: 29800,
    //   discount: 0.3,
    //   liked: false,
    // },
  ],
};

function ProductPage() {
  const { pharmacist, user, reasons, productList } = data;
  return (
    <div>
      <h2>{pharmacist} 약사님의 추천</h2>
      <h3>{user} 고객님을 위한 약사님의 추천이유</h3>
      <div>
        {reasons.map((reason) => (
          <p key={reason[0]}>{reason}</p>
        ))}
      </div>

      <div>
        {productList.map((item) => (
          <CardItem
            key={item.id}
            imgSrc={item.imageUrl}
            subtitle={item.company}
            title={item.productName}
            description={item.description}
          >
            <div css={style}>
              <Icon name="heart" />
            </div>
          </CardItem>
        ))}
      </div>
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

export default ProductPage;
