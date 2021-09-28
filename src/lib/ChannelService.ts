class ChannelService {
  constructor() {
    this.loadScript();
  }

  private loadScript() {
    if (window.ChannelIO !== undefined) {
      return (window.console.error || window.console.log)(
        'ChannelIO script included twice.',
      );
    }

    const ch: IChannelIO = (...args) => {
      ch.c(args);
    };

    ch.q = [];
    ch.c = (args) => {
      ch.q.push(args);
    };

    window.ChannelIO = ch;

    function l() {
      if (window.ChannelIOInitialized) return;
      window.ChannelIOInitialized = true;

      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';

      document.body.appendChild(s);
    }

    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  }

  /**
   * ChannelIO boot status.
   */
  isBoot = false;

  /**
   * Boot up channel plugin(button) to make it ready to use.
   */
  boot: IChannelIOAPI['boot'] = (option, callback) => {
    if (this.isBoot) return;

    window.ChannelIO('boot', option, (error, user) => {
      if (!error) this.isBoot = true;

      if (callback) {
        callback(error, user);
      }
    });
  };

  /**
   * Shutdown channel plugin.
   */
  shutdown: IChannelIOAPI['shutdown'] = () => {
    this.isBoot = false;
    window.ChannelIO('shutdown');
  };

  /**
   * Show plugin messenger.
   */
  showMessenger: IChannelIOAPI['showMessenger'] = () => {
    window.ChannelIO('showMessenger');
  };

  /**
   * Hide plugin messenger.
   */
  hideMessenger: IChannelIOAPI['hideMessenger'] = () => {
    window.ChannelIO('hideMessenger');
  };

  /**
   * Open a chat with the given chat id and message.
   * - If the given chat id exists, appropriate chat will be opened.
   * - If not, lounge will be opened. In this case, the message will be ignored.
   * - If chat id is empty and message is given, new chat will be opened and the given message will be put in the input box.
   * - In this case, if the support bot is enable, support bot will run.
   * - If chat id and message is both empty, new chat will be opened.
   */
  openChat: IChannelIOAPI['openChat'] = (chatId, message) => {
    window.ChannelIO('openChat', chatId, message);
  };

  /**
   * Track an event.
   */
  track: IChannelIOAPI['track'] = (eventName, eventProperty) => {
    window.ChannelIO('track', eventName, eventProperty);
  };

  /**
   * Register a callback function when the chat list is shown.
   * @note `onShowMessenger` API won't work in all mobile environments.
   */
  onShowMessenger: IChannelIOAPI['onShowMessenger'] = () => {
    window.ChannelIO('onShowMessenger');
  };

  /**
   * Register a callback function when the chat list is hidden.
   * @note `onHideMessenger` API won't work in all mobile environments.
   */
  onHideMessenger: IChannelIOAPI['onHideMessenger'] = () => {
    window.ChannelIO('onHideMessenger');
  };

  /**
   * Register a callback when `unreadCount` is changed.
   */
  onBadgeChanged: IChannelIOAPI['onBadgeChanged'] = (callback) => {
    window.ChannelIO('onBadgeChanged', callback);
  };

  /**
   * Register a callback when a user success to create a chat.
   * @note `onChatCreated` API won't work in all mobile environments.
   */
  onChatCreated: IChannelIOAPI['onChatCreated'] = (callback) => {
    window.ChannelIO('onChatCreated', callback);
  };

  /**
   * Register a callback when a user success to change their profile in the settings page and chats.
   * `profile` is an object of the user's profile.
   */
  onProfileChanged: IChannelIOAPI['onProfileChanged'] = (callback) => {
    window.ChannelIO('onProfileChanged', callback);
  };

  /**
   * Register a callback when a user clicks redirect images or buttons.
   * We pass the redirect url to a function.
   */
  onUrlClicked: IChannelIOAPI['onUrlClicked'] = (callback) => {
    window.ChannelIO('onUrlClicked', callback);
  };

  /**
   * Clear all callbacks registered.
   */
  clearCallbacks: IChannelIOAPI['clearCallbacks'] = () => {
    window.ChannelIO('clearCallbacks');
  };

  /**
   * Update user information.
   */
  updateUser: IChannelIOAPI['updateUser'] = (userData) => {
    window.ChannelIO('updateUser', userData);
  };

  /**
   * Add tags.
   * - Tags to be added. Duplicate values are maintained.
   * - Combined tag list cannot exceed 10.
   * - Null or empty list is not allowed.
   * - Always lower case.
   */
  addTags: IChannelIOAPI['addTags'] = (tags, callback) => {
    window.ChannelIO('addTags', tags, callback);
  };

  /**
   * Remove tags.
   * - Tags to be erased.
   * - If there is no match tag value, it is ignored.
   * - Null or empty list is not allowed.
   */
  removeTags: IChannelIOAPI['removeTags'] = (tags, callback) => {
    window.ChannelIO('removeTags', tags, callback);
  };

  /**
   * Set page to be used instead of [canonical url](https://developers.channel.io/docs/what-is-canonical-url).
   * - `setPage` with `null` or `undefined` is different from resetPage.
   * (that will send page data with null)
   */
  setPage: IChannelIOAPI['setPage'] = (page) => {
    window.ChannelIO('setPage', page);
  };

  /**
   * Reset page data customized by developer.
   * - If you call resetPage, page data will fill with [canonical url](https://developers.channel.io/docs/what-is-canonical-url) .
   */
  resetPage: IChannelIOAPI['resetPage'] = () => {
    window.ChannelIO('resetPage');
  };

  /**
   * Show channel button.
   */
  showChannelButton: IChannelIOAPI['showChannelButton'] = () => {
    window.ChannelIO('showChannelButton');
  };

  /**
   * Hide channel button.
   */
  hideChannelButton: IChannelIOAPI['hideChannelButton'] = () => {
    window.ChannelIO('hideChannelButton');
  };
}

export default new ChannelService();
