import { useEffect } from 'react';

import ChannelService from '../../lib/ChannelService';

const data = {
  issue: '불면',
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
  useEffect(() => {
    ChannelService.showMessenger();
  }, []);

  const onClickUpdate = () => {
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

  return (
    <div>
      <h3>곧 채널톡이 열립니다.</h3>

      <button type="button" onClick={ChannelService.showMessenger}>
        open channel
      </button>

      <button type="button" onClick={onClickUpdate}>
        update user
      </button>
    </div>
  );
}

export default MatchingPage;
