import { motion } from 'framer-motion';
import { useState } from 'react';

import { formatMoney } from '@/lib/helper';

import useStyle from '@/styles/mine.styles';

import Coin from '~/svg/coin.svg';
import Dirt from '~/svg/dirt.svg';

interface MiningUpgrades {
  name: string;
  id: number;
  items: {
    name: string;
    description: string;
    image: string;
    cost: number;
    level: number;
    pph: number;
  }[];
}

export default function MinePage() {
  const { classes } = useStyle();
  const [activeCategory, setActiveCategory] = useState(0);
  const items = [
    {
      name: 'Tree',
      id: 0,
      items: [
        {
          name: 'Feed',
          description: 'Feed your plant',
          image: '',
          cost: 1221312,
          level: 0,
          pph: 233,
        },
      ],
    },
    {
      name: 'More Tree',
      id: 1,
      items: [
        {
          name: 'Fertilizer',
          description: 'Fertilize your plant',
          image: '',
          cost: 23423432,
          level: 0,
          pph: 486,
        },
        {
          name: 'Fertilizer',
          description: 'Fertilize your plant',
          image: '',
          cost: 23423432,
          level: 0,
          pph: 486,
        },
        {
          name: 'Fertilizer',
          description: 'Fertilize your plant',
          image: '',
          cost: 23423432,
          level: 0,
          pph: 486,
        },
        {
          name: 'Fertilizer',
          description: 'Fertilize your plant',
          image: '',
          cost: 23423432,
          level: 0,
          pph: 486,
        },
        {
          name: 'Fertilizer',
          description: 'Fertilize your plant',
          image: '',
          cost: 23423432,
          level: 0,
          pph: 486,
        },
      ],
    },
    {
      name: 'Pohon Aja',
      id: 2,
      items: [
        {
          name: 'Earth',
          description: 'Make earth green!',
          image: '',
          cost: 8435983,
          level: 3,
          pph: 12,
        },
      ],
    },
  ];

  return (
    <section className={`p-4 ${classes.container}`}>
      <div className="grid grid-cols-2 gap-4">
        <h1 className={`col-span-2 py-2 ${classes.pageTitle}`}>upgrade your tree</h1>
        <div
          className={`col-span-2 flex justify-around gap-4 text-center ${classes.upgradeFilterContainer}`}
        >
          {items.map((item, index) => (
            <div key={item.id} className="relative w-full" onClick={() => setActiveCategory(index)}>
              <span
                className={`relative z-10 w-full font-semibold ${
                  activeCategory === index ? classes.activeCategory : ''
                }`}
              >
                {item.name}
              </span>
              {activeCategory === index && (
                <motion.div
                  layoutId="filterName"
                  className={`${classes.categoryBg} absolute left-0 top-0 z-0 h-full w-full rounded`}
                />
              )}
            </div>
          ))}
        </div>
        {items[activeCategory].items.map((item, index) => (
          <div key={index} className={`${classes.upgradeCardContainer} relative p-4 pt-6`}>
            <div className={`absolute -right-2 -top-3 px-4 py-1 ${classes.cardContainerProfit}`}>
              <p>+{item.pph}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="image">
                <Dirt />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </div>
            <div className={`mt-2 flex items-center justify-between pt-2 ${classes.upgradeDetail}`}>
              <div>
                <span>Lv. 1</span>
              </div>
              <div className="flex items-center">
                <div className="image" style={{ fontSize: 16 }}>
                  <Coin />
                </div>
                <h6>{formatMoney(item.cost)}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
