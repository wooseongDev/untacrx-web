import { useEffect } from 'react';

import { useChannelServiceBootState } from '../../atom/channelServiceState';
import useChannelService from './useChannelService';

export default function useChannelServiceEffect() {
  const [isBoot, setIsBoot] = useChannelServiceBootState();
  const { boot } = useChannelService();

  useEffect(() => {
    if (!isBoot) {
      boot(() => {
        setIsBoot(true);
      });
    }
  }, [isBoot]);
}
