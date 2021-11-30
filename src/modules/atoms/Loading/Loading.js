import { CircularProgress } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

function Loading({ size, color }) {
  return (
    <div className={clsx('loading', `loading--size-${size}`, `loading--color-${color}`)}>
      <CircularProgress color="inherit" />
    </div>
  );
}

Loading.defaultProps = {
  size: 'default',
  color: 'default',
};

Loading.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'big']),
  color: PropTypes.oneOf(['default', 'primary']),
};

export default Loading;
