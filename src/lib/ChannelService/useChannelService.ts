import { useEffect } from 'react';

import ChannelService from './ChannelService';

export default function useChannelService() {
  const showMessenger = () => {
    window.ChannelIO('showMessenger');
  };

  const hideMessenger = () => {
    window.ChannelIO('hideMessenger');
  };

  const openChat = (...args: ChannelIOArgs['openChat']) => {
    window.ChannelIO('openChat', ...args);
  };

  const track = (...args: ChannelIOArgs['track']) => {
    window.ChannelIO('track', ...args);
  };

  const onShowMessenger = (...args: ChannelIOArgs['onShowMessenger']) => {
    window.ChannelIO('onShowMessenger', ...args);
  };

  const onHideMessenger = (...args: ChannelIOArgs['onHideMessenger']) => {
    window.ChannelIO('onHideMessenger', ...args);
  };

  const onBadgeChanged = (...args: ChannelIOArgs['onBadgeChanged']) => {
    window.ChannelIO('onBadgeChanged', ...args);
  };

  const onChatCreated = (...args: ChannelIOArgs['onChatCreated']) => {
    window.ChannelIO('onChatCreated', ...args);
  };

  const onProfileChanged = (...args: ChannelIOArgs['onProfileChanged']) => {
    window.ChannelIO('onProfileChanged', ...args);
  };

  const onUrlClicked = (...args: ChannelIOArgs['onUrlClicked']) => {
    window.ChannelIO('onUrlClicked', ...args);
  };

  const clearCallbacks = () => {
    window.ChannelIO('clearCallbacks');
  };

  const updateUser = (...args: ChannelIOArgs['updateUser']) => {
    window.ChannelIO('updateUser', ...args);
  };

  const addTags = (...args: ChannelIOArgs['addTags']) => {
    window.ChannelIO('addTags', ...args);
  };

  const removeTags = (...args: ChannelIOArgs['removeTags']) => {
    window.ChannelIO('removeTags', ...args);
  };

  const setPage = (...args: ChannelIOArgs['setPage']) => {
    window.ChannelIO('setPage', ...args);
  };

  const resetPage = () => {
    window.ChannelIO('resetPage');
  };

  const showChannelButton = () => {
    window.ChannelIO('showChannelButton');
  };

  const hideChannelButton = () => {
    window.ChannelIO('hideChannelButton');
  };

  return {
    boot: ChannelService.boot,
    shutdown: ChannelService.shutdown,
    showMessenger,
    hideMessenger,
    openChat,
    track,
    onShowMessenger,
    onHideMessenger,
    onBadgeChanged,
    onChatCreated,
    onProfileChanged,
    onUrlClicked,
    clearCallbacks,
    updateUser,
    addTags,
    removeTags,
    setPage,
    resetPage,
    showChannelButton,
    hideChannelButton,
  };
}
