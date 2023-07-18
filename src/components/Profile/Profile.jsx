import PropTypes from 'prop-types';
import { Container, ListsStats, List, Name } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div>
        <img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ListsStats>
        <List>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </List>
        <List>
          <span>Views</span>
          <span>{stats.views}</span>
        </List>
        <List>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </List>
      </ListsStats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
