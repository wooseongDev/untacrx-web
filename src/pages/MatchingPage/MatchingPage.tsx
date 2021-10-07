import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useQuerystring } from '../../hooks';
import ChannelService from '../../lib/ChannelService';

function MatchingPage() {
  const { search } = useLocation();
  const { querystring } = useQuerystring({ search });

  const {
    issue: category,
    name,
    gender,
    age,
    phoneNumber: mobileNumber,
    ...rest
  } = querystring;

  const updateUser = () => {
    ChannelService.updateUser({
      profile: {
        category,
        name,
        mobileNumber,
        age,
        gender,
        description: JSON.stringify(rest, null, 2),
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
