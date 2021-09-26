class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    if (window.ChannelIO !== undefined) {
      return (window.console.error || window.console.log)(
        'ChannelIO script included twice.',
      );
    }

    const ch: IChannelIOBase = (...args) => {
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

  boot(callback?: ChannelIOCallback['boot']) {
    window.ChannelIO(
      'boot',
      {
        pluginKey: '1e18ac8e-d4df-4752-936f-57d89086e5ba',
        hideChannelButtonOnBoot: true,
        hidePopup: true,
        mobileMessengerMode: 'iframe',
      },
      callback,
    );
  }

  shutdown() {
    window.ChannelIO('shutdown');
  }
}

export default new ChannelService();
