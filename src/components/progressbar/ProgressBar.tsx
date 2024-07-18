import React from 'react';

import useStyles from './ProgressBar.styles';

interface Props {
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.progressBarContainer} rounded-full`}>
      <div
        className="progress-bar rounded-full"
        style={{ width: `${progress === 0 ? 1 : progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
