import { useEffect } from 'react';

import useChannelService from '../../lib/ChannelService/useChannelService';

function MatchingPage() {
  const { showMessenger } = useChannelService();

  useEffect(() => {
    showMessenger();
  }, []);

  return (
    <div>
      <h3>곧 채널톡이 열립니다.</h3>
      <button type="button" onClick={showMessenger}>
        open channel
      </button>
    </div>
  );
}

export default MatchingPage;
