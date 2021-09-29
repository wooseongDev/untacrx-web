import { useEffect } from 'react';

import ChannelService from '../lib/ChannelService';

export default function useChannelServiceEffect() {
  useEffect(() => {
    ChannelService.boot({
      pluginKey: '1e18ac8e-d4df-4752-936f-57d89086e5ba',
      hideChannelButtonOnBoot: true,
      hidePopup: true,
      mobileMessengerMode: 'iframe',
      zIndex: 9999,
    });
  }, []);
}
