import * as React from 'react';

import useStyle from '@/styles/mine.styles';
const PlantPage: React.FC = () => {
  const { classes } = useStyle();

  return (
    <>
      <section className={`${classes.container}`}>
        <h1 className="mt-4">Hello!</h1>
      </section>
    </>
  );
};

export default PlantPage;
