import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Search',
      action: 'post_redirect',
    },
    {
      label: "I'm feeling lucky",
      action: 'post_redirect',
    }
  ],
  image: `${NEXT_PUBLIC_URL}/public.png`,
  input: {
    text: 'enter search term'
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'google frame',
  description: 'LFGoogle',
  openGraph: {
    title: 'google search',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/public.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>emo.eth</h1>
    </>
  );
}
