declare module 'channelService' {
  declare global {
    interface Window {
      ChannelIO: IChannelIO;
      ChannelIOInitialized: boolean | undefined;
    }

    interface IChannelIOBase {
      (...args: ChannelIOArgsType): void;

      c: (args: ChannelIOArgsType) => void;
      q: ChannelIOArgsType[];
    }

    type ChannelIOArgs = {
      boot: [
        option: IChannelIOBootOption,
        callback?: ChannelIOCallback['boot'],
      ];
      openChat: [chatId?: string | number, message?: string];
      track: [
        eventName: string,
        eventProperty: { [key: string]: string | number },
      ];
      onShowMessenger: [callback: ChannelIOCallback['onShowMessenger']];
      onHideMessenger: [callback: ChannelIOCallback['onHideMessenger']];
      onBadgeChanged: [callback: ChannelIOCallback['onBadgeChanged']];
      onChatCreated: [callback: ChannelIOCallback['onChatCreated']];
      onProfileChanged: [callback: ChannelIOCallback['onProfileChanged']];
      onUrlClicked: [callback: ChannelIOCallback['onUrlClicked']];
      updateUser: [
        option: IChannelIOUser,
        callback?: ChannelIOCallback['updateUser'],
      ];
      addTags: [tags: string[], callback?: ChannelIOCallback['addTags']];
      removeTags: [tags: string[], callback?: ChannelIOCallback['removeTags']];
      setPage: [page: string];
    };

    type ChannelIOCallback = {
      boot: (error: ChannelIOErrorType, user: IChannelIOUser) => void;
      onShowMessenger: () => void;
      onHideMessenger: () => void;
      onBadgeChanged: (unreadCount: number) => void;
      onChatCreated: () => void;
      onProfileChanged: (profile: IChannelIOProfileType) => void;
      onUrlClicked: (url: string) => void;
      updateUser: (error: ChannelIOErrorType, user: IChannelIOUser) => void;
      addTags: (error: ChannelIOErrorType, user: IChannelIOUser) => void;
      removeTags: (error: ChannelIOErrorType, user: IChannelIOUser) => void;
    };

    interface IChannelIO {
      /**
       * Boot up channel plugin(button) to make it ready to use.
       */
      (method: GetMethodType<'boot'>, ...args: ChannelIOArgs['boot']): void;

      /**
       * Shutdown channel plugin.
       */
      (method: GetMethodType<'shutdown'>): void;

      /**
       * Show plugin messenger.
       */
      (method: GetMethodType<'showMessenger'>): void;

      /**
       * Hide plugin messenger.
       */
      (method: GetMethodType<'hideMessenger'>): void;

      /**
       * Open a chat with the given chat id and message.
       * If the given chat id exists, appropriate chat will be opened.
       * If not, lounge will be opened. In this case, the message will be ignored.
       * If chat id is empty and message is given, new chat will be opened and the given message will be put in the input box.
       * In this case, if the support bot is enable, support bot will run.
       * If chat id and message is both empty, new chat will be opened.
       */
      (
        method: GetMethodType<'openChat'>,
        ...args: ChannelIOArgs['openChat']
      ): void;

      /**
       * Track an event.
       */
      (method: GetMethodType<'track'>, ...args: ChannelIOArgs['track']): void;

      /**
       * Register a callback function when the chat list is shown.
       * @NOTE `onShowMessenger` API won't work in all mobile environments.
       */
      (
        method: GetMethodType<'onShowMessenger'>,
        ...args: ChannelIOArgs['onShowMessenger']
      ): void;

      /**
       * Register a callback function when the chat list is hidden.
       * @NOTE `onHideMessenger` API won't work in all mobile environments.
       */
      (
        method: GetMethodType<'onHideMessenger'>,
        ...args: ChannelIOArgs['onHideMessenger']
      ): void;

      /**
       * Register a callback when unreadCount is changed.
       */
      (
        method: GetMethodType<'onBadgeChanged'>,
        ...args: ChannelIOArgs['onBadgeChanged']
      ): void;

      /**
       * Register a callback when a user success to create a chat.
       * @NOTE `onChatCreated` API won't work in all mobile environments.
       */
      (
        method: GetMethodType<'onChatCreated'>,
        ...args: ChannelIOArgs['onChatCreated']
      ): void;

      /**
       * Register a callback when a user success to change their profile in the settings page and chats.
       * profile is an object of the user's profile.
       * @NOTE `onProfileChanged` API won't work in all mobile environments.
       */
      (
        method: GetMethodType<'onProfileChanged'>,
        ...args: ChannelIOArgs['onProfileChanged']
      ): void;

      /**
       * Register a callback when a user clicks redirect images or buttons.
       * We pass the redirect url to a function.
       */
      (
        method: GetMethodType<'onUrlClicked'>,
        ...args: ChannelIOArgs['onUrlClicked']
      ): void;

      /**
       * Clear all callbacks registered.
       */
      (method: GetMethodType<'clearCallbacks'>): void;

      /**
       * Update user information.
       */
      (
        method: GetMethodType<'updateUser'>,
        ...args: ChannelIOArgs['updateUser']
      ): void;

      /**
       * Add tags.
       */
      (
        method: GetMethodType<'addTags'>,
        ...args: ChannelIOArgs['addTags']
      ): void;

      /**
       * Remove tags.
       */
      (
        method: GetMethodType<'removeTags'>,
        ...args: ChannelIOArgs['removeTags']
      ): void;

      /**
       * Set page to be used instead of [canonical url](https://developers.channel.io/docs/what-is-canonical-url).
       * setPage with null or undefined is different from resetPage. (that will send page data with null)
       */
      (
        method: GetMethodType<'setPage'>,
        ...args: ChannelIOArgs['setPage']
      ): void;

      /**
       * Reset page data customized by developer.
       * If you call resetPage, page data will fill with [canonical url](https://developers.channel.io/docs/what-is-canonical-url).
       */
      (method: GetMethodType<'resetPage'>): void;

      /**
       * Show channel button.
       */
      (method: GetMethodType<'showChannelButton'>): void;

      /**
       * Hide channel button.
       */
      (method: GetMethodType<'hideChannelButton'>): void;
    }
  }

