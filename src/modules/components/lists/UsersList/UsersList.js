import PropTypes from 'prop-types';
import React from 'react';
import UserInfo from '../../../atoms/UserInfo/UserInfo';

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users.map((user, idx) => {
        return (
          <div className="user-list__entry" key={idx}>
            <UserInfo user={user} />
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
