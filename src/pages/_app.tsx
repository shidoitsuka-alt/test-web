import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next/pagesDir';

import '@/styles/globals.scss';

import StoreProvider from '@/lib/storeProvider';

import Layout from '@/components/layout/Layout';

// import '@/styles/colors.scss';
const { augmentDocumentWithEmotionCache, withAppEmotionCache } = createEmotionSsrAdvancedApproach({
  key: 'css',
});
export { augmentDocumentWithEmotionCache };

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const noLayoutPages = ['/landing'];
  const isNoLayoutPage = noLayoutPages.includes(router.pathname);
  return (
    <StoreProvider>
      {isNoLayoutPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </StoreProvider>
  );
};

export default withAppEmotionCache(App);
