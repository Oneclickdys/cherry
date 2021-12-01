import { LinearProgress } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

function ProgressBar({ size, color, progress }) {
  return (
    <div className={clsx('progress', `progress--size-${size}`, `progress--color-${color}`)}>
      <LinearProgress variant="determinate" value={progress || 0} color="inherit" />
    </div>
  );
}

ProgressBar.defaultProps = {
  size: 'default',
  color: 'default',
  progress: 0,
};

ProgressBar.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'big']),
  color: PropTypes.oneOf(['default', 'primary']),
  progress: PropTypes.number,
  indeterminate: PropTypes.bool,
};

export default ProgressBar;
