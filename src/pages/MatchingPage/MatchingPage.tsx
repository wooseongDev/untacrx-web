import { useEffect } from 'react';

import ChannelService from '../../lib/ChannelService';

function MatchingPage() {
  useEffect(() => {
    ChannelService.showMessenger();
  }, []);

  return (
    <div>
      <h3>곧 채널톡이 열립니다.</h3>
      <button type="button" onClick={ChannelService.showMessenger}>
        open channel
      </button>
    </div>
  );
}

export default MatchingPage;
