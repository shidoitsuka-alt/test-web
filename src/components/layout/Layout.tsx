import * as React from 'react';

import { Root } from '@/components/layout/Root';

import useStyles from './Layout.styles';

import Leaderboard from '~/images/icons/leaderboard.svg';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { classes } = useStyles();

  return (
    <div className="appContainer">
      <Root>
        <div>
          <img className={classes.mainBackground} src="/images/root-bg.png" alt="Forest with sky" />
          <main className={classes.masterAppContainer}>
            <div className={classes.profileContainer}>
              <div className={`${classes.playerProfileContainer} px-4 pt-2`}>
                <img
                  className={`${classes.profilePic} h-12 w-12 rounded-full`}
                  src="https://picsum.photos/200"
                  alt="Lorem"
                />
                <div>
                  <h6 className="username text-lg">Richard Angkasa</h6>
                  <div>progress</div>
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
                <main className={classes.content}>{children}</main>
              </div>
            </div>
          </main>
        </div>
      </Root>
    </div>
  );
};

export default Layout;
