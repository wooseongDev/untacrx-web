import { useEffect } from 'react';

import ChannelService from '../lib/ChannelService';

export default function useChannelServiceEffect() {
  useEffect(() => {
    ChannelService.boot({
      pluginKey: process.env.REACT_APP_CHANNEL_IO_PLUGIN_KEY || '',
      hideChannelButtonOnBoot: true,
      hidePopup: true,
      mobileMessengerMode: 'iframe',
      zIndex: 9999,
    });
  }, []);
}
