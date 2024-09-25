import useStyle from '@/styles/friends.styles';

import Frens from '~/svg/frens.svg';

export default function FriendPage() {
  const { classes } = useStyle();
  const friends = [
    {
      name: 'Ade Putra',
      timeout: 5,
      reward: 5000,
    },
    {
      name: 'Doni Turnip',
      timeout: 3,
      reward: 7000,
    },
  ];

  return (
    <section className={`p-4 ${classes.container}`}>
      <div className="grid grid-cols-2 gap-4">
        <h1 className={`col-span-2 py-2 ${classes.pageTitle}`}>friends</h1>
        <div className={`col-span-2 flex flex-col items-center py-2 ${classes.card}`}>
          <div className="image">
            <Frens />
          </div>
          <h1 className="text-4xl">+5</h1>
          <h2>get rewarded by inviting your frens planting trees!</h2>
        </div>
        <h1 className={`col-span-2 text-right ${classes.totalText}`}>Total : 3</h1>
        {friends.map((friend, index) => (
          <div key={index} className={`${classes.upgradeCardContainer} relative col-span-2 p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="profilePicture flex h-8 w-8 items-center justify-center rounded-full font-extrabold">
                  <h6>{friend.name.substring(0, 1)}</h6>
                </div>
                <h4 className="font-bold">{friend.name}</h4>
              </div>
              <div>
                <p className="font-semibold">+{friend.reward}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
