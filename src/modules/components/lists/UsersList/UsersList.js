import PropTypes from 'prop-types';
import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user) => {
        return <div className="user-list__entry">{user.name}</div>;
      })}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
