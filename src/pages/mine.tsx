import useStyle from '@/styles/mine.styles';

import Coin from '~/svg/coin.svg';
import Dirt from '~/svg/dirt.svg';

export default function MinePage() {
  const { classes } = useStyle();

  return (
    <section className={`p-4 ${classes.container}`}>
      <div className="grid grid-cols-2 gap-4">
        <h1 className={`col-span-2 py-2 ${classes.pageTitle}`}>upgrade your tree</h1>
        <div className={`col-span-2 ${classes.upgradeFilterContainer}`}>
          <h6>test</h6>
          <h6>test</h6>
          <h6>test</h6>
        </div>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={classes.upgradeCardContainer}>
              <div className="flex items-center gap-4">
                <div className="image">
                  <Dirt />
                </div>
                <div>
                  <h4>Upgrade</h4>
                  <p className="font-light">Plant your trees!</p>
                </div>
              </div>
              <div
                className={`mt-2 flex items-center justify-between pt-2 ${classes.upgradeDetail}`}
              >
                <div>
                  <span>Lv. 1</span>
                </div>
                <div className="flex items-center">
                  <div className="image" style={{ fontSize: 16 }}>
                    <Coin />
                  </div>
                  <h6>23,456</h6>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
