import { atom, useRecoilState } from 'recoil';

const bootState = atom({
  key: 'channelService/boot',
  default: false,
});

export const useChannelServiceBootState = () => {
  const [isBoot, setIsBoot] = useRecoilState(bootState);
  return [isBoot, setIsBoot] as const;
};
