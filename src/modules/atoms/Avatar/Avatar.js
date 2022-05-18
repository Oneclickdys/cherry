import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Avatar = ({ image, size, borderColor }) => {
  return (
    <div
      className={clsx('avatar', `avatar--size-${size}`, { 'avatar--with-border': borderColor })}
      style={{ backgroundImage: image && `url(${image})`, borderColor: borderColor }}
    ></div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['default', 'xl']),
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
