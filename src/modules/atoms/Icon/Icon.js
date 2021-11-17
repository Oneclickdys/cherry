import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import Icons from '../../../utils/icons';

const Icon = ({ type, title, size, color }) => {
  let IconComponent = Icons.getIcon(type).icon;

  return <IconComponent className={clsx('icon', `icon--size-${size}`, `icon--color-${color}`)} title={title} />;
};

Icon.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'big']),
  color: PropTypes.oneOf(['', 'default', 'primary', 'secondary', 'white', 'black']),
};

Icon.defaultProps = {
  type: 'back',
  title: '',
  size: 'default',
  color: 'default',
};

export default Icon;
