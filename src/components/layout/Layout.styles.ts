import { makeStyles } from '@/lib/helper';

import { colors } from '@/config/colors';

export default makeStyles({
  mainBackground: {
    width: '100%',
    height: '100dvh',
    position: 'absolute',
    top: 0,
  },
  masterAppContainer: {
    height: '100dvh',
    position: 'relative',
    display: 'grid',
    overflow: 'hidden',
    fontFamily: "'Barlow', sans-serif",
    color: colors.textBlack.main,
  },
  profileContainer: {
    alignSelf: 'end',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  playerProfileContainer: {
    background: colors.primary.main,
    border: `.5rem solid ${colors.border.light}`,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    '& .username': {
      fontFamily: 'Gameria',
      color: '#fff',
      WebkitTextStroke: `2px ${colors.textBlack.main}`,
    },
  },
  leaderboard: {
    background: colors.primary.main,
    border: `.5rem solid ${colors.border.light}`,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 'none',
    '& > svg': {
      fontSize: 36,
    },
  },
  profilePic: {},
  appContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    border: `1rem solid ${colors.border.main}`,
    borderRadius: 8,
    borderBottom: 'none',
  },
  appBackgroundContainer: {
    height: '100%',
  },
  appBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
  navbar: {
    background: colors.primary.main,
  },
  navItem: {
    border: `.3rem solid ${colors.border.light}`,
    background: colors.primary.main,
    fontSize: 34,
    '&.active': {},
  },
});
