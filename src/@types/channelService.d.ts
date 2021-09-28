declare module 'channelService' {
  declare global {
    interface Window {
      ChannelIO: IChannelIO;
      ChannelIOInitialized: boolean | undefined;
    }

    interface IChannelIO<T extends ChannelIOMethod = ChannelIOMethod> {
      (...args: ChannelIOArgs<T>): void;

      c: (args: ChannelIOArgs<T>) => void;
      q: ChannelIOArgs[];
    }

    interface IChannelIOAPI {
      boot: (
        option: IChannelIOBootOption,
        callback?: (error: ChannelIOAPIError, user: ChannelIOAPIUser) => void,
      ) => void;

      shutdown: () => void;

      showMessenger: () => void;

      hideMessenger: () => void;

      openChat: (chatId?: string | number, message?: string) => void;

      track: (
        eventName: string,
        eventProperty?: { [key: string]: string | number },
      ) => void;

      onShowMessenger: (callback: () => void) => void;

      onHideMessenger: (callback: () => void) => void;

      onBadgeChanged: (callback: (unreadCount: number) => void) => void;

      onChatCreated: (callback: () => void) => void;

      onProfileChanged: (
        callback: (profile: IChannelIOUserProfile) => void,
      ) => void;

      onUrlClicked: (callback: (url: string) => void) => void;

      clearCallbacks: () => void;

      updateUser: (userData: IChannelIOUserUpdate) => void;

      addTags: (
        tags: string[],
        callback?: (error: ChannelIOAPIError, user: ChannelIOAPIUser) => void,
      ) => void;

      removeTags: (
        tags: string[],
        callback?: (error: ChannelIOAPIError, user: ChannelIOAPIUser) => void,
      ) => void;

      setPage: (page: string) => void;

      resetPage: () => void;

      showChannelButton: () => void;

      hideChannelButton: () => void;
    }
  }

  type ChannelIOAPIError = any;

  type ChannelIOAPIUser = any;

  type ChannelIOLanguage = 'en' | 'ko' | 'ja';

  type ChannelIOMethod = keyof IChannelIOAPI;

  type ChannelIOArgs<T extends IChannelIOAPI> = [
    T,
    ...Parameters<IChannelIOAPI[T]>
  ];

  interface IChannelIOUser {
    /**
     * A user id used inside channel.
     */
    id?: string;

    /**
     * A user name.
     */
    name?: string;

    /**
     * Member (user) identification id used by your company.
     */
    memberId?: string;

    /**
     * User's mobile number.
     */
    mobileNumber?: string;

    /**
     * An object contains key/value information.
     */
    profile?: IChannelIOUserProfile;
  }

  interface IChannelIOUserUpdate {
    /**
     * Set user's language.
     * When language is 'ko' or 'ja', interface is change to these languages.
     * Else case, interface language is set to english.
     * When set invalid language, user's language field is set to null.
     */
    language?: ChannelIOLanguage;

    /**
     * Tags to overwrite.
     * Max 10 tags are allowed.
     * Set `null` to reset.
     * Empty list is not allowed.
     */
    tags?: string[];

    /**
     * Profile map to overwrite.
     * Set `null` to reset.
     * Set `null` for profile value to reset profile value.
     * Empty map is not allowed.
     * Always lower case.
     */
    profile?: IChannelIOUserProfile;

    /**
     * Map of profile to be added if there is no each profile values.
     */
    profileOnce?: IChannelIOUserProfile;

    /**
     * Terminates the user's marketing subscription.
     * If the existing value is true, the value of true is maintained even if you change it to the value of false.
     */
    unsubscribed?: boolean;
  }

  interface IChannelIOUserProfile {
    /**
     * A user name.
     */
    name?: string;

    /**
     * A user's mobile number.
     */
    mobileNumber?: string;

    /**
     * A user's email.
     */
    email?: string;

    /**
     * A user's avatar url.
     */
    avatarUrl?: string;

    /**
     * Custom value
     */
    [key: string]: string;
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
    language?: ChannelIOLanguage;

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
    profile?: IChannelIOUserProfile;

    /**
     * Set chat ux.
     * Only (newTab, iframe) available.
     * Default value is `newTab`.
     * @note Do not recommend use `iframe` option.
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
