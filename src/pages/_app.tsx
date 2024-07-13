import { AnimatePresence, motion } from 'framer-motion';
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.5,
        }}
      >
        <StoreProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </motion.div>
    </AnimatePresence>
  );
};

export default withAppEmotionCache(App);