  type ChannelIOErrorType = any;

  type ChannelIOArgsType = [method: ChannelIOMethodType, ...args: any[]];

  type GetMethodType<T extends ChannelIOMethodType> = T;

  type ChannelIOLanguageType = 'en' | 'ko' | 'ja';

  type ChannelIOMethodType =
    | 'boot'
    | 'shutdown'
    | 'showMessenger'
    | 'hideMessenger'
    | 'openChat'
    | 'track'
    | 'onShowMessenger'
    | 'onHideMessenger'
    | 'onBadgeChanged'
    | 'onChatCreated'
    | 'onProfileChanged'
    | 'onUrlClicked'
    | 'clearCallbacks'
    | 'updateUser'
    | 'addTags'
    | 'removeTags'
    | 'setPage'
    | 'resetPage'
    | 'showChannelButton'
    | 'hideChannelButton';

  interface IChannelIOProfileType {
    name?: string;
    mobileNumber?: string;
    email?: string;
    avatarUrl?: string;
    [key: string]: string;
  }

  interface IChannelIOUser {
    id?: string;
    channelId?: string;
    memberId?: string;
    veilId?: string;
    name?: string;
    profile?: IChannelIOProfileType;
    tags?: string[];
    alert: number;
    unread: number;
    blocked: boolean;
    unsubscribed: boolean;
    hasChat?: boolean;
    hasPushToken?: boolean;
    language: ChannelIOLanguageType;
    country: string;
    city: string;
    latitude: number;
    longitude: number;
    web: {
      device: string;
      os: string;
      osName: string;
      browser: string;
      browserName: string;
      sessionsCount: number;
      lastSeenAt: number;
    };
    sessionsCount: number;
    lastSeenAt: number;
    createdAt: number;
    updatedAt: number;
    version: number;
    managedKey?: number;
    member?: boolean;
    email?: string;
    avatarUrl: string;
    mobileNumber?: string;
    systemLanguage: string;
  }

  interface IChannelIOBootOption {
    /**
     * Channel plugin's key.
     */
    pluginKey: string;

    /**
     * Member (user) identification id used by your company.
     */
    memberId?: string;

    /**
     * Css selector for custom button.
     * Use it with `hideChannelButtonOnBoot` set to `true`.
     */
    customLauncherSelector?: string;

    /**
     * Flag to decide whether to hide the default button.
     */
    hideChannelButtonOnBoot?: boolean;

    /**
     * Custom plugin button's z-index.
     */
    zIndex?: number;

    /**
     * Set default language. Only (en, ko, ja) available.
     * It does not change for users who have already been created.
     */
    language?: ChannelIOLanguageType;

    /**
     * Whether to send default events (usually PageView).
     * Default value is `true`.
     */
    trackDefaultEvent?: boolean;

    /**
     * Flag to decide whether to track UTM source and referrer or not.
     * Default value is `true`.
     */
    trackUtmSource?: boolean;

    /**
     * Profile object contains user information.
     * If this property is present, it will be used when boot is get called.
     */
    profile?: IChannelIOProfileType;

    /**
     * Set chat ux.
     * Only (newTab, iframe) available.
     * Default value is `newTab`.
     * Do not recommend use `iframe` option.
     */
    mobileMessengerMode?: 'newTab' | 'iframe';

    /**
     * A value of whether or not to accept marketing.
     */
    unsubscribed?: boolean;

    /**
     * The hashed value of memberId using SHA256.
     */
    memberHash?: string;

    /**
     * Set whether to hide marketing and message notification pop-up.
     */
    hidePopup?: boolean;
  }
}
