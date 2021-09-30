import { css } from '@emotion/react';

import Logo from '../../assets/images/logo.png';

function MainPage() {
  return (
    <div css={wrapperStyle}>
      <img src={Logo} alt="untacrx" />

      <h3>안녕하세요.</h3>
      <h3>비대면 복약상담서비스</h3>
      <h2>UntacRx 입니다.</h2>
    </div>
  );
}

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h2 {
    color: #0075e1;
  }

  h3 {
    color: #888e9a;
  }

  img {
    width: 5rem;
    margin-bottom: 2rem;
  }
`;

export default MainPage;
