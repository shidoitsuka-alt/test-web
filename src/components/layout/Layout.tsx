import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Root } from '@/components/layout/Root';
import ProgressBar from '@/components/progressbar/ProgressBar';
import Toast from '@/components/toast/Toast';

import useStyles from './Layout.styles';

import Leaderboard from '~/images/icons/leaderboard.svg';
import Flappy from '~/svg/flappy.svg';
import Frens from '~/svg/frens.svg';
import Hoe from '~/svg/hoe.svg';
import Mission from '~/svg/mission.svg';
import Plant from '~/svg/plant.svg';

interface MenuItem {
  path: string;
  title: string;
  icon: any;
}

const MenuItems: MenuItem[] = [
  {
    path: '/',
    title: 'Play',
    icon: Flappy,
  },
  {
    path: '/mine',
    title: 'Mine',
    icon: Hoe,
  },
  {
    path: '/plant',
    title: 'Plants',
    icon: Plant,
  },
  {
    path: '/mission',
    title: 'Missions',
    icon: Mission,
  },
  {
    path: '/friend',
    title: 'Friends',
    icon: Frens,
  },
];

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { classes } = useStyles();
  const [levelProgress, setLevelProgress] = React.useState(0);
  const router = useRouter();

  return (
    <div className="appContainer">
      <Root>
        <div>
          <Toast />
          <img className={classes.mainBackground} src="/images/root-bg.png" alt="Forest with sky" />
          <main className={classes.masterAppContainer}>
            <div className={classes.profileContainer}>
              <div className={`${classes.playerProfileContainer} px-4 pb-1 pt-2`}>
                <img
                  className={`${classes.profilePic} h-12 w-12 rounded-full`}
                  src="https://picsum.photos/200"
                  alt="Lorem"
                />
                <div>
                  <h6 className="username text-lg">Richard Angkasa</h6>
                  <div className="my-1" onClick={() => setLevelProgress(70)}>
                    <ProgressBar progress={levelProgress} />
                  </div>
                  <div className="flex items-center justify-between">
                    <h6>Bronze</h6>
                    <h6>12 mil</h6>
                  </div>
                </div>
              </div>
              <div className={`${classes.leaderboard} flex items-center justify-center px-4`}>
                <Leaderboard />
              </div>
            </div>
            <div>
              <div className={classes.appContainer}>
                <div className={classes.appBackgroundContainer}>
                  <img
                    className={classes.appBackground}
                    src="/images/bg.png"
                    alt="Forest with sky"
                  />
                </div>
                <main className={`${classes.content} pb-28`}>
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
                      {children}
                    </motion.div>
                  </AnimatePresence>
                </main>
              </div>
            </div>
            <nav className={`${classes.navbar} absolute bottom-0 w-full`}>
              <div className="relative py-6">
                <div className="absolute bottom-6 grid w-full grid-cols-5 place-items-center">
                  {MenuItems.map((item) => (
                    <Link
                      href={item.path}
                      className={`${classes.navItem} ${
                        router.pathname === item.path ? 'active origin-bottom scale-125' : ''
                      } rounded-lg p-2 shadow-lg`}
                      key={item.path}
                    >
                      <item.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </main>
        </div>
      </Root>
    </div>
  );
};

export default Layout;
