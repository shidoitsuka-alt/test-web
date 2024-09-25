import { FaChevronRight } from 'react-icons/fa';

import useStyle from '@/styles/mission.styles';

import Dirt from '~/svg/dirt.svg';

export default function MissionPage() {
  const { classes } = useStyle();
  const tasks = [
    {
      name: 'Follow Telegram',
      description: 'Follow our social media',
      image: '',
      timeout: 5,
      reward: 5000,
      url: '',
    },
    {
      name: 'Follow X',
      description: '',
      image: '',
      timeout: 3,
      reward: 7000,
      url: '',
    },
  ];

  return (
    <section className={`p-4 ${classes.container}`}>
      <div className="grid grid-cols-2 gap-4">
        <h1 className={`col-span-2 py-2 ${classes.pageTitle}`}>missions</h1>
        {tasks.map((task, index) => (
          <div key={index} className={`${classes.upgradeCardContainer} relative col-span-2 p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="image">
                  <Dirt />
                </div>
                <div>
                  <h4 className="font-bold">{task.name}</h4>
                  <h6>{task.description}</h6>
                </div>
              </div>
              <div>
                {/* <ImCheckmark /> */}
                <FaChevronRight />
              </div>
            </div>
            <div className={`mt-2 flex items-center justify-between pt-2 ${classes.upgradeDetail}`}>
              <div>
                <span>Daily</span>
              </div>
              <div className="flex items-center">
                <div className="image" style={{ fontSize: 16 }}></div>
                <p>+{task.reward}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
