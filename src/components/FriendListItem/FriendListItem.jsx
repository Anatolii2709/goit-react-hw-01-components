import { List, Status } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <List className="item" key={id}>
        <Status className="status" isOnline={isOnline}></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </List>
    );
  });
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
