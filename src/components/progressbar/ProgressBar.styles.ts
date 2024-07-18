import { makeStyles } from '@/lib/helper';

import { colors } from '@/config/colors';

export default makeStyles({
  progressBarContainer: {
    width: '100%',
    backgroundColor: '#004643',
    padding: 3,
    overflow: 'hidden',
    '& .progress-bar': {
      height: '.7rem',
      backgroundColor: colors.primary.main,
      textAlign: 'center',
      lineHeight: '30px',
      transition: 'width .5s',
    },
  },
});
