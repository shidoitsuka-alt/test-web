import { makeStyles } from '@/lib/helper';

import { colors } from '@/config/colors';

export default makeStyles({
  toastContainer: {
    background: colors.primary.main,
    borderLeft: '1em solid',
  },
  toastMessage: {
    fontWeight: 700,
  },
});
