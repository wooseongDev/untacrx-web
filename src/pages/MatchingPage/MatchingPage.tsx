import { css } from '@emotion/react';
import { useEffect } from 'react';

import ChannelService from '../../lib/ChannelService';
import { randomResult } from '../../lib/randomResult';

const issues = ['불면', '탈모', '다이어트', '피부미용', '기타'];

const data = {
  issue: randomResult(issues),
  question1: {
    question: '카페인은 하루에 몇잔드세요?',
    answer: '2 잔',
  },
  question2: {
    question: '취침시간이 어떻게 되세요?',
    answer: '8시간',
  },
  gender: '남성',
  age: '24세',
  name: `test_${new Date().getTime()}`,
  phoneNumber: '01012345678',
};

function MatchingPage() {
  const updateUser = () => {
    ChannelService.updateUser({
      tags: [data.issue],
      profile: {
        name: data.name,
        mobileNumber: data.phoneNumber,
        age: data.age,
        gender: data.gender,
        description: JSON.stringify(
          {
            [data.question1.question]: data.question1.answer,
            [data.question2.question]: data.question2.answer,
          },
          null,
          2,
        ),
      },
    });
  };

  useEffect(() => {
    updateUser();
    // ChannelService.showMessenger();
    ChannelService.openChat(undefined, '');
  }, []);

  return <div css={backStyle} />;
}

const backStyle = css`
  width: 100%;
  height: 100%;
  background-color: #3082b5;
`;

export default MatchingPage;
