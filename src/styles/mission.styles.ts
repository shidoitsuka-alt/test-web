import { makeStyles } from '@/lib/helper';

import { colors } from '@/config/colors';

export default makeStyles({
  container: {},
  pageTitle: {
    width: '100%',
    backgroundColor: colors.primary.main,
    border: `.35rem solid ${colors.border.light}`,
    borderRadius: 8,
    color: colors.textWhite.main,
    fontSize: '2rem',
    textAlign: 'center',
    fontFamily: 'Gameria',
    WebkitTextStroke: `1.5px ${colors.textBlack.main}`,
  },
  upgradeCardContainer: {
    backgroundColor: colors.primary.main,
    fontWeight: 'lighter',
    border: `.35rem solid ${colors.border.light}`,
    borderRadius: 8,
    '& .image': {
      fontSize: '2rem',
    },
  },
  cardContainerProfit: {
    background: colors.border.main,
    color: colors.textWhite.main,
    fontWeight: 500,
    fontSize: 12,
  },
  categoryBg: {
    background: colors.border.light,
  },
  upgradeDetail: {
    borderColor: colors.border.light,
    borderTop: '1px solid',
  },
  upgradeFilterContainer: {
    background: colors.primary.main,
    border: `.35rem solid ${colors.border.light}`,
    borderRadius: 8,
    padding: '6px 12px',
    color: colors.textBlack.main,
    fontSize: 14,
  },
  activeCategory: {
    color: colors.textWhite.main,
  },
});
