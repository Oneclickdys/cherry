import PropTypes from 'prop-types';
import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user, idx) => {
        return (
          <div className="user-list__entry" key={idx}>
            {user.name}
          </div>
        );
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
