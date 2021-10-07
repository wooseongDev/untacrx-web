import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components';
import delivery from './delivery.svg';

function PaymentPage() {
  const history = useHistory();

  const onClickPrev = () => history.replace('/product');

  return (
    <div css={wrapperStyle}>
      <div css={boxStyle}>
        <div css={imgStyle}>
          <img src={delivery} alt="delivery" />
        </div>

        <h2>성공적으로</h2>
        <h2>구매를 완료했습니다!</h2>
        <p>UntacRx가 금방 배송해드릴게요!</p>
      </div>

      <Button onClick={onClickPrev}>돌아가기</Button>
    </div>
  );
}

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 1.5rem;
  width: 100%;
  min-height: 100%;

  p {
    margin-top: 1rem;
  }
`;

const boxStyle = css`
  flex: 1;
`;

const imgStyle = css`
  margin-bottom: 2.5rem;
  width: 100%;

  img {
    width: 100%;
  }
`;

export default PaymentPage;
