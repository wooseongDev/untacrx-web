import { useEffect } from 'react';

import ChannelService from '../lib/ChannelService';

export default function useChannelServiceEffect() {
  useEffect(() => {
    ChannelService.boot(
      { pluginKey: '1e18ac8e-d4df-4752-936f-57d89086e5ba' },
      (error, user) => {
        console.log('error: ', error);
        console.log('user: ', JSON.stringify(user, null, 2));
      },
    );
  }, []);
}

/*
boot callback user
{
  "id": "615144072ce09d7e9473",
  "channelId": "63090",
  "memberId": "2a14c903-9873-4b28-8fd7-a9643aef54b8",
  "veilId": "2a14c903-9873-4b28-8fd7-a9643aef54b8",
  "name": "피자 758",
  "alert": 0,
  "unread": 0,
  "blocked": false,
  "unsubscribed": false,
  "language": "ko",
  "country": "KR",
  "city": "서울시 서초구",
  "latitude": 37.47843933105469,
  "longitude": 126.99999237060547,
  "web": {
    "device": "Apple Macintosh",
    "os": "Mac OS X 10.15.7",
    "osName": "Mac OS X",
    "browser": "Chrome 93.0.4577.82",
    "browserName": "Chrome",
    "sessionsCount": 4,
    "lastSeenAt": 1632819892839
  },
  "sessionsCount": 4,
  "lastSeenAt": 1632819892839,
  "createdAt": 1632715783183,
  "updatedAt": 1632819892839,
  "version": 4,
  "avatarUrl": "https://cf.channel.io/avatar/emoji/pizza.80d8fb.png",
  "systemLanguage": "ko"
}
*/
